"use client";

import { Suspense, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import {
  fetchCompanies,
  setSelectedCompany,
} from "@/app/redux/features/company/companySlice";
import ThemeToggle from "../theme-toggle";
import Image from "next/image";
import { Company } from "@/utils/types";
import { useRouter } from "next/navigation";

const SidebarContent = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { companies, loading, error, selectedCompany } = useAppSelector(
    (state) => state.company
  );

  useEffect(() => {
    dispatch(fetchCompanies("user-123"));
  }, [dispatch]);

  if (loading) {
    return (
      <div className="w-64 bg-gray-900 p-4 text-white">
        Fetching companies...
      </div>
    );
  }

  if (error) {
    return <div className="w-64 bg-red-900 p-4 text-white">Error: {error}</div>;
  }

  const handleCompanyClick = (company: Company) => {
    dispatch(setSelectedCompany(company));
    company.company === "Nintendo" ? router.push("/") : null;
  };

  return (
    <aside className="w-full  min-h-screen text-sm  bg-black text-white p-4">
      <div className="flex flex-col gap-46">
        <div onClick={() => router.push("/")}>
          <div className="mb-4">
            <Image
              className=""
              width={150}
              height={150}
              alt={"img"}
              src={"/icons/logo-named.svg"}
            />
          </div>
          <ul className="space-y-2">
            {companies.map((company, index) => (
              <li
                key={index}
                onClick={() => handleCompanyClick(company)}
                className={` hover:opacity-50 transition-all px-4 py-2 rounded cursor-pointer ${
                  selectedCompany?.company === company.company
                    ? "bg-[#A93636]"
                    : ""
                }`}
              >
                <div className="flex flex-row gap-2">
                  <Image
                    className=""
                    width={15}
                    height={15}
                    alt={"img"}
                    src={company.imgUrl}
                  />
                  {company.company}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="gap-5 flex flex-col">
          {selectedCompany && (
            <div className="flex flex-row">
              <Image
                alt="img"
                src={"/icons/info-circle.svg"}
                width={15}
                height={15}
              />
              <h1 className=" cursor-pointer pl-5">
                {selectedCompany?.company}
              </h1>
            </div>
          )}
          <div className="flex flex-row">
            <Image alt="img" src={"/icons/logout.svg"} width={15} height={15} />
            <button
              onClick={() => {
                router.push("/logout");
              }}
              className=" cursor-pointer pl-5"
            >
              Log Out
            </button>
          </div>
          <div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </aside>
  );
};

const Sidebar = () => {
  return (
    <Suspense
      fallback={
        <div className="w-64 bg-gray-900 p-4 text-white">
          Loading companies...
        </div>
      }
    >
      <SidebarContent />
    </Suspense>
  );
};

export default Sidebar;
