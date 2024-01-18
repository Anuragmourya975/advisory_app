import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LineChart from "../../charts/LineChart01";
import Icon from "../../images/icon-02.svg";
import EditMenu from "../../components/DropdownEditMenu";
import { useModal } from "../../contexts/ModalContext";
// Import utilities
import { tailwindConfig, hexToRGB } from "../../utils/Utils";

function DashboardCard02() {
  const { isModalOpen, setIsModalOpen } = useModal();
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          {/* Icon */}
          <img src={Icon} width="32" height="32" alt="Icon 02" />
          {/* Menu button */}
          {isModalOpen ? null : (
            <EditMenu align="right" className="relative inline-flex z-[999]">
              <li>
                <Link
                  className="font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-200 flex py-1 px-3"
                  to="#0"
                >
                  Option 1
                </Link>
              </li>
              <li>
                <Link
                  className="font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-200 flex py-1 px-3"
                  to="#0"
                >
                  Option 2
                </Link>
              </li>
              <li>
                <Link
                  className="font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3"
                  to="#0"
                >
                  Remove
                </Link>
              </li>
            </EditMenu>
          )}{" "}
        </header>
      </div>
      <div className="grow max-sm:max-h-[128px] xl:max-h-[128px] flex flex-col justify-center items-center">
        <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold mb-1">
          Soil Report Section
        </h1>
        <i className="bx bx-door-open text-5xl hover:text-[#50c4f9] cursor-pointer"></i>
      </div>
    </div>
  );
}

export default DashboardCard02;
