import * as React from "react"

import { cn } from "@/lib/utils"

function Input({
      className,
      type,
      ...props
}) {
      return (
            <input
                  type={type}
                  data-slot="input"
                  className={cn(
                        "file:text-blue-600 placeholder:text-gray-500 selection:bg-blue-100 selection:text-blue-900 dark:selection:bg-blue-900 dark:selection:text-blue-100 dark:bg-gray-800 border-gray-300 h-9 w-full min-w-0 rounded-md border bg-white px-3 py-1 text-base text-gray-900 shadow-sm transition-colors file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:border-gray-600 dark:text-gray-100",
                        className
                  )}
                  {...props} />
      );
}

export { Input }
