import React from "react";
import { useAlertStore } from "../../../global/alerts.store";
import { useLoginStore } from "../../../global/login.store";

function SideMenuItem({ children }) {
  return (
    <li className=" w-full ">
      <a className="flex text-lg gap-2 items-center justify-center py-1 px-2 bg-violet-700/60 rounded-sm cursor-pointer hover:bg-violet-700 transition duration-200">
        {children}
      </a>
    </li>
  );
}

export default SideMenuItem;
