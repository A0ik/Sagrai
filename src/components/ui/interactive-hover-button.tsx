import * as React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type CommonProps = {
  text?: string;
  className?: string;
};

type LinkProps = CommonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export function InteractiveHoverButton(props: LinkProps | ButtonProps) {
  const { text = "Button", className, ...rest } = props;

  const base = cn(
    "group relative inline-flex items-center justify-center",
    "overflow-hidden rounded-full border",
    "px-5 py-3 text-center font-semibold",
    // ✅ GLASS LOOK (au repos)
    "bg-white/12 backdrop-blur-md border-white/20",
    // texte visible même sur hero text-white
    "text-white",
    // focus
    "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
    className
  );

  const content = (
    <>
      {/* Texte au repos */}
      <span className="relative z-10 inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
        {text}
      </span>

      {/* Texte au hover */}
      <span className="absolute inset-0 z-20 flex translate-x-12 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
        <span>{text}</span>
        <ArrowRight className="h-4 w-4" />
      </span>

      {/* Fond vert animé */}
      <span className="absolute left-[7%] top-[40%] z-0 h-2 w-2 scale-[1] rounded-lg bg-orange-600 transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8]" />
    </>
  );

  // href => <a>
  if ("href" in props) {
    const { href, target, rel, ...aRest } =
      rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    const safeRel = target === "_blank" ? rel ?? "noopener noreferrer" : rel;

    return (
      <a href={href} target={target} rel={safeRel} className={base} {...aRest}>
        {content}
      </a>
    );
  }

  // sinon => <button>
  return (
    <button
      className={base}
      type="button"
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
}