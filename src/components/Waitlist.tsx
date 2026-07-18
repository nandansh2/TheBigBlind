"use client";

import { FormEvent, useState } from "react";
import BlurReveal from "./BlurReveal";
import SpadeMark from "./SpadeMark";
import GlobeBridge from "./GlobeBridge";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xpqvdaol";

type Status = "idle" | "submitting" | "success" | "error";

export default function Waitlist() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState(
    "Something went wrong. Try again."
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setErrorMessage("Something went wrong. Try again.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Connection error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <section
      id="waitlist"
      className="relative bg-black pt-[170px] sm:pt-[210px] lg:pt-[240px] pb-28 sm:pb-36 px-6 flex flex-col items-center"
    >
      <GlobeBridge />
      <div className="w-full max-w-[480px] flex flex-col items-center text-center">
        <BlurReveal as="p" className="eyebrow text-white/50 text-xs sm:text-sm mb-5">
          Limited Access
        </BlurReveal>
        <BlurReveal
          as="h2"
          className="font-sans font-extrabold tracking-[-0.03em] text-white text-[clamp(30px,5vw,48px)] leading-[1.05]"
        >
          Apply Now to Join Waitlist.
        </BlurReveal>
        <BlurReveal
          as="p"
          delay={0.1}
          className="mt-6 text-white/70 text-base sm:text-lg leading-relaxed"
        >
          We are opening the room to a select group of founders, investors,
          and partners. We will be in touch personally.
        </BlurReveal>

        <BlurReveal
          as="div"
          delay={0.15}
          className="font-mono mt-8 w-full border border-line-dark rounded-2xl px-5 py-4 text-white/50 text-[11px] sm:text-xs leading-relaxed"
        >
          Access is paid, restricted, and by screening only. We hold
          ourselves accountable to the quality of the room. Not every
          application will be accepted.
        </BlurReveal>

        <div className="w-full mt-10">
          {status === "success" ? (
            <div className="flex flex-col items-center text-center py-6">
              <SpadeMark className="w-8 h-8 text-white mb-5" />
              <p className="text-white font-sans font-bold text-xl tracking-[-0.02em]">
                Application received.
              </p>
              <p className="mt-4 text-white/70 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {
                  "We review every application personally. If your profile is a fit for the room, we will be in touch at the email you provided.\n\ndealer@thebigblind.club"
                }
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 text-left"
            >
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="name"
                  className="eyebrow text-white/50 text-[10px]"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-input bg-white/5 border border-line-dark px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/50 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="eyebrow text-white/50 text-[10px]"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-input bg-white/5 border border-line-dark px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/50 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="phone"
                  className="eyebrow text-white/50 text-[10px]"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="w-full rounded-input bg-white/5 border border-line-dark px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/50 transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-3 w-full rounded-full bg-white text-black font-semibold px-7 py-3.5 text-sm sm:text-base transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {status === "submitting"
                  ? "Submitting…"
                  : status === "error"
                    ? errorMessage
                    : "Apply Now to Join Waitlist →"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
