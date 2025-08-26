import React, { useState } from "react";
import { FiHome, FiUsers, FiPaperclip } from "react-icons/fi";

export const RouteSelect = () => {
  const [active, setActive] = useState("Dashboard");

  const routes = [
    { Icon: FiHome, title: "Dashboard" },
    { Icon: FiUsers, title: "Team" },
    { Icon: FiPaperclip, title: "Invoice" },
  ];

  return (
    <div className="space-y-1">
      {routes.map((route) => (
        <Route
          key={route.title}
          Icon={route.Icon}
          title={route.title}
          seleted={active === route.title}
          onClick={() => setActive(route.title)}
        />
      ))}
    </div>
  );
};

const Route = ({ seleted, Icon, title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 px-3 py-2 rounded-md w-full text-left ${
        seleted
          ? "bg-blue-100 text-black font-semibold"
          : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      <Icon className="w-5 h-5" />
      <span>{title}</span>
    </button>
  );
};
