"use client";

import { useRouter } from "next/navigation";

export default function NoAccess() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white bg-black space-y-4">
      <div className="text-xl font-semibold">You don’t have access</div>
      <div
        onClick={() => router.back()}
        className="px-4 py-2 bg-[#A93636] hover:bg-red-700 rounded cursor-pointer"
      >
        Back
      </div>
    </div>
  );
}
