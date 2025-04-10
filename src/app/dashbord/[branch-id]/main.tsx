// "use client";

import Navbar from "@/components/ui/navbar";
import Sidebar from "@/components/ui/sidebar";

export default function DashboardContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex flex-row">
      <div className="md:w-2/12 lg:w-1/4 xl:w-1/5 w-1/4">
        <Sidebar />
      </div>
      <div className="w-4/5 transition-all duration-300  bg-white dark:bg-gray-700  text-black dark:text-white] overflow-scroll md:w-11/12 lg:w-4/5 xl:w-5/6">
        <div className="bg-white ">
          <Navbar />
        </div>
        {children}
      </div>
    </div>
  );
}
