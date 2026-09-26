"use client";

import type { CSSProperties } from "react";
import TerminalWindow from "./TerminalWindow";
import TypedSegments, { totalLength, type Segment } from "./TypedSegments";
import { useTypewriter } from "@/hooks/useTypewriter";

// "Cloud & CI/CD" -> "cloud-ci-cd", used as the folder name in `ls`.
function toFolderName(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

interface TechStackCategoryProps {
  name: string;
  items: string[];
  // Position in the grid, used to stagger cards that appear together.
  index: number;
}

// A terminal that types `ls <category>/` when scrolled into view, then prints
// the items like command output.
export default function TechStackCategory({
  name,
  items,
  index,
}: TechStackCategoryProps) {
  const command: Segment[] = [
    { text: "ls", className: "terminal-command" },
    { text: ` ${toFolderName(name)}/` },
  ];
  const { ref, typed, done } = useTypewriter<HTMLDivElement>(
    totalLength(command),
    { charDelay: 45, startDelay: 300 + (index % 2) * 350 },
  );

  return (
    <TerminalWindow ref={ref} title={name} titleAs="h3" className="category">
      <p className="terminal-line">
        <span className="terminal-prompt">mbfassnacht %</span>{" "}
        <TypedSegments segments={command} typed={typed} caretWhenDone={false} />
      </p>
      <ul className={done ? "items revealed" : "items"}>
        {items.map(function (item, i) {
          return (
            <li
              className="item"
              key={item}
              style={{ "--i": i } as CSSProperties}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </TerminalWindow>
  );
}
