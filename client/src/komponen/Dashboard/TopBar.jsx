import React from "react";
import { FiCalendar } from "react-icons/fi";

export const TopBar = () => {
  return (
    <div className="border-b px-4 ml-5 mb-4 mt-2 pb-4 border-stone-300">
      <div className="flex items-center justify-between p-0.5">
        <div>
          <span className="text-sm font-bold block">hii, selamat datang </span>
          <span className="text-xs block text-stone-500">
            {" "}
            Jumat, agustus 6th 2025
          </span>
        </div>
        <button className="flex text-sm items-center gap-2 bg-stone-100 transition-colors hover:bg-violet-100 hover:text-teal-300 px-3 py-1.5 rounded">
          <FiCalendar />
          <span>6 bulan lalu</span>
        </button>
      </div>
    </div>
  );
};
