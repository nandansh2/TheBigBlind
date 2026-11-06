import { Suit, Wordmark, Label } from "./primitives";

/* Hero flip card: a card that turns face up like a pass. Front carries the line,
   back carries the mark. Auto-rotates on an ambient loop, pauses on hover, and holds
   still under prefers-reduced-motion (handled in site.css). Decorative; text sits in flow. */
export function FlipCard() {
  return (
    <div className="flip" aria-hidden="false">
      <div className="flip__inner">
        <div className="flip__face flip__front">
          <Label>The Big Blind</Label>
          <p className="flip__quote">
            The problem isn&rsquo;t the idea.
            <b>It&rsquo;s the room.</b>
          </p>
          <span className="flip__hint">Enter the right room</span>
        </div>
        <div className="flip__face flip__back">
          <span className="flip__spade">
            <Suit name="spade" red />
          </span>
          <Wordmark />
        </div>
      </div>
    </div>
  );
}
