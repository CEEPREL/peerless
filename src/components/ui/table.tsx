import React from "react";
import clsx from "clsx";
import { Tally3 } from "lucide-react";

export interface TableProps {
  records: {
    name: string;
    id: string;
    category: string;
    principal: string;
    alias1: string;
    alias2: string;
    status: string;
    updated: string;
  }[];
}

export const Table: React.FC<TableProps> = ({ records }) => {
  return (
    <div className="overflow-x-auto rounded-md border border-gray-200 shadow-sm bg-white">
      <table className="min-w-full border-collapse text-sm">
        <thead className="bg-gray-50 text-gray-500 uppercase text-xs">
          <tr>
            <th className="px-4 py-3 text-left">Customer Name/ID</th>
            <th className="px-4 py-3 text-left">Customer Category</th>
            <th className="px-4 py-3 text-left">Principal</th>
            <th className="px-4 py-3 text-left">User Alias</th>
            <th className="px-4 py-3 text-left">Status</th>
            <th className="px-4 py-3 text-left">Last Updated</th>
            <th className="px-4 py-3 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {records.map((item, index) => (
            <tr
              key={index}
              className={clsx(
                index % 2 === 0 ? "bg-white" : "bg-[#FAF8F7]",
                "border-b"
              )}
            >
              <td className="px-4 py-3">
                <div className="flex flex-col">
                  <span className="text-gray-900 font-medium">{item.name}</span>
                  <span className="text-xs text-gray-400">{item.id}</span>
                </div>
              </td>
              <td className="px-4 py-3">{item.category}</td>
              <td className="px-4 py-3">{item.principal}</td>
              <td className="px-4 py-3">
                <div className="flex flex-col">
                  <span>{item.alias1}</span>
                  <span className="text-xs text-gray-400">{item.alias2}</span>
                </div>
              </td>
              <td className="px-4 py-3">
                <span
                  className={clsx(
                    "inline-block rounded-full px-3 py-1 text-xs font-medium",
                    item.status === "Active"
                      ? "bg-red-100 text-red-600"
                      : "bg-gray-200 text-gray-700"
                  )}
                >
                  {item.status}
                </span>
              </td>
              <td className="px-4 py-3">{item.updated}</td>
              <td className="px-4 py-3">
                <Tally3 className=" rotate-90 text-gray-500" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
