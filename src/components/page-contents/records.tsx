"use client";

import { ChevronDown } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Table } from "../ui/table";

const Records: React.FC = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const res = await fetch("/recorddata.json");
        const data = await res.json();
        setRecords(data);
      } catch (error) {
        console.error("Failed to fetch record data:", error);
      }
    };

    fetchRecords();
  }, []);

  return (
    <div className="min-h-screen mt-10 bg-[#FAFAFA] p-6 font-sans text-sm text-gray-700">
      {/* Header Section */}
      <div className="mb-4">
        <div className="text-[22px] font-bold">Nitendo</div>
        <div className="text-sm text-gray-400 mt-1">
          <div
            onClick={() => {
              window.history.back();
            }}
          >
            Dashboard ›
          </div>{" "}
          <span className="text-black font-medium">Nitendo</span>
        </div>
      </div>

      {/* Toggle + Add Button */}
      <div className="flex justify-between items-center mb-3">
        <div className="flex gap-4">
          <button className="px-2 py-2 rounded-full border-gray-300 bg-white hover:bg-gray-100">
            Individual
          </button>
          <button className="px-2 py-2 rounded-full border-gray-300 bg-white hover:bg-gray-100">
            Corporate
          </button>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded bg-[#A93636] text-white hover:bg-[#A93636]">
          + New Request <ChevronDown className="text-xs" />
        </button>
      </div>

      <div className="border-b border-gray-200 mb-10 w-full" />

      {/* Tabs */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex bg-gray-300">
          <button className="px-4 py-2 m-1 bg-gray-50 text-[#A93636]">
            All Records
          </button>
          <button className="px-4 py-2 bg-gray-300 text-gray-800 hover:bg-gray-100">
            Request
          </button>
        </div>
        <div className="flex gap-4 text-xs">
          <div className="flex items-center flex-col">
            <h1>All </h1>
            <p className="font-semibold text-3xl text-black ml-1">100</p>
          </div>
          <div className="flex items-center flex-col">
            <h1>Active</h1>
            <p className="font-semibold text-3xl text-black ml-1">90</p>
          </div>
          <div className="flex items-center flex-col">
            <h1>Liquidated</h1>
            <p className="font-semibold text-3xl text-black ml-1">143</p>
          </div>
        </div>
        <div className="text-xs text-gray-500">
          Created by <span className="font-medium text-black">System-wide</span>{" "}
          <ChevronDown className="inline text-[10px] ml-1" />
        </div>
      </div>

      {/* Filter + Actions */}
      <div className="flex justify-between items-center mb-3">
        <div className="flex gap-2">
          <select className="border rounded px-2 py-1 text-gray-500 text-xs">
            <option>Table Search Query</option>
          </select>
          <input
            type="text"
            placeholder="Search Parameter"
            className="border px-3 py-1 rounded text-xs"
          />
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-1 border rounded text-xs text-[#A93636] border-[#A93636] hover:bg-[#f7e8e6]">
            Refresh Table
          </button>
          <button className="px-4 py-1 border rounded text-xs text-[#A93636] border-[#A93636] hover:bg-[#f7e8e6]">
            Download Table
          </button>
        </div>
      </div>

      {/* Table Section */}
      <Table records={records} />
    </div>
  );
};

export default Records;
