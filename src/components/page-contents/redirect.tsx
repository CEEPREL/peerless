"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/app/redux/hooks";
import { setUser } from "@/app/redux/features/user/userSlice";
import { fetchUserData } from "@/app/actions/fetch";

export default function AutoRedirect() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const loadUserAndRedirect = async () => {
      try {
        const user = await fetchUserData();
        dispatch(setUser(user.user));
        if (user.user) {
          router.replace(`/dashbord/${user.user.userid}`);
        }
      } catch (err) {
        console.error("AutoRedirect Error:", err);
      }
    };

    loadUserAndRedirect();
  }, [dispatch, router]);

  return null;
}
