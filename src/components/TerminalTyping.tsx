"use client";

import TypedSegments, { totalLength, type Segment } from "./TypedSegments";
import { useTypewriter } from "@/hooks/useTypewriter";

interface TerminalTypingProps {
  prompt: string;
  segments: Segment[];
}

// Types the segments out once the terminal scrolls into view.
export default function TerminalTyping({
  prompt,
  segments,
}: TerminalTypingProps) {
  const { ref, typed } = useTypewriter<HTMLParagraphElement>(
    totalLength(segments),
  );

  return (
    <p className="description" ref={ref}>
      <span className="terminal-prompt">{prompt} </span>
      <TypedSegments segments={segments} typed={typed} />
    </p>
  );
}
