import React from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export const AkunToggle = () => {
  return (
    // Wadahnya akunToggle
    <div className="border-b mb-4 mt-2 pb-4 border-stone-300">
      {/* avatar akunToggle  */}
      <button className="flex p-0.5 hover:bg-stone-300 hover:text-black rounded transition-colors relative gap-2 w-full items-center">
        <img
          src="https://api.dicebear.com/9.x/croodles/svg?seed=Brian"
          alt="avatar"
          className="size-8 round shrink-0 bg-teal-600 shadow"
        ></img>

        <div className="text-start">
          <span className="text-sm font-semibold block">Bpk. Suparno.SH</span>
          <span className="text-sm font-bold block text-stone-400">
            Suparno@gmail.com{" "}
          </span>
        </div>
        <FiChevronDown className="absolute right-2 top-1/2 translate-y-[calc(-50%+15px)] text-xs" />
        <FiChevronUp className="absolute right-2 top-1/2 translate-y-[calc(-50-5px)] text-xs" />
      </button>

      <ul className="menu bg-base-200 rounded-box w-56">
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <details open>
            <summary>Parent</summary>
            <ul>
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
              <li>
                <details open>
                  <summary>Parent</summary>
                  <ul>
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <a>Item 3</a>
        </li>
      </ul>
    </div>
  );
};
