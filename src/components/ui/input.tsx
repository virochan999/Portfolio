import * as React from "react"
import { cn } from "@/lib/utils"

const fieldClass =
  "w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"

export const Input = ({ className, ...props }: React.ComponentProps<"input">) => (
  <input className={cn(fieldClass, className)} {...props} />
)

export const Textarea = ({ className, ...props }: React.ComponentProps<"textarea">) => (
  <textarea className={cn(fieldClass, "min-h-24", className)} {...props} />
)

export const Select = ({ className, ...props }: React.ComponentProps<"select">) => (
  <select className={cn(fieldClass, className)} {...props} />
)
