import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          `
            w-full rounded-xl
            bg-black/20
            border border-white/10
            px-4 py-3
            text-sm text-white
            placeholder-white/40
            resize-none
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

Textarea.displayName = "Textarea";
