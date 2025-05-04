import { cn } from "../lib/cn";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonAsButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  type: "button";
  title: string;
};

type ButtonAsAnchor = AnchorHTMLAttributes<HTMLAnchorElement> & {
  type: "a";
  href: string;
  title: string;
};

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export default function Button(props: ButtonProps) {
  const { className, type, ...rest } = props;

  const classes = cn(
    "bg-blue-500 hover:brightness-120 cursor-pointer transition-all duration-200 ease-in-out text-white px-4 py-2 rounded-md text-center",
    className
  );

  if (type === "button") {
    return <button className={classes} {...(rest as ButtonAsButton)} />;
  }

  return <a className={classes} {...(rest as ButtonAsAnchor)} />;
}
