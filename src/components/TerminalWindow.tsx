import "@/styles/components/Terminal/terminal.scss";

import type { ReactNode, Ref } from "react";

interface TerminalWindowProps {
  title: string;
  // Use a heading when the title labels the content (e.g. a tech stack category).
  titleAs?: "span" | "h3";
  className?: string;
  ref?: Ref<HTMLDivElement>;
  children: ReactNode;
}

export default function TerminalWindow({
  title,
  titleAs: Title = "span",
  className,
  ref,
  children,
}: TerminalWindowProps) {
  return (
    <div ref={ref} className={className ? `terminal ${className}` : "terminal"}>
      <div className="terminal-header">
        <span className="terminal-dot red"></span>
        <span className="terminal-dot yellow"></span>
        <span className="terminal-dot green"></span>
        <Title className="terminal-title">{title}</Title>
      </div>
      <div className="terminal-body">{children}</div>
    </div>
  );
}
