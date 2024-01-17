import React from "react";
import AdvisorySection from "./AdvisorySection";

const Dashboard = () => {
  return (
    <div className="h-screen flex py-7">
      <div className="w-full grid grid-cols-2 gap-10 m-10 items-center">
        <div className="w-full h-full p-4 border rounded-lg shadow-md bg-gray-200 flex flex-col justify-center">
          <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-700 ">
            Satellite Section
          </h5>
        </div>
        <div className="w-full  h-full p-4 border rounded-lg shadow-md bg-gray-200 flex flex-col justify-center">
          <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-700">
            Soil Report Section
          </h5>
        </div>
        <AdvisorySection/>
        {/* <div className="w-full  h-full p-4 border rounded-lg shadow-md bg-gray-200 flex flex-col justify-center">
          <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-700">
            Advisory Section
          </h5>
        </div> */}
        <div className="w-full  h-full p-4 border rounded-lg shadow-md bg-gray-200 flex flex-col justify-center">
          <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-700">
            Admin Section
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
