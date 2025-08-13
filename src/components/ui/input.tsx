// Minimal shadcn Input component
import * as React from "react"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <input
      className={`border border-border rounded-md px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary ${className ?? ""}`}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = "Input"
export { Input };
