import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <article
      className="
        rounded-2xl
        border
        border-slate-800
        bg-slate-900/70
        p-6
        shadow-sm
        backdrop-blur-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-slate-700
        hover:bg-slate-900
        hover:shadow-2xl
      "
    >
      {children}
    </article>
  );
}