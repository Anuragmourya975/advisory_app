import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LineChart from "../../charts/LineChart01";
import Icon from "../../images/icon-01.svg";
import EditMenu from "../../components/DropdownEditMenu";
import Weather from "../../Components/Advisory/Weather";
import { XMarkIcon } from "@heroicons/react/24/outline";
import FertilizerSchedule from "../../Components/Advisory/FertilizerSchedule";
import { useModal } from "../../contexts/ModalContext";
// Import utilities
import { tailwindConfig, hexToRGB } from "../../utils/Utils";
import TextArea from "../../components/TextArea";

function DashboardCard01() {
  const [selectedAdvisory, setSelectedAdvisory] = useState(null);
  const [personalizedCropAdvisory, setPersonalizedCropAdvisory] = useState("");
  const [importantNotice, setImportantNotice] = useState("");
  const fertilizerTypes = ["Nitrogen", "Phosphorus", "Potassium"];
  const [fertilizationSchedule, setFertilizationSchedule] = useState({
    Nitrogen: { date1: "", date2: "" },
    Phosphorus: { date1: "", date2: "" },
    Potassium: { date1: "", date2: "" },
  });
  const { isModalOpen, setIsModalOpen } = useModal();

  useEffect(() => {
    localStorage.setItem("isModalOpen", JSON.stringify(isModalOpen));
  }, [isModalOpen]);

  const handleFertilizationDateChange = (type, dateField, value) => {
    setFertilizationSchedule((prevSchedule) => ({
      ...prevSchedule,
      [type]: {
        ...prevSchedule[type],
        [dateField]: value,
      },
    }));
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAdvisory(null); // Reset selected advisory when closing modal
  };

  const advisoryOptions = [
    "Weather Advisory",
    "Personalized Crop Advisory",
    "Fertilization Schedule",
    "Pesticide Schedule",
    "Disease Alerts",
    "Important Notice",
  ];

  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedTehsil, setSelectedTehsil] = useState("");
  const [selectedVillage, setSelectedVillage] = useState("");
  const [selectedFarmerId, setSelectedFarmerId] = useState("");
  const [cropType, setCropType] = useState("");
  const [sowingDate, setShowingDate] = useState("");

  // Dummy data for dropdown options
  const states = ["State 1", "State 2", "State 3"];
  const districts = ["District 1", "District 2", "District 3"];
  const tehsils = ["Tehsil 1", "Tehsil 2", "Tehsil 3"];
  const villages = ["Village 1", "Village 2", "Village 3"];
  const farmerIds = ["Farmer 1", "Farmer 2", "Farmer 3"];

  const handleClick = (advisory) => {
    setSelectedAdvisory(advisory);
  };
  return (
    <>
      {isModalOpen && (
        <div
          id="popup-modal"
          tabIndex={-1}
          className="overflow-y-auto backdrop-blur-sm overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative p-4 w-full max-w-6xl max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <>
                {/* Modal header */}
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Choose Advisory Type
                  </h3>
                  <button
                    onClick={closeModal}
                    type="button"
                    className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="authentication-modal"
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
              </>

              <div className="p-4 md:p-5 text-center">
                <div className="inline-flex rounded-md shadow-sm">
                  {advisoryOptions.map((advisory, index) => (
                    <button
                      key={index}
                      className={`px-4 py-2 text-sm font-medium text-gray-900  border ${
                        index === 0 ? "rounded-s-lg " : ""
                      }${
                        index === advisoryOptions.length - 1
                          ? "rounded-e-lg "
                          : ""
                      }  ${
                        selectedAdvisory === advisory
                          ? "bg-gray-950 text-white border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                          : " border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                      }`}
                      onClick={() => handleClick(advisory)}
                    >
                      {advisory}
                    </button>
                  ))}
                </div>
                {selectedAdvisory === null && (
                  <p className="text-gray-500 mt-5">
                    Please select an advisory
                  </p>
                )}
              </div>
              {selectedAdvisory && (
                <div className="h-full w-full mt-5 flex justify-center items-center">
                  {(() => {
                    switch (selectedAdvisory) {
                      case "Weather Advisory":
                        return <Weather />;
                      case "Personalized Crop Advisory":
                        return (
                          <div className="mb-4 w-full mx-16">
                            {/* <label className="block text-left text-gray-700 mb-2">
                              Personalized Crop Advisory:
                            </label> */}
                            {/* <textarea
                                  className="w-full p-2 bg-gray-100 border rounded-md"
                                  value={personalizedCropAdvisory}
                                  onChange={(e) =>
                                    setPersonalizedCropAdvisory(e.target.value)
                                  }
                                  rows="4"
                                ></textarea> */}
                            <TextArea />
                          </div>
                        );
                      case "Fertilization Schedule":
                        return <FertilizerSchedule props="admin" />;
                      case "Pesticide Schedule":
                        return (
                          <div className="w-full  mx-16 mb-4">
                            <div class="relative overflow-x-auto">
                              {/* <h3>Table of Schedule</h3> */}
                              {/* <table class="w-full text-sm text-left rtl:text-right border border-gray-800 text-gray-500 ">
                                <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                                  <tr>
                                    <th scope="col" class="px-6 py-3"></th>
                                    <th scope="col" class="px-6 py-3">
                                      Date
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                      25 Jan
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                      26 Jan
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                      27 Jan
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr class="bg-white border-b ">
                                    <th
                                      scope="row"
                                      class="px-6 py-4 font-large text-gray-900 whitespace-nowrap "
                                    >
                                      Pesticide types
                                    </th>
                                    <td class="px-6 py-4"></td>
                                    <td class="px-6 py-4">
                                      <input
                                        className="border bg-gray-100"
                                        type="text"
                                        value=""
                                        onChange={(e) => console.log("hii")}
                                      />
                                    </td>
                                    <td class="px-6 py-4">
                                      <input
                                        className="border-b bg-gray-100"
                                        type="text"
                                        value=""
                                        onChange={(e) => console.log("hii")}
                                      />
                                    </td>
                                    <td class="px-6 py-4">
                                      <input
                                        className="border-b bg-gray-100"
                                        type="text"
                                        value=""
                                        onChange={(e) => console.log("hii")}
                                      />
                                    </td>
                                  </tr>
                                  <tr class="bg-white border-b border-gray-800 ">
                                    <th
                                      scope="row"
                                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                                    ></th>
                                    <td class="px-6 py-4"></td>
                                    <td class="px-6 py-4">Xx10</td>
                                  </tr>
                                </tbody>
                              </table> */}
                              <TextArea />
                            </div>
                          </div>
                        );
                      case "Disease Alerts":
                        return (
                          // <div className="grid grid-cols-2 gap-2">
                          //   <div className="w-96 p-6  border rounded-lg shadow-md bg-gray-100 text-center">
                          //     <div className="mb-4 ml-6 flex items-center">
                          //       <label className="w-24 text-left text-gray-700">
                          //         State:
                          //       </label>
                          //       <select
                          //         className="w-48 p-2 bg-gray-300 border rounded-md"
                          //         value={selectedState}
                          //         onChange={(e) =>
                          //           setSelectedState(e.target.value)
                          //         }
                          //       >
                          //         <option value="" disabled>
                          //           Select a state
                          //         </option>
                          //         {states.map((state, index) => (
                          //           <option key={index} value={state}>
                          //             {state}
                          //           </option>
                          //         ))}
                          //       </select>
                          //     </div>
                          //     <div className="mb-4 ml-6 flex items-center">
                          //       <label className="w-24 text-left mb-2 text-gray-700">
                          //         District:
                          //       </label>
                          //       <select
                          //         className="w-48 p-2 bg-gray-300 border rounded-md"
                          //         value={selectedDistrict}
                          //         onChange={(e) =>
                          //           setSelectedDistrict(e.target.value)
                          //         }
                          //       >
                          //         <option value="" disabled>
                          //           Select a district
                          //         </option>
                          //         {districts.map((district, index) => (
                          //           <option key={index} value={district}>
                          //             {district}
                          //           </option>
                          //         ))}
                          //       </select>
                          //     </div>

                          //     {/* Tehsil Dropdown */}
                          //     <div className="mb-4 ml-6 flex items-center">
                          //       <label className="w-24 text-left mb-2 text-gray-700">
                          //         Tehsil:
                          //       </label>
                          //       <select
                          //         className="w-48 p-2 bg-gray-300 border rounded-md"
                          //         value={selectedTehsil}
                          //         onChange={(e) =>
                          //           setSelectedTehsil(e.target.value)
                          //         }
                          //       >
                          //         <option value="" disabled>
                          //           Select a tehsil
                          //         </option>
                          //         {tehsils.map((tehsil, index) => (
                          //           <option key={index} value={tehsil}>
                          //             {tehsil}
                          //           </option>
                          //         ))}
                          //       </select>
                          //     </div>

                          //     {/* Village Dropdown */}
                          //     <div className="mb-4 ml-6 flex items-center">
                          //       <label className="w-24 text-left mb-2 text-gray-700">
                          //         Village:
                          //       </label>
                          //       <select
                          //         className="w-48 p-2 bg-gray-300 border rounded-md"
                          //         value={selectedVillage}
                          //         onChange={(e) =>
                          //           setSelectedVillage(e.target.value)
                          //         }
                          //       >
                          //         <option value="" disabled>
                          //           Select a village
                          //         </option>
                          //         {villages.map((village, index) => (
                          //           <option key={index} value={village}>
                          //             {village}
                          //           </option>
                          //         ))}
                          //       </select>
                          //     </div>

                          //     {/* Farmer ID Dropdown */}
                          //     <div className="mb-4 ml-6 flex items-center">
                          //       <label className="w-24 text-left mb-2 text-gray-700">
                          //         Farmer ID:
                          //       </label>
                          //       <select
                          //         className="w-48 p-2 bg-gray-300 border rounded-md"
                          //         value={selectedFarmerId}
                          //         onChange={(e) =>
                          //           setSelectedFarmerId(e.target.value)
                          //         }
                          //       >
                          //         <option value="" disabled>
                          //           Select a farmer ID
                          //         </option>
                          //         {farmerIds.map((farmerId, index) => (
                          //           <option key={index} value={farmerId}>
                          //             {farmerId}
                          //           </option>
                          //         ))}
                          //       </select>
                          //     </div>
                          //   </div>
                          //   <div className="w-96 p-6 h-32 justify-stretch border rounded-lg shadow-md bg-gray-100 text-center">
                          //     <div className="mb-4 ml-6 flex items-center">
                          //       <label className="w-24 text-left text-gray-700">
                          //         Crop Type:
                          //       </label>
                          //       <select
                          //         className="w-48 p-2 bg-gray-300 border rounded-md"
                          //         value={cropType}
                          //         onChange={(e) => setCropType(e.target.value)}
                          //       >
                          //         <option value="" disabled>
                          //           Select a Crop type
                          //         </option>
                          //         {states.map((state, index) => (
                          //           <option key={index} value={state}>
                          //             {state}
                          //           </option>
                          //         ))}
                          //       </select>
                          //     </div>
                          //     <div className="mb-4 ml-6 flex items-center">
                          //       <label className="w-24 text-left text-gray-700">
                          //         Sowing Date:
                          //       </label>
                          //       <select
                          //         className="w-48 p-2 bg-gray-300 border rounded-md"
                          //         value={sowingDate}
                          //         onChange={(e) =>
                          //           setShowingDate(e.target.value)
                          //         }
                          //       >
                          //         <option value="" disabled>
                          //           Select a sowing date
                          //         </option>
                          //         {states.map((state, index) => (
                          //           <option key={index} value={state}>
                          //             {state}
                          //           </option>
                          //         ))}
                          //       </select>
                          //     </div>
                          //   </div>
                          // </div>
                          <div className="w-full  mx-16 mb-4">
                            <div class="relative overflow-x-auto">
                              <TextArea />
                            </div>
                          </div>
                        );
                      case "Important Notice":
                        return (
                          <div className="w-full  mx-16 mb-4">
                            <div class="relative overflow-x-auto">
                              <TextArea />
                            </div>
                          </div>
                        );
                      default:
                        return null; // Render nothing for unknown cases
                    }
                  })()}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
        <div className="px-5 pt-5">
          <header className="flex justify-between items-start mb-2">
            {/* Icon */}
            <img src={Icon} width="32" height="32" alt="Icon 01" />
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
            )}
          </header>
        </div>
        {/* Chart built with Chart.js 3 */}
        <div className="grow max-sm:max-h-[128px] xl:max-h-[128px] flex flex-col justify-center items-center">
          <h1 className="text-2xl md:text-3xl  text-slate-800 dark:text-slate-100 font-bold mb-1">
            Advisory Section
          </h1>
          <i
            className="bx bx-door-open text-5xl hover:text-[#7f89f6] cursor-pointer"
            onClick={openModal}
          ></i>
        </div>
      </div>
    </>
  );
}

export default DashboardCard01;
