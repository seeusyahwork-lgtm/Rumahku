import React from "react";
import { CardProject } from "./CardProject";

export const StatCards = () => {
  return (
    <>
      <CardProject/>
      <CardProject/>
      <CardProject/>
    </>
  );
};

const Card = () => {
  return <div className="p-4  col-span-4"></div>;
};
