import * as React from "react"
import { Label as LabelPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function Label({
      className,
      ...props
}) {
      return (
            <LabelPrimitive.Root
                  data-slot="label"
                  className={cn(
                        "flex items-center gap-2 text-sm leading-none font-medium select-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 dark:text-gray-300",
                        className
                  )}
                  {...props} />
      );
}

export { Label }
