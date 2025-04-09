import ThemeToggle from "@/components/theme-toggle";
import React from "react";

function Page() {
  return (
    <div className="h-screen transition-all duration-300 bg-white dark:bg-black text-black dark:text-white">
      <ThemeToggle />
      home
    </div>
  );
}

export default Page;
