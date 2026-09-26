export interface Segment {
  text: string;
  className?: string;
}

export function totalLength(segments: Segment[]) {
  return segments.reduce((sum, segment) => sum + segment.text.length, 0);
}

interface TypedSegmentsProps {
  segments: Segment[];
  typed: number;
  // Keep the caret blinking after the last character (off for command lines
  // whose output follows).
  caretWhenDone?: boolean;
}

// Renders the first `typed` characters normally and the rest transparent, so
// the full text is always in the DOM and the layout never shifts.
export default function TypedSegments({
  segments,
  typed,
  caretWhenDone = true,
}: TypedSegmentsProps) {
  const total = totalLength(segments);
  const starts = segments.map((_, i) => totalLength(segments.slice(0, i)));

  return segments.map(function (segment, i) {
    const start = starts[i];
    const visibleLength = Math.max(
      0,
      Math.min(segment.text.length, typed - start),
    );
    const visible = segment.text.slice(0, visibleLength);
    const pending = segment.text.slice(visibleLength);
    // The caret sits in the segment currently being typed, or at the very end.
    const isLast = i === segments.length - 1;
    const showCaret =
      (typed >= start && typed < start + segment.text.length) ||
      (isLast && typed >= total && caretWhenDone);

    return (
      <span key={i} className={segment.className}>
        {visible}
        {showCaret && <span className="terminal-caret" aria-hidden="true" />}
        {pending && <span className="terminal-pending">{pending}</span>}
      </span>
    );
  });
}
