"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { useMemo, useState, type FormEvent } from "react";
import { Section } from "@/components/primitives/Section";
import { Glyph, type GlyphName } from "@/components/primitives/Glyph";
import { SITE } from "@/lib/constants";
import { EASE_EXPO } from "@/lib/motion";

type Path = {
  key: string;
  pill: string;
  glyph: GlyphName;
  hidden: string;
  label: string;
  headline: string;
  body: string;
};

const PATHS: Path[] = [
  {
    key: "podcast",
    pill: "Podcast",
    glyph: "spade",
    hidden: "Podcast",
    label: "Podcast",
    headline: "You have a story worth telling.",
    body: "A perspective worth sharing. A conversation worth having on The Big Blind. Tell us who you are and what you are building or backing, and we will be in touch if there is a fit.",
  },
  {
    key: "venture-building",
    pill: "Venture Building",
    glyph: "lozenge",
    hidden: "Venture Building",
    label: "Venture Building",
    headline: "You are building something and you believe we can help.",
    body: "Tell us about your venture, your stage, and what you are looking for. Our venture building support is selective and specific. If there is a fit, we will make it count.",
  },
  {
    key: "collaboration",
    pill: "Collaboration",
    glyph: "club",
    hidden: "Collaboration Opportunities",
    label: "Collaboration Opportunities",
    headline: "You see what we are building and want to be part of it.",
    body: "Whether you are a partner, institution, or organisation, we are always open to conversations about how to build together. Tell us how you see it and we will take it from there.",
  },
];

const ROLES: { label: string; glyph: GlyphName }[] = [
  { label: "Founder", glyph: "spade" },
  { label: "Investor", glyph: "heart" },
  { label: "Venture Capital", glyph: "diamond" },
  { label: "Financial Institution", glyph: "club" },
];

type Status = "idle" | "submitting" | "error" | "success";

const fieldClass =
  "w-full rounded-[6px] border border-silver-line bg-white/[0.02] px-4 py-3.5 font-body text-bone " +
  "placeholder:text-bone-faint transition-colors duration-300 focus:border-silver focus:outline-none " +
  "focus-visible:outline-none";
const labelClass =
  "mb-2 block font-mono text-[0.68rem] uppercase tracking-label text-silver-dim";

