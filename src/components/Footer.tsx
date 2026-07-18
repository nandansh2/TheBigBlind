export default function Footer() {
  return (
    <footer className="bg-black border-t border-line-dark px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6 text-center min-[700px]:flex-row min-[700px]:items-center min-[700px]:justify-between min-[700px]:text-left">
        <p className="text-white/70 text-sm sm:text-base">
          The Right Table. The Right People. The Right Bets.
        </p>
        <div className="flex flex-col items-center gap-3 min-[700px]:flex-row min-[700px]:items-center min-[700px]:gap-6 text-sm text-white/70">
          <a
            href="https://instagram.com/the_big_blind_"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            @the_big_blind_
          </a>
          <a
            href="mailto:dealer@thebigblind.club"
            className="hover:text-white transition-colors"
          >
            dealer@thebigblind.club
          </a>
          <a
            href="tel:+919035462042"
            className="hover:text-white transition-colors"
          >
            +91 90354 62042
          </a>
        </div>
      </div>
    </footer>
  );
}
