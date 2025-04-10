"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { Bell, Building, ChevronDown, SquareUser, Tally1 } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "@/app/redux/features/user/userSlice";
import { RootState } from "@/app/redux/store";
import { fetchUserData } from "@/app/actions/fetch";
import shortenName from "@/utils/shortenName";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const branch = user.branch;
  const router = useRouter();

  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showBranchDropdown, setShowBranchDropdown] = useState(false);

  const userDropdownRef = useRef<HTMLDivElement | null>(null);
  const branchDropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUserData();
        dispatch(setUser(data.user));
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        userDropdownRef.current &&
        !userDropdownRef.current.contains(event.target as Node)
      ) {
        setShowUserDropdown(false);
      }
      if (
        branchDropdownRef.current &&
        !branchDropdownRef.current.contains(event.target as Node)
      ) {
        setShowBranchDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    router.push("/logout");
  };

  return (
    <div className="px-5 py-2 w-[80%] fixed bg-white text-sm dark:bg-gray-700 gap-4 text-black dark:text-white flex justify-between items-center flex-row z-50">
      <div className="relative w-[20%] ">
        <input
          className="border text-xs shadow-lg px-5 h-10 w-full rounded-xl"
          placeholder="Search Parameter & Params"
        />
        <button>
          <Image
            className="absolute top-3 left-1"
            width={15}
            height={15}
            alt=""
            src={"/icons/search-normal.svg"}
          />
        </button>
      </div>

      <div className="flex flex-row gap-4 text-xs items-center relative">
        <h1>Thur, Dec 11, 2024 15:32</h1>
        <Tally1 />
        <h1>
          <span className="font-semibold">Business Date:</span> Thur, Dec 11,
          2024 15:32
        </h1>

        {/* notification */}
        <button className="dark:border-2 dark:bg-gray-700 bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full">
          <Bell className="text-black dark:text-white" />
        </button>

        {/* USER DROPDOWN */}
        <div
          ref={userDropdownRef}
          className="relative dark:border-2 w-38 cursor-pointer justify-between px-2 items-center flex flex-row h-10 rounded-full dark:bg-gray-700 bg-gray-200"
          onClick={() => setShowUserDropdown(!showUserDropdown)}
        >
          <div className="flex gap-2 items-center flex-row">
            <Building className="text-black dark:text-white text-sm" />
            <span className="hidden lg:block text-xs">
              {shortenName(user.name, 12)}
            </span>
          </div>
          <ChevronDown className="text-black dark:text-white" />
          {showUserDropdown && (
            <div className="absolute top-12 right-0 z-50 bg-white dark:bg-gray-800 border shadow-md w-40 rounded-lg py-2">
              <p className="px-4 py-2 text-sm dark:text-white">{user.name}</p>
              <hr className="border-t border-gray-300 dark:border-gray-600 my-1" />
              <button
                className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-100 dark:hover:bg-red-900"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>

        {/* BRANCH DROPDOWN  */}
        <div
          ref={branchDropdownRef}
          className="relative dark:border-2 w-38 cursor-pointer justify-between px-2 items-center flex flex-row h-10 rounded-full dark:bg-gray-700 bg-gray-200"
          onClick={() => setShowBranchDropdown(!showBranchDropdown)}
        >
          <div className="flex gap-2 items-center flex-row">
            <SquareUser className="text-black dark:text-white text-sm" />
            <span className="hidden lg:block text-xs">
              {shortenName(branch, 12)}
            </span>
          </div>
          <ChevronDown className="text-black dark:text-white" />
          {showBranchDropdown && (
            <div className="absolute top-12 right-0 z-50 bg-white dark:bg-gray-800 border shadow-md w-40 rounded-lg py-2">
              <p className="px-4 py-2 text-sm dark:text-white">{branch}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
