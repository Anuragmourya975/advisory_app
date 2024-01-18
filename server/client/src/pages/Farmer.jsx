import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import advisoryImage from "../assets/advisory.jpg";
const socket = io("https://farmer.sasyasystems.com");

const Farmer = () => {
  const [selectedAdvisory, setSelectedAdvisory] = useState("");
  const [weatherAdvisoryMessages, setWeatherAdvisoryMessages] = useState([]);
  const [fertilizerAdvisoryMessages, setFertilizerAdvisoryMessage] = useState(
    []
  );
  const playNotificationSound = () => {
    const audio = new Audio("../assets/notification.mp3");
    audio.play();
  };
  const [weatherCount, setWeatherCount] = useState(true);
  const [fertilizerCount, setFertilizerCount] = useState(true);
  useEffect(() => {
    // Join the farmer room when the component mounts
    socket.emit("joinRoom", "farmer");

    // Listen for messages from the admin
    socket.on("farmerWeatherAdvisoryMessage", (message) => {
      setWeatherAdvisoryMessages((prev) => [...prev, message]);
      console.log("famer Message data", message);
      console.log(localStorage.getItem("WeatherAdvisory"));
      playNotificationSound();
    });

    socket.on("farmerFertilizerAdvisoryMessage", (message) => {
      setFertilizerAdvisoryMessage((prev) => [...prev, message]);
      console.log("famer Message data", message);
      console.log(localStorage.getItem("FertilizerAdvisory"));
      playNotificationSound();
    });

    console.log("message in state", weatherAdvisoryMessages);
    // Clean up the event listener when the component unmounts
    return () => {
      socket.off("farmerWeatherAdvisoryMessage");
      socket.off("farmerFertilizerAdvisoryMessage");
    };
  }, []);
  const handleImageClick = () => {
    // Image download logic
    const link = document.createElement("a");
    link.href = advisoryImage;
    link.download = `Image_Advisory`;
    link.click();
  };
  const advisoryOptions = [
    "Weather Advisory",
    "Personalized Crop Advisory",
    "Fertilization Schedule",
    "Pesticide Schedule",
    "Disease Alerts",
    "Important Notice",
  ];

  const handleAdvisoryOption = (advisory) => {
    setSelectedAdvisory(advisory);
    if (advisory === "Weather Advisory") {
      setWeatherCount(false);
    }
    if (advisory === "Fertilization Schedule") {
      setFertilizerCount(false);
    }
  };
  return (
    <>
      {/* This is an example component */}
      <div className="container mx-auto shadow-lg rounded-lg ">
        {/* headaer */}
        <div className="px-5 py-5 flex justify-between items-center bg-white border-b-2">
          <div className="font-semibold text-2xl">Farmer App</div>
          <div className="w-1/2">
            {/* <input
          type="text"
          name=""
          id=""
          placeholder="search IRL"
          className="rounded-2xl bg-gray-100 py-3 px-5 w-full"
        /> */}
          </div>
          <div className="h-12 w-12 p-2 bg-yellow-500 rounded-full text-white font-semibold flex items-center justify-center">
            RA
          </div>
        </div>
        {/* end header */}
        {/* Chatting */}
        <div className="flex flex-row justify-between bg-white h-[88vh]">
          {/* chat list */}
          <div className="flex flex-col w-2/5 border-r-2 overflow-y-auto">
            {/* search compt */}
            {/* end search compt */}
            {/* user list */}
            <div className="flex flex-row py-4 px-2 justify-center items-center border-b-2">
              <div className="w-1/4">
                <img
                  src="https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D/600x600"
                  className="object-cover h-12 w-12 rounded-full"
                  alt=""
                />
              </div>
              <div className="w-full">
                {/* <div className="text-lg font-semibold">Luis1994</div> */}
                {/* <span className="text-gray-500">Pick me at 9:00 Am</span> */}
                <div
                  className={`${
                    selectedAdvisory === "Weather Advisory"
                      ? "text-lg font-semibold text-left underline cursor-pointer"
                      : "text-lg font-semibold text-left"
                  }`}
                  onClick={() => handleAdvisoryOption("Weather Advisory")}
                >
                  <div className="flex justify-between">
                    <h5 className="mb-2 text-md text-left font-bold tracking-tight ">
                      weather Advisory
                    </h5>
                    {weatherCount && weatherAdvisoryMessages.length > 0 && (
                      <span className="w-6 h-6 rounded-full flex justify-center items-center bg-red-500 text-white">
                        {weatherAdvisoryMessages.length}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row py-4 px-2 justify-center items-center border-b-2">
              <div className="w-1/4">
                <img
                  src="https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D/600x600"
                  className="object-cover h-12 w-12 rounded-full"
                  alt=""
                />
              </div>
              <div className="w-full">
                {/* <div className="text-lg font-semibold">Luis1994</div> */}
                {/* <span className="text-gray-500">Pick me at 9:00 Am</span> */}

                <div
                  className={`${
                    selectedAdvisory === "Fertilization Schedule"
                      ? "text-lg font-semibold text-left underline cursor-pointer"
                      : "text-lg font-semibold text-left"
                  }`}
                  onClick={() => handleAdvisoryOption("Fertilization Schedule")}
                >
                  <div className="flex justify-between">
                    <h5 className="mb-2 text-md text-left font-bold tracking-tight ">
                      Fertilization Schedule
                    </h5>
                    {fertilizerCount &&
                      fertilizerAdvisoryMessages.length > 0 && (
                        <span className="w-6 h-6 rounded-full flex justify-center items-center bg-red-500 text-white">
                          {fertilizerAdvisoryMessages.length}
                        </span>
                      )}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row py-4 px-2 justify-center items-center border-b-2">
              <div className="w-1/4">
                <img
                  src="https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D/600x600"
                  className="object-cover h-12 w-12 rounded-full"
                  alt=""
                />
              </div>
              <div className="w-full">
                {/* <div className="text-lg font-semibold">Luis1994</div> */}
                {/* <span className="text-gray-500">Pick me at 9:00 Am</span> */}

                <div
                  className={`${
                    selectedAdvisory === "Personalized Crop Advisory"
                      ? "text-lg font-semibold text-left underline cursor-pointer"
                      : "text-lg font-semibold text-left"
                  }`}
                  onClick={() =>
                    handleAdvisoryOption("Personalized Crop Advisory")
                  }
                >
                  <div className="flex justify-between">
                    <h5 className="mb-2 text-md text-left font-bold tracking-tight ">
                      Personalized Crop Advisory
                    </h5>
                    {/* {weatherCount && weatherAdvisoryMessages.length > 0 && (
                      <span className="w-6 h-6 rounded-full flex justify-center items-center bg-red-500 text-white">
                        {weatherAdvisoryMessages.length}
                      </span>
                    )} */}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row py-4 px-2 justify-center items-center border-b-2">
              <div className="w-1/4">
                <img
                  src="https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D/600x600"
                  className="object-cover h-12 w-12 rounded-full"
                  alt=""
                />
              </div>
              <div className="w-full">
                {/* <div className="text-lg font-semibold">Luis1994</div> */}
                {/* <span className="text-gray-500">Pick me at 9:00 Am</span> */}

                <div
                  className={`${
                    selectedAdvisory === "Pesticide Schedule"
                      ? "text-lg font-semibold text-left underline cursor-pointer"
                      : "text-lg font-semibold text-left"
                  }`}
                  onClick={() => handleAdvisoryOption("Pesticide Schedule")}
                >
                  <div className="flex justify-between">
                    <h5 className="mb-2 text-md text-left font-bold tracking-tight ">
                      Pesticide Schedule
                    </h5>
                    {/* {weatherCount && weatherAdvisoryMessages.length > 0 && (
                      <span className="w-6 h-6 rounded-full flex justify-center items-center bg-red-500 text-white">
                        {weatherAdvisoryMessages.length}
                      </span>
                    )} */}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row py-4 px-2 justify-center items-center border-b-2">
              <div className="w-1/4">
                <img
                  src="https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D/600x600"
                  className="object-cover h-12 w-12 rounded-full"
                  alt=""
                />
              </div>
              <div className="w-full">
                {/* <div className="text-lg font-semibold">Luis1994</div> */}
                {/* <span className="text-gray-500">Pick me at 9:00 Am</span> */}

                <div
                  className={`${
                    selectedAdvisory === "Disease Alerts"
                      ? "text-lg font-semibold text-left underline cursor-pointer"
                      : "text-lg font-semibold text-left"
                  }`}
                  onClick={() => handleAdvisoryOption("Disease Alerts")}
                >
                  <div className="flex justify-between">
                    <h5 className="mb-2 text-md text-left font-bold tracking-tight ">
                      Disease Alerts
                    </h5>
                    {/* {weatherCount && weatherAdvisoryMessages.length > 0 && (
                      <span className="w-6 h-6 rounded-full flex justify-center items-center bg-red-500 text-white">
                        {weatherAdvisoryMessages.length}
                      </span>
                    )} */}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row py-4 px-2 justify-center items-center border-b-2">
              <div className="w-1/4">
                <img
                  src="https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D/600x600"
                  className="object-cover h-12 w-12 rounded-full"
                  alt=""
                />
              </div>
              <div className="w-full">
                {/* <div className="text-lg font-semibold">Luis1994</div> */}
                {/* <span className="text-gray-500">Pick me at 9:00 Am</span> */}

                <div
                  className={`${
                    selectedAdvisory === "Important Notice"
                      ? "text-lg font-semibold text-left underline cursor-pointer"
                      : "text-lg font-semibold text-left"
                  }`}
                  onClick={() => handleAdvisoryOption("Important Notice")}
                >
                  <div className="flex justify-between">
                    <h5 className="mb-2 text-md text-left font-bold tracking-tight ">
                      Important Notice
                    </h5>
                    {/* {weatherCount && weatherAdvisoryMessages.length > 0 && (
                      <span className="w-6 h-6 rounded-full flex justify-center items-center bg-red-500 text-white">
                        {weatherAdvisoryMessages.length}
                      </span>
                    )} */}
                  </div>
                </div>
              </div>
            </div>
            {/* end user list */}
          </div>
          {/* end chat list */}
          {/* message */}
          <div className="w-full px-5 flex flex-col justify-between">
            <div className="flex flex-col mt-5">
              {selectedAdvisory && (
                <div className="h-full w-full mt-5 flex justify-center items-center">
                  {(() => {
                    switch (selectedAdvisory) {
                      case "Weather Advisory":
                        return weatherAdvisoryMessages.map((message, index) => {
                          const messageParts = message.split(",");
                          const desiredValue = messageParts
                            .slice(0, -1)
                            .join(",")
                            .trim();
                          return (
                            <div className="flex mb-4">
                              <div className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                                {desiredValue}
                              </div>
                              <img
                                src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                                className="object-cover h-8 w-8 rounded-full"
                                alt=""
                              />
                            </div>
                          );
                        });
                      case "Personalized Crop Advisory":
                        return <div className="mb-4 w-full"></div>;
                      case "Fertilization Schedule": //Need to fix for fertilization schedule
                        return <div className="mb-4 w-full"></div>;
                      case "Pesticide Schedule":
                        return <div className="mb-4 w-full"></div>;
                      case "Disease Alerts":
                        return <div className="mb-4 w-full"></div>;
                      case "Important Notice":
                        return <div className="mb-4 w-full"></div>;
                      default:
                        return null; // Render nothing for unknown cases
                    }
                  })()}
                </div>
              )}
            </div>
            <div className="py-5">
              <form>
                <label htmlFor="chat" className="sr-only">
                  Your message
                </label>
                <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
                  <button
                    type="button"
                    className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                  >
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 18"
                    >
                      <path
                        fill="currentColor"
                        d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
                      />
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                      />
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
                      />
                    </svg>
                    <span className="sr-only">Upload image</span>
                  </button>
                  <button
                    type="button"
                    className="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                  >
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.408 7.5h.01m-6.876 0h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM4.6 11a5.5 5.5 0 0 0 10.81 0H4.6Z"
                      />
                    </svg>
                    <span className="sr-only">Add emoji</span>
                  </button>
                  <textarea
                    id="chat"
                    rows={1}
                    className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Your message..."
                    defaultValue={""}
                  />
                  <button
                    type="submit"
                    className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
                  >
                    <svg
                      className="w-5 h-5 rotate-90 rtl:-rotate-90"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 20"
                    >
                      <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
                    </svg>
                    <span className="sr-only">Send message</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* end message */}
          <div className="w-2/5 border-l-2 px-5">
            <div className="flex flex-col">
              <div className="font-semibold text-xl py-4">Attachments!</div>
              {/* <img
                src="https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmlsZXxlbnwwfHwwfHx8MA%3D%3D/600x600"
                className="object-cover rounded-xl h-64"
                alt=""
              /> */}
              {weatherAdvisoryMessages.map((message, index) => {
                const messageParts = message.split(",");
                const desiredValue = messageParts.slice(-1)[0].trim();

                if (
                  desiredValue.endsWith(".jpeg") ||
                  desiredValue.endsWith(".jpg") ||
                  desiredValue.endsWith(".png")
                ) {
                  // Display the image using the desiredValue
                  // Replace the following line with the actual code to display the image
                  return (
                    <img
                      key={index}
                      src={advisoryImage}
                      alt={`Image ${index}`}
                      onClick={handleImageClick}
                      className="object-cover rounded-xl h-64 mt-4 cursor-pointer"
                    />
                  );
                } else {
                  // console.log(
                  //   "Unsupported image extension. Cannot display image."
                  // );
                  return (
                    <>
                      <a
                        href="../assets/advisoryexcel.pdf"
                        download={true}
                        className="flex justify-center items-center"
                      >
                        <i className="bx bx-download text-2xl mr-2"></i>
                        {desiredValue}
                      </a>
                    </>
                  );
                  // return null; // or some other fallback JSX
                }
              })}

              {/* <div className="font-semibold py-4">Created 22 Sep 2021</div>
              <div className="font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt, perspiciatis!
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Farmer;
