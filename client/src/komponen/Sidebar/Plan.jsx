import React from "react";

export const Plan = () => {
  return (
    <div className="flex sticky top-[calc(100vh_-_48px_-_16px)] flex-col h-20 border-t px-2 border-stone-300 justify-end text-xs">
      <div className="flex items-center justify-between">
        <di>
          <p className="font-bold">keluar</p>
          <p className="text-stone-500">masukan</p>
        </di>
      </div>
      <button className="px-2 py-1.5 font-medium bg-stone-200 hover:bg-stone-300  transition-colors rounded">
        Keluar
      </button>
    </div>
  );
};
