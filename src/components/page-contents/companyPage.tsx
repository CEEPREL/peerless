"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import Card from "../ui/card";
import { useAppSelector } from "@/app/redux/hooks";
import { useRouter } from "next/navigation";

const CompanyPage = () => {
  const selectedCompany = useSelector(
    (state: RootState) => state.company.selectedCompany
  );
  const user = useSelector((state: RootState) => state.user);
  const userId = useAppSelector((state) => state.user.userid);
  const router = useRouter();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const handleRedirect = () => {
    router.push(`${baseUrl}/dashbord/${userId}/records`);
  };
  return (
    <div className="container mt-10 mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Hello, {user.name}</h1>
      <p className=" text-xs">Welcome to your dashboard</p>

      {selectedCompany && selectedCompany.roles ? (
        <div className="mt-6 p-4 border  rounded-lg shadow-md bg-gray-50 dark:bg-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {selectedCompany.roles?.map((role, index) => (
              <div
                key={index}
                className=" cursor-pointer"
                onClick={handleRedirect}
              >
                <Card
                  imgUrl="/icons/setting.svg"
                  description={role.description}
                  role={role.role}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center text-5xl italic text-red-600 dark:text-gray-400">
          {selectedCompany?.coming_soon}...
        </p>
      )}
    </div>
  );
};

export default CompanyPage;
