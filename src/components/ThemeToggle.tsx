"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="h-9 w-9 border-gray-200 dark:border-gray-700"
      >
        <div className="h-4 w-4 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="h-9 w-9 border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-800"
      aria-label={`Switch to ${
        resolvedTheme === "dark" ? "light" : "dark"
      } mode`}
    >
      {resolvedTheme === "dark" ? (
        <Sun
          size={18}
          className="text-yellow-500 transition-transform hover:rotate-45"
        />
      ) : (
        <Moon
          size={18}
          className="text-blue-700 dark:text-blue-400 transition-transform hover:-rotate-12"
        />
      )}
    </Button>
  );
}
