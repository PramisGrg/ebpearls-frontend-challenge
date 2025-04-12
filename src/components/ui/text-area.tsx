import * as React from "react";
import { cn } from "../../libs/utlis";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "flex w-full rounded-2xl border border-gray-200 bg-transparent px-3 py-2 text-base transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      rows={4}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
