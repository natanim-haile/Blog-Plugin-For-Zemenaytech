// Minimal shadcn Textarea component
import * as React from "react"

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={`border border-border rounded-md px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary ${className ?? ""}`}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"
export { Textarea };
