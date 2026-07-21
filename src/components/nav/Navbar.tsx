"use client";

import { useEffect, useState } from "react";
import { Wordmark } from "@/components/primitives/Wordmark";
import { useMenu } from "./MenuContext";
import { HamburgerMenu } from "./HamburgerMenu";

export function Navbar() {
  const { open, openMenu } = useMenu();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ease-expo ${
          scrolled
            ? "border-b border-silver-line bg-ink/70 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="content-px">
          <div className="mx-auto flex h-[68px] max-w-content items-center justify-between md:h-[76px]">
            <Wordmark />

            <button
              type="button"
              onClick={openMenu}
              aria-label="Open menu"
              aria-expanded={open}
              className="group grid h-11 w-11 place-items-center rounded-[6px] border border-silver-line transition-colors duration-300 ease-expo hover:border-silver focus-visible:border-silver"
            >
              <span className="flex flex-col gap-[5px]">
                <span className="h-px w-5 bg-bone transition-all duration-300 ease-expo group-hover:w-6" />
                <span className="h-px w-5 bg-bone transition-all duration-300 ease-expo group-hover:w-4" />
              </span>
            </button>
          </div>
        </nav>
      </header>

      <HamburgerMenu />
    </>
  );
}
