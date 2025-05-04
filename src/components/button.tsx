import { cn } from "../lib/cn";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonBase = {
  title: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
};

type ButtonAsButton = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonBase & {
    type: "button";
  };

type ButtonAsAnchor = AnchorHTMLAttributes<HTMLAnchorElement> &
  ButtonBase & {
    type: "a";
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export default function Button(props: ButtonProps) {
  const { className, type, size = "md", ...rest } = props;

  const classes = cn(
    "bg-blue-500 hover:brightness-120 cursor-pointer transition-all duration-200 ease-in-out text-white",
    "px-4 py-2 rounded-md text-center flex items-center justify-center gap-2 text-md",
    {
      "text-sm": size === "sm",
      "text-md": size === "md",
      "text-lg": size === "lg",
      "text-xl": size === "xl",
      "text-2xl": size === "2xl",
    },
    className
  );

  if (type === "button") {
    return <button className={classes} {...(rest as ButtonAsButton)} />;
  }

  return <a className={classes} {...(rest as ButtonAsAnchor)} />;
}
