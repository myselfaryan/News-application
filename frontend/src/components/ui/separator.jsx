import * as React from "react"
import { cn } from "@/lib/utils"

const Separator = React.forwardRef(({ className, orientation = "horizontal", className, ...props }, ref) => (
  <div
    ref={ref}
    role="separator"
    aria-orientation={orientation}
    className={cn(
      orientation === "horizontal"
        ? "h-px w-full bg-slate-200"
        : "w-px h-full bg-slate-200",
      className
    )}
    {...props}
  />
))
Separator.displayName = "Separator"

export { Separator }
