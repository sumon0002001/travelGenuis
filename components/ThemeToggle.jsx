import React from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

const ThemeToggle = () => {
  return (
    <button className="btn btn-sm btn-outline">
      <BsMoonFill className="h-4 w-4" />
    </button>
  );
};

export default ThemeToggle;
