"use client";

import { useEffect, useState, type FormEvent } from "react";
import { SITE } from "@/lib/constants";
import { Label, Suit, type SuitName } from "./primitives";

type Path = { key: string; pill: string; hidden: string; headline: string; body: string };

const PATHS: Path[] = [
  {
    key: "podcast",
    pill: "Podcast",
    hidden: "Podcast",
    headline: "You have a story worth telling.",
    body: "A perspective worth sharing on The Big Blind. Tell us who you are and what you are building or backing, and we will be in touch if there is a fit.",
  },
  {
    key: "venture-building",
    pill: "Venture Building",
    hidden: "Venture Building",
    headline: "You are building something and believe we can help.",
    body: "Tell us about your venture, your stage, and what you are looking for. Our venture building support is selective and specific. If there is a fit, we will make it count.",
  },
  {
    key: "collaboration",
    pill: "Collaboration",
    hidden: "Collaboration Opportunities",
    headline: "You see what we are building and want to be part of it.",
    body: "Whether you are a partner, institution or organisation, we are always open to conversations about how to build together. Tell us how you see it and we will take it from there.",
  },
];

const ROLES: { label: string; suit: SuitName }[] = [
  { label: "Founder", suit: "spade" },
  { label: "Investor", suit: "heart" },
  { label: "Venture Capital", suit: "diamond" },
  { label: "Financial Institution", suit: "club" },
];

type Status = "idle" | "submitting" | "error" | "success";

export function ReachOutForm() {
  const [active, setActive] = useState(0);
  const [role, setRole] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const path = PATHS[active];

  // Apply ?path= after mount so the route stays statically prerendered.
  useEffect(() => {
    const key = new URLSearchParams(window.location.search).get("path");
    const found = PATHS.findIndex((x) => x.key === key);
    if (found >= 0) setActive(found);
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch(SITE.formspree, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
        setRole("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const buttonLabel =
    status === "submitting"
      ? "Sending…"
      : status === "error"
        ? "Something went wrong — try again"
        : "Submit application";

  if (status === "success") {
    return (
      <div className="reach-success" role="status" aria-live="polite">
        <span className="reach-success__mark">
          <Suit name="spade" red />
        </span>
        <h2 className="tbb-headline tbb-display-m">Application received.</h2>
        <p className="tbb-lead" style={{ color: "var(--ink-muted)" }}>
          We review every submission personally. If there is a fit, we will be in touch at the details you provided.
        </p>
        <a className="reach-email" href={`mailto:${SITE.email}`}>
          {SITE.email}
        </a>
      </div>
    );
  }

  return (
    <>
      {/* Path selector */}
      <div className="section-head" style={{ marginBottom: "var(--space-8)" }}>
        <div className="section-head__eyebrow">
          <Label>What brings you here?</Label>
        </div>
        <h2 className="tbb-headline tbb-display-m">Choose the path that fits.</h2>
      </div>
      <div className="choice-row">
        {PATHS.map((p, i) => (
          <button
            key={p.key}
            type="button"
            onClick={() => setActive(i)}
            aria-pressed={i === active}
            className={`choice${i === active ? " choice--on" : ""}`}
          >
            {p.pill}
          </button>
        ))}
      </div>
      <div className="reach-blurb">
        <h3 className="reach-blurb__head">{path.headline}</h3>
        <p className="reach-blurb__body">{path.body}</p>
      </div>

      {/* Form */}
      <form id="apply" className="reach-form" onSubmit={onSubmit}>
        <input type="hidden" name="path" value={path.hidden} />
        <input type="hidden" name="I am a" value={role} />

        <div className="reach-field">
          <span className="tbb-field__label">I am a</span>
          <div className="choice-row">
            {ROLES.map((r) => (
              <button
                key={r.label}
                type="button"
                onClick={() => setRole(role === r.label ? "" : r.label)}
                aria-pressed={role === r.label}
                className={`choice${role === r.label ? " choice--on" : ""}`}
              >
                <span className="choice__suit">
                  <Suit name={r.suit} red={r.suit === "heart" || r.suit === "diamond"} />
                </span>
                {r.label}
              </button>
            ))}
          </div>
        </div>

        <div className="reach-field">
          <label className="tbb-field__label" htmlFor="name">
            Full name <span>*</span>
          </label>
          <input id="name" name="Full Name" type="text" required autoComplete="name" className="tbb-field__control" />
        </div>

        <div className="reach-field">
          <label className="tbb-field__label" htmlFor="company">
            Company or organisation
          </label>
          <input id="company" name="Company or Organisation" type="text" autoComplete="organization" placeholder="Where you are from" className="tbb-field__control" />
        </div>

        <div className="reach-grid-2">
          <div className="reach-field">
            <label className="tbb-field__label" htmlFor="email">
              Email address <span>*</span>
            </label>
            <input id="email" name="Email Address" type="email" required autoComplete="email" className="tbb-field__control" />
          </div>
          <div className="reach-field">
            <label className="tbb-field__label" htmlFor="phone">
              Phone number <span>*</span>
            </label>
            <input id="phone" name="Phone Number" type="tel" required autoComplete="tel" placeholder="+91 98765 43210" className="tbb-field__control" />
          </div>
        </div>

        <div className="reach-field">
          <label className="tbb-field__label" htmlFor="message">
            Tell us briefly what you are looking for
          </label>
          <textarea id="message" name="Tell us briefly what you are looking for" rows={4} placeholder="A few lines is enough. We read everything." className="tbb-field__control" style={{ minHeight: 120, paddingTop: 12, resize: "none" }} />
        </div>

        <div className="reach-foot">
          <p className="reach-foot__note">We review every submission personally. Not every application will receive a response.</p>
          <button type="submit" disabled={status === "submitting"} className="tbb-btn tbb-btn--blind">
            {buttonLabel}
          </button>
        </div>
      </form>

      <p className="reach-secondary">
        If you are a student, vendor or would like to work with us, reach out{" "}
        <a href="https://wa.me/917032289906" target="_blank" rel="noopener noreferrer">
          here
        </a>
        .
      </p>
    </>
  );
}
