import React, { useState } from "react";
import Weather from "../Advisory/Weather";
import { XMarkIcon} from '@heroicons/react/24/outline';
import FertilizerSchedule from "../Advisory/FertilizerSchedule";
const AdvisorySection = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedAdvisory, setSelectedAdvisory] = useState(null);
  const [personalizedCropAdvisory, setPersonalizedCropAdvisory] = useState("");
  const [importantNotice, setImportantNotice] = useState("");
  const fertilizerTypes = ["Nitrogen", "Phosphorus", "Potassium"];
  const [fertilizationSchedule, setFertilizationSchedule] = useState({
    Nitrogen: { date1: "", date2: "" },
    Phosphorus: { date1: "", date2: "" },
    Potassium: { date1: "", date2: "" },
  });

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
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
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
      <div
        className="w-full h-full p-4 border rounded-lg shadow-md bg-gray-200 flex flex-col justify-center cursor-pointer"
        onClick={openModal}
      >
        <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-700">
          Advisory Section
        </h5>
      </div>

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex justify-center items-center">
          <div className="w-3/4 p-6 border rounded-lg shadow-md bg-white">
            <div className="flex justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-700">
                  Choose Advisory Type
                </h2>
              </div>
              <div>
                <button className="h-6 w-6 " onClick={closeModal}>
                  <XMarkIcon/>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-6 gap-0">
              {advisoryOptions.map((advisory, index) => (
                <div
                  key={index}
                  className={`box text-center ${
                    selectedAdvisory === advisory
                      ? "bg-sky-400 border border-sky-900"
                      : 'bg-blue-200'
                  } w-32 h-16 p-2 rounded-lg cursor-pointer`}
                  onClick={() => handleClick(advisory)}
                >
                  {advisory}
                </div>
              ))}
            </div>

            {selectedAdvisory && (
              <div className="h-full w-full mt-5 flex justify-center items-center">
                {(() => {
                  switch (selectedAdvisory) {
                    case "Weather Advisory":
                      return <Weather />;
                    case "Personalized Crop Advisory":
                      return (
                        <div className="mb-4 w-full">
                          <label className="block text-left text-gray-700 mb-2">
                            Personalized Crop Advisory:
                          </label>
                          <textarea
                            className="w-full p-2 bg-gray-100 border rounded-md"
                            value={personalizedCropAdvisory}
                            onChange={(e) =>
                              setPersonalizedCropAdvisory(e.target.value)
                            }
                            rows="4"
                          ></textarea>
                        </div>
                      );
                    case "Fertilization Schedule":
                      return (
                        <FertilizerSchedule props="admin"/>
                      );
                    case "Pesticide Schedule":
                      return (
                        <div className="w-full mt-5 flex justify-center items-center">
                          <div class="relative overflow-x-auto">
                            <h3>Table of Schedule</h3>
                            <table class="w-full text-sm text-left rtl:text-right border border-gray-800 text-gray-500 ">
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
                            </table>
                          </div>
                        </div>
                      );
                    case "Disease Alerts":
                      return (
                        <div className="grid grid-cols-2 gap-2">
                          <div className="w-96 p-6  border rounded-lg shadow-md bg-gray-100 text-center">
                            <div className="mb-4 ml-6 flex items-center">
                              <label className="w-24 text-left text-gray-700">
                                State:
                              </label>
                              <select
                                className="w-48 p-2 bg-gray-300 border rounded-md"
                                value={selectedState}
                                onChange={(e) =>
                                  setSelectedState(e.target.value)
                                }
                              >
                                <option value="" disabled>
                                  Select a state
                                </option>
                                {states.map((state, index) => (
                                  <option key={index} value={state}>
                                    {state}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="mb-4 ml-6 flex items-center">
                              <label className="w-24 text-left mb-2 text-gray-700">
                                District:
                              </label>
                              <select
                                className="w-48 p-2 bg-gray-300 border rounded-md"
                                value={selectedDistrict}
                                onChange={(e) =>
                                  setSelectedDistrict(e.target.value)
                                }
                              >
                                <option value="" disabled>
                                  Select a district
                                </option>
                                {districts.map((district, index) => (
                                  <option key={index} value={district}>
                                    {district}
                                  </option>
                                ))}
                              </select>
                            </div>

                            {/* Tehsil Dropdown */}
                            <div className="mb-4 ml-6 flex items-center">
                              <label className="w-24 text-left mb-2 text-gray-700">
                                Tehsil:
                              </label>
                              <select
                                className="w-48 p-2 bg-gray-300 border rounded-md"
                                value={selectedTehsil}
                                onChange={(e) =>
                                  setSelectedTehsil(e.target.value)
                                }
                              >
                                <option value="" disabled>
                                  Select a tehsil
                                </option>
                                {tehsils.map((tehsil, index) => (
                                  <option key={index} value={tehsil}>
                                    {tehsil}
                                  </option>
                                ))}
                              </select>
                            </div>

                            {/* Village Dropdown */}
                            <div className="mb-4 ml-6 flex items-center">
                              <label className="w-24 text-left mb-2 text-gray-700">
                                Village:
                              </label>
                              <select
                                className="w-48 p-2 bg-gray-300 border rounded-md"
                                value={selectedVillage}
                                onChange={(e) =>
                                  setSelectedVillage(e.target.value)
                                }
                              >
                                <option value="" disabled>
                                  Select a village
                                </option>
                                {villages.map((village, index) => (
                                  <option key={index} value={village}>
                                    {village}
                                  </option>
                                ))}
                              </select>
                            </div>

                            {/* Farmer ID Dropdown */}
                            <div className="mb-4 ml-6 flex items-center">
                              <label className="w-24 text-left mb-2 text-gray-700">
                                Farmer ID:
                              </label>
                              <select
                                className="w-48 p-2 bg-gray-300 border rounded-md"
                                value={selectedFarmerId}
                                onChange={(e) =>
                                  setSelectedFarmerId(e.target.value)
                                }
                              >
                                <option value="" disabled>
                                  Select a farmer ID
                                </option>
                                {farmerIds.map((farmerId, index) => (
                                  <option key={index} value={farmerId}>
                                    {farmerId}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="w-96 p-6 h-32 justify-stretch border rounded-lg shadow-md bg-gray-100 text-center">
                            <div className="mb-4 ml-6 flex items-center">
                              <label className="w-24 text-left text-gray-700">
                                Crop Type:
                              </label>
                              <select
                                className="w-48 p-2 bg-gray-300 border rounded-md"
                                value={cropType}
                                onChange={(e) => setCropType(e.target.value)}
                              >
                                <option value="" disabled>
                                  Select a Crop type
                                </option>
                                {states.map((state, index) => (
                                  <option key={index} value={state}>
                                    {state}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="mb-4 ml-6 flex items-center">
                              <label className="w-24 text-left text-gray-700">
                                Sowing Date:
                              </label>
                              <select
                                className="w-48 p-2 bg-gray-300 border rounded-md"
                                value={sowingDate}
                                onChange={(e) => setShowingDate(e.target.value)}
                              >
                                <option value="" disabled>
                                  Select a sowing date
                                </option>
                                {states.map((state, index) => (
                                  <option key={index} value={state}>
                                    {state}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>
                      );
                    case "Important Notice":
                      return (
                        <div className="mb-4 w-full">
                          <label className="block text-left text-gray-700 mb-2">
                            Important Notice:
                          </label>
                          <textarea
                            className="w-full p-2 bg-gray-100 border rounded-md"
                            value={importantNotice}
                            onChange={(e) => setImportantNotice(e.target.value)}
                            rows="4"
                          ></textarea>
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
      )}
    </>
  );
};

export default AdvisorySection;

{
  /* <table className="w-96 p-6 border rounded-lg shadow-md bg-gray-100">
                            <thead>
                              <tr>
                                <th className="text-left text-gray-700"></th>
                                <th className="text-left text-gray-700">
                                  Date 1
                                </th>
                                <th className="text-left text-gray-700">
                                  Date 2
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th className="text-left text-gray-700">
                                  Fertilizer Type
                                </th>
                                <td>
                                  <input
                                    className=""
                                    type="text"
                                    value=""
                                    onChange={(e) => console.log("hii")}
                                  />
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    value=""
                                    onChange={(e) => console.log("hii")}
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table> */
}