export function ReachOut() {
  const params = useSearchParams();
  const initial = useMemo(() => {
    const p = params.get("path");
    const found = PATHS.findIndex((x) => x.key === p);
    return found >= 0 ? found : 0;
  }, [params]);

  const [active, setActive] = useState(initial);
  const [role, setRole] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const path = PATHS[active];

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch(SITE.formspree, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
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
        : "Submit Application";

  return (
    <>
      {/* Path selector */}
      <Section className="section-py border-t border-silver-line">
        <p className="label mb-6 text-silver">What Brings You to The Big Blind?</p>
        <p className="max-w-2xl text-lg text-bone-muted md:text-xl">
          Select the path that fits your reason for reaching out.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {PATHS.map((p, i) => {
            const on = i === active;
            return (
              <button
                key={p.key}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={on}
                className={`pill inline-flex items-center gap-2.5 border ${
                  on
                    ? "border-transparent bg-bone text-ink"
                    : "border-silver-line text-silver hover:border-silver hover:text-bone"
                }`}
              >
                <Glyph
                  name={p.glyph}
                  size={15}
                  tone={on ? "current" : "silver"}
                />
                {p.pill}
              </button>
            );
          })}
        </div>

        <div className="mt-10 min-h-[180px]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="glass rounded-[10px] p-8 md:p-10"
            >
              <p className="label mb-4 text-silver">{path.label}</p>
              <h3 className="max-w-2xl font-display text-2xl text-bone md:text-3xl">
                {path.headline}
              </h3>
              <p className="mt-4 max-w-prose leading-relaxed text-bone-muted">
                {path.body}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </Section>

      {/* Contact form */}
      <Section className="section-py border-t border-silver-line">
        <div className="mx-auto max-w-prose">
          <AnimatePresence mode="wait" initial={false}>
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: EASE_EXPO }}
                className="silver-border rounded-[10px] px-8 py-16 text-center md:px-14 md:py-20"
                role="status"
                aria-live="polite"
              >
                <Glyph
                  name="spade"
                  size={56}
                  tone="silver"
                  className="mx-auto mb-8"
                />
                <h2 className="font-display text-4xl text-bone md:text-5xl">
                  Application received.
                </h2>
                <p className="mx-auto mt-6 max-w-md leading-relaxed text-bone-muted">
                  We review every submission personally. If there is a fit, we
                  will be in touch at the contact details you provided.
                </p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="mt-8 inline-block font-mono text-[0.72rem] uppercase tracking-label text-silver transition-colors hover:text-bone"
                >
                  {SITE.email}
                </a>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={onSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-6"
              >
                {/* hidden path field — updates to match active pill */}
                <input type="hidden" name="path" value={path.hidden} />

                {/* Who is reaching out — carried into the submission. */}
                <div>
                  <span className={labelClass}>I am a</span>
                  <div className="flex flex-wrap gap-2.5">
                    {ROLES.map((r) => {
                      const on = role === r.label;
                      return (
                        <button
                          key={r.label}
                          type="button"
                          onClick={() => setRole(on ? "" : r.label)}
                          aria-pressed={on}
                          className={`pill inline-flex items-center gap-2 border ${
                            on
                              ? "border-transparent bg-bone text-ink"
                              : "border-silver-line text-silver hover:border-silver hover:text-bone"
                          }`}
                        >
                          <Glyph
                            name={r.glyph}
                            size={14}
                            tone={on ? "current" : undefined}
                          />
                          {r.label}
                        </button>
                      );
                    })}
                  </div>
                  <input type="hidden" name="I am a" value={role} />
                </div>

                <div>
                  <label htmlFor="name" className={labelClass}>
                    Full Name <span className="text-pinkred">*</span>
                  </label>
                  <input
                    id="name"
                    name="Full Name"
                    type="text"
                    required
                    autoComplete="name"
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label htmlFor="company" className={labelClass}>
                    Company or Organisation
                  </label>
                  <input
                    id="company"
                    name="Company or Organisation"
                    type="text"
                    autoComplete="organization"
                    placeholder="Where you are from"
                    className={fieldClass}
                  />
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email Address <span className="text-pinkred">*</span>
                    </label>
                    <input
                      id="email"
                      name="Email Address"
                      type="email"
                      required
                      autoComplete="email"
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClass}>
                      Phone Number <span className="text-pinkred">*</span>
                    </label>
                    <input
                      id="phone"
                      name="Phone Number"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="+91 98765 43210"
                      className={fieldClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>
                    Tell us briefly what you are looking for
                  </label>
                  <textarea
                    id="message"
                    name="Tell us briefly what you are looking for"
                    rows={4}
                    placeholder="A few lines is enough. We read everything."
                    className={`${fieldClass} resize-none`}
                  />
                </div>

                <div className="mt-2 flex flex-col gap-6 border-t border-silver-line pt-8 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-sm font-mono text-[0.68rem] uppercase leading-relaxed tracking-label text-silver-dim">
                    We review every submission personally. Not every application
                    will receive a response.
                  </p>
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="group inline-flex shrink-0 items-center gap-2.5 rounded-full bg-bone px-7 py-3.5 font-mono text-[0.72rem] uppercase tracking-label text-ink transition-all duration-300 ease-expo hover:bg-white hover:shadow-[0_0_40px_-8px_rgba(255,61,104,0.5)] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {buttonLabel}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>

          {/* Secondary route for students, vendors and collaborators */}
          <p className="mt-10 border-t border-silver-line pt-8 leading-relaxed text-bone-muted">
            If you are a student, vendor or would like to work with us, reach out{" "}
            <a
              href="https://wa.me/917032289906"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-silver/60 underline-offset-4 transition-colors duration-300 hover:text-bone hover:decoration-pinkred"
            >
              here
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
