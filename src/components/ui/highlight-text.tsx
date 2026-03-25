import * as React from "react"
import { cn } from "@/lib/utils/tailwind-merge"

export interface HighlightTextProps extends React.HTMLAttributes<HTMLHeadingElement> {
  startText?: string
  highlightText?: string
  endText?: string
}

export function HighlightText({
  startText,
  highlightText,
  endText,
  className,
  ...props
}: HighlightTextProps) {
  return (
    <h2
      className={cn(
        "text-2xl font-bold uppercase leading-tight md:text-3xl lg:text-4xl text-foreground",
        className
      )}
      {...props}
    >
      {startText && <>{startText} </>}
      {highlightText && <span className="text-[#FF4A11]">{highlightText}</span>}
      {endText && <> {endText}</>}
    </h2>
  )
}
