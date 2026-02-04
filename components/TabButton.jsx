import React from "react";

//1c
const TabButton = ({ active, selectTab, children }) => {
  const buttonClass = active
    ? "text-sky-400 border-b-2 border-sky-400"
    : "text-slate-400 hover:text-sky-400";

  return (
    <button onClick={selectTab}>
      <p className={`mr-5 font-semibold ${buttonClass}`}>{children}</p>
    </button>
  );
};
export default TabButton;