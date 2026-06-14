import { cn } from "@/lib/utils"
import { GridPattern } from "@/components/ui/grid-pattern"

export function GridPatternDashed({ className }) {
  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-0 z-0 overflow-hidden bg-black",
        className
      )}
    >
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray="4 2"
        className={cn(
          "fill-white/[0.02] stroke-white/15",
          "[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]"
        )}
      />
    </div>
  )
}
