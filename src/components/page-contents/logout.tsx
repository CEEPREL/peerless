"use client";

import React from "react";
import { useRouter } from "next/navigation";

const LoggedOutScreen = () => {
  const router = useRouter();

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center text-center">
      <div className="mb-4 text-xl font-semibold">You are now logged out</div>
      <button
        onClick={() => router.push("/")}
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-xl"
      >
        Login
      </button>
    </div>
  );
};

export default LoggedOutScreen;
