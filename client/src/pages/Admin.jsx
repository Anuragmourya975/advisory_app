import React, { useState } from "react";
import background from '../assets/background.jpg'

const Admin = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedTehsil, setSelectedTehsil] = useState("");
  const [selectedVillage, setSelectedVillage] = useState("");
  const [selectedFarmerId, setSelectedFarmerId] = useState("");

  // Dummy data for dropdown options
  const states = ["State 1", "State 2", "State 3"];
  const districts = ["District 1", "District 2", "District 3"];
  const tehsils = ["Tehsil 1", "Tehsil 2", "Tehsil 3"];
  const villages = ["Village 1", "Village 2", "Village 3"];
  const farmerIds = ["Farmer 1", "Farmer 2", "Farmer 3"];

  return (
    <div className="h-lvh flex justify-center items-center  bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${background})` }}>
      <div className="w-96 p-6 text-white  border rounded-lg shadow-md bg-transparent text-center">
        <h2 className="text-2xl font-bold mb-4">Farmer Registration</h2>

        {/* State Dropdown */}
        <div className="mb-4 ml-6 flex items-center">
          <label className="w-24 text-left ">State:</label>
          <select
            className="w-48 p-2 bg-transparent border rounded-md"
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
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

        {/* District Dropdown */}
        <div className="mb-4 ml-6 flex items-center">
          <label className="w-24 text-left mb-">District:</label>
          <select
            className="w-48 p-2 bg-transparent border rounded-md"
            value={selectedDistrict}
            onChange={(e) => setSelectedDistrict(e.target.value)}
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
          <label className="w-24 text-left mb-2 ">Tehsil:</label>
          <select
            className="w-48 p-2 bg-transparent border rounded-md"
            value={selectedTehsil}
            onChange={(e) => setSelectedTehsil(e.target.value)}
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
          <label className="w-24 text-left mb-2 ">Village:</label>
          <select
            className="w-48 p-2 bg-transparent border rounded-md"
            value={selectedVillage}
            onChange={(e) => setSelectedVillage(e.target.value)}
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
          <label className="w-24 text-left mb-2 ">Farmer ID:</label>
          <select
            className="w-48 p-2 bg-transparent border rounded-md"
            value={selectedFarmerId}
            onChange={(e) => setSelectedFarmerId(e.target.value)}
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
    </div>
  );
};

export default Admin;
