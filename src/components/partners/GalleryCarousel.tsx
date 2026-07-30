"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type Shot = { src: string; caption: string };

// Row 1 and Row 2 travel in opposite directions.
const ROW_A: Shot[] = [
  { src: "/assets/gallery/nandan-shetty-desync-studio.jpg", caption: "Nandan Shetty · Desync Studio" },
  { src: "/assets/gallery/vineet-neeraj-capitalcorn.jpg", caption: "Vineet Neeraj · CapitalCorn" },
  { src: "/assets/gallery/ashish-khetan-benzai10.jpg", caption: "Ashish Khetan · Benzai10" },
  { src: "/assets/gallery/nitesh-raghu-leptron.jpg", caption: "Nitesh Raghu · Leptron" },
  { src: "/assets/gallery/achal-gowda-regen.jpg", caption: "Achal Gowda · Regen & Co" },
  { src: "/assets/gallery/vaibhav-kubar-labs.jpg", caption: "Vaibhav · Kubar Labs" },
  { src: "/assets/gallery/raghav-chopra-antler.jpg", caption: "Raghav Chopra · Antler" },
  { src: "/assets/gallery/shubham-jhuria-aeravti-ventures.jpg", caption: "Shubham Jhuria · Aeravti Ventures" },
];

const ROW_B: Shot[] = [
  { src: "/assets/gallery/chetan-yellapurkar-golf-beyond.jpg", caption: "Chetan Yellapurkar · Golf & Beyond" },
  { src: "/assets/gallery/rohit-salveru-cargofirst.jpg", caption: "Rohit Salveru · CargoFirst" },
  { src: "/assets/gallery/global-chambers-vibrant-goa.jpg", caption: "Global Chamber · Vibrant Goa" },
  { src: "/assets/gallery/tbb-x-capitalcorn.jpg", caption: "The Big Blind × CapitalCORN" },
  { src: "/assets/gallery/tbb-x-benzai10.jpg", caption: "The Big Blind × Benzai10" },
  { src: "/assets/gallery/jury-at-isbm.jpg", caption: "Jury panel, ISBM" },
  { src: "/assets/gallery/raghav-chopra-antler-2.jpg", caption: "Raghav Chopra · Antler" },
];

function Row({
  shots,
  direction,
  speed = 0.35,
}: {
  shots: Shot[];
  /** 1 = drifts left (content moves right→left), -1 = drifts right */
  direction?: 1 | -1;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  // Interaction state kept in refs so the rAF loop reads live values.
  const paused = useRef(false);
  const dragging = useRef(false);
  const startX = useRef(0);
  const startScroll = useRef(0);
  const dir = direction ?? 1;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Start the reverse row partway in so it has room to travel backwards.
    const half = () => el.scrollWidth / 2;
    if (dir === -1) el.scrollLeft = half();

    let raf = 0;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (reduced || paused.current || dragging.current) return;
      el.scrollLeft += speed * dir;
      // Seamless wrap — the track holds two copies of the list.
      if (dir === 1 && el.scrollLeft >= half()) el.scrollLeft -= half();
      if (dir === -1 && el.scrollLeft <= 0) el.scrollLeft += half();
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [dir, speed]);

  // Mouse drag-to-scrub. Touch is left to the browser's native panning
  // (momentum + no jank), which `touch-action: pan-x` enables.
  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el) return;
    dragging.current = true;
    startX.current = e.clientX;
    startScroll.current = el.scrollLeft;
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    const el = ref.current;
    if (!el) return;
    e.preventDefault();
    el.scrollLeft = startScroll.current - (e.clientX - startX.current);
    const half = el.scrollWidth / 2;
    if (el.scrollLeft >= half) {
      el.scrollLeft -= half;
      startScroll.current -= half;
    }
    if (el.scrollLeft <= 0) {
      el.scrollLeft += half;
      startScroll.current += half;
    }
  };

  const endDrag = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    dragging.current = false;
    ref.current?.releasePointerCapture(e.pointerId);
  };

  const items = [...shots, ...shots];

  return (
    <div
      ref={ref}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      className="no-scrollbar flex gap-4 overflow-x-auto overscroll-x-contain [touch-action:pan-x] cursor-grab active:cursor-grabbing"
    >
      {items.map((shot, i) => (
        <figure
          key={`${shot.src}-${i}`}
          className="group relative h-[190px] w-[280px] shrink-0 overflow-hidden rounded-[8px] border border-silver-line bg-ink-800 sm:h-[230px] sm:w-[340px] md:h-[260px] md:w-[390px]"
        >
          <Image
            src={shot.src}
            alt={shot.caption}
            fill
            draggable={false}
            sizes="(max-width: 640px) 280px, (max-width: 768px) 340px, 390px"
            className="select-none object-cover transition-transform duration-700 ease-expo group-hover:scale-[1.04]"
          />
          <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-4 py-3">
            <span className="font-body text-[0.8rem] italic text-bone/90">
              {shot.caption}
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function GalleryCarousel() {
  return (
    <div className="relative -mx-6 sm:-mx-8 lg:-mx-12">
      {/* edge fades so the rows bleed off-canvas rather than cutting hard */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink to-transparent md:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink to-transparent md:w-28" />

      <div className="flex flex-col gap-4 px-6 sm:px-8 lg:px-12">
        <Row shots={ROW_A} direction={1} />
        <Row shots={ROW_B} direction={-1} />
      </div>
    </div>
  );
}
