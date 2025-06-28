import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "bg-white rounded-lg shadow-md p-6 border border-slate-200",
      className
    )}
    {...props}
  >
    {children}
  </div>
))
Card.displayName = "Card"

const CardHeader = ({ className, children, ...props }) => (
  <div className={cn("mb-4", className)} {...props}>
    {children}
  </div>
)

const CardTitle = ({ className, children, ...props }) => (
  <h2 className={cn("text-xl font-semibold text-slate-700", className)} {...props}>
    {children}
  </h2>
)

const CardContent = ({ className, children, ...props }) => (
  <div className={cn("text-slate-600", className)} {...props}>
    {children}
  </div>
)

const CardFooter = ({ className, children, ...props }) => (
  <div className={cn("mt-4", className)} {...props}>
    {children}
  </div>
)

export { Card, CardHeader, CardTitle, CardContent, CardFooter }
