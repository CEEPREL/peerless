import { Company, User } from "@/utils/types";

export const fetchCompaniesByUserId = async (
  userId: string
): Promise<Company[]> => {
  if (!userId) {
    throw new Error("Unauthorized: User ID is required");
  }

  try {
    const res = await fetch("/data.json", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch company data");

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error loading secure company data:", err);
    throw new Error("Error loading secure company data");
  }
};

export const fetchUserData = async (): Promise<User> => {
  try {
    const res = await fetch(`/userdata.json`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch user data");

    const data: User = await res.json();
    console.log("Response Status:", res.status, data);
    return data;
  } catch (err) {
    console.error("Error loading user profile:", err);
    throw new Error("Error loading user profile");
  }
};
