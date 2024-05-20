"use client"
import React from 'react';
import { cva } from "class-variance-authority";

const button = cva("font-semibold px-[18px] py-[8px] rounded-[5px] border-secondary border-[1px] transition hover:shadow-[0_0_10px_1px_rgb(234,250,97)]", {
  variants: {
    type: {
      primary: "bg-secondary text-primary",
      secondary: "text-secondary",
    },
  },
  defaultVariants: {
    type: "primary",
  }
});

const Button = ({
  children,
  className,
  type,
  href,
  ...props
}) => {
  return (
    <a href={href || "#"} className={`${button({ type })} ${className}`} {...props}>{children}</a>
  )
}

export default Button;
