import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          `
            w-full rounded-xl
            bg-black/20
            border border-white/10
            px-4 py-2.5
            text-sm text-white
            placeholder-white/40
            transition
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-(--herencia-gold)
            focus-visible:border-(--herencia-gold)
          `,
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
