"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";

type Point3 = { lat: number; lon: number; x: number; y: number; z: number };

function buildDotGrid(): Point3[] {
  const points: Point3[] = [];
  const latSteps = 18;
  for (let i = 0; i <= latSteps; i++) {
    const lat = ((-80 + (160 * i) / latSteps) * Math.PI) / 180;
    const bandRadius = Math.cos(lat);
    const lonSteps = Math.max(6, Math.round(26 * bandRadius));
    for (let j = 0; j < lonSteps; j++) {
      const lon = (j / lonSteps) * Math.PI * 2;
      points.push({
        lat,
        lon,
        x: Math.cos(lat) * Math.cos(lon),
        y: Math.sin(lat),
        z: Math.cos(lat) * Math.sin(lon),
      });
    }
  }
  return points;
}

const NODES: { lat: number; lon: number }[] = [
  { lat: 0.55, lon: 0.4 },
  { lat: 0.15, lon: 2.3 },
  { lat: -0.5, lon: 3.6 },
  { lat: 0.35, lon: 5.1 },
];

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const size = 420;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    const points = buildDotGrid();
    const nodePoints = NODES.map((n) => ({
      x: Math.cos(n.lat) * Math.cos(n.lon),
      y: Math.sin(n.lat),
      z: Math.cos(n.lat) * Math.sin(n.lon),
    }));

    const cx = size / 2;
    const cy = size / 2;
    const R = size * 0.36;

    let theta = 0;
    let raf = 0;
    const start = performance.now();

    function rotate(p: { x: number; y: number; z: number }, t: number) {
      const cosT = Math.cos(t);
      const sinT = Math.sin(t);
      return {
        x: p.x * cosT + p.z * sinT,
        y: p.y,
        z: -p.x * sinT + p.z * cosT,
      };
    }

    function bezierPoint(
      p0: { x: number; y: number },
      p1: { x: number; y: number },
      p2: { x: number; y: number },
      t: number
    ) {
      const mt = 1 - t;
      return {
        x: mt * mt * p0.x + 2 * mt * t * p1.x + t * t * p2.x,
        y: mt * mt * p0.y + 2 * mt * t * p1.y + t * t * p2.y,
      };
    }

    function draw(now: number) {
      ctx!.clearRect(0, 0, size, size);

      // sphere body
      const bodyGradient = ctx!.createRadialGradient(
        cx - R * 0.35,
        cy - R * 0.35,
        R * 0.1,
        cx,
        cy,
        R
      );
      bodyGradient.addColorStop(0, "rgba(35,35,35,0.99)");
      bodyGradient.addColorStop(1, "rgba(4,4,4,1)");
      ctx!.beginPath();
      ctx!.arc(cx, cy, R, 0, Math.PI * 2);
      ctx!.fillStyle = bodyGradient;
      ctx!.fill();
      ctx!.strokeStyle = "rgba(255,255,255,0.14)";
      ctx!.lineWidth = 1;
      ctx!.stroke();

      // dots
      for (const p of points) {
        const rp = rotate(p, theta);
        if (rp.z < -0.05) continue;
        const sx = cx + rp.x * R;
        const sy = cy - rp.y * R;
        const depth = (rp.z + 1) / 2;
        const alpha = 0.15 + depth * 0.65;
        const dotR = 0.7 + depth * 1.1;
        ctx!.beginPath();
        ctx!.arc(sx, sy, dotR, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx!.fill();
      }

      // connection arcs
      const rotatedNodes = nodePoints.map((n) => rotate(n, theta));
      const projected = rotatedNodes.map((n) => ({
        x: cx + n.x * R,
        y: cy - n.y * R,
        z: n.z,
      }));

      for (let i = 0; i < projected.length; i++) {
        const a = projected[i];
        const b = projected[(i + 1) % projected.length];
        if (a.z < -0.15 && b.z < -0.15) continue;

        const mx = (a.x + b.x) / 2;
        const my = (a.y + b.y) / 2;
        const dx = mx - cx;
        const dy = my - cy;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const lift = R * 0.55;
        const control = {
          x: mx + (dx / dist) * lift,
          y: my + (dy / dist) * lift,
        };

        const arcAlpha = Math.max(0.08, (a.z + b.z + 2) / 4);
        ctx!.beginPath();
        ctx!.moveTo(a.x, a.y);
        ctx!.quadraticCurveTo(control.x, control.y, b.x, b.y);
        ctx!.strokeStyle = `rgba(255,255,255,${arcAlpha * 0.5})`;
        ctx!.lineWidth = 1;
        ctx!.stroke();

        if (!prefersReducedMotion) {
          const duration = 3200;
          const t =
            (((now - start) / duration + i * 0.27) % 1 + 1) % 1;
          const glowPos = bezierPoint(a, control, b, t);
          const glow = ctx!.createRadialGradient(
            glowPos.x,
            glowPos.y,
            0,
            glowPos.x,
            glowPos.y,
            10
          );
          glow.addColorStop(0, `rgba(255,255,255,${arcAlpha})`);
          glow.addColorStop(1, "rgba(255,255,255,0)");
          ctx!.beginPath();
          ctx!.arc(glowPos.x, glowPos.y, 10, 0, Math.PI * 2);
          ctx!.fillStyle = glow;
          ctx!.fill();
          ctx!.beginPath();
          ctx!.arc(glowPos.x, glowPos.y, 1.8, 0, Math.PI * 2);
          ctx!.fillStyle = "rgba(255,255,255,0.95)";
          ctx!.fill();
        }
      }

      // node markers
      for (const n of projected) {
        if (n.z < -0.15) continue;
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, 2.4, 0, Math.PI * 2);
        ctx!.fillStyle = "rgba(255,255,255,0.9)";
        ctx!.fill();
      }

      if (!prefersReducedMotion) {
        theta += 0.0022;
      }
      raf = requestAnimationFrame(draw);
    }

    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, [prefersReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="w-[230px] h-[230px] sm:w-[340px] sm:h-[340px] lg:w-[420px] lg:h-[420px]"
    />
  );
}
