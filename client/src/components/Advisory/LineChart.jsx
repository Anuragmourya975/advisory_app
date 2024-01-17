import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import AdvisoryData from "./data";

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

const LineChart = ({ props }) => {
  console.log("props", props);
  const getDataArray = (dataProp) => {
    // Use a default property (e.g., temperature) if dataProp is not provided
    const propertyToMap = dataProp || "Temperature";

    // Map the specified property from the data
    return AdvisoryData.map((data) => data[propertyToMap]);
  };
  return (
    <div className="w-96 h-48">
      {props === "Severe" ? null : (
        <Line
          data={{
            labels: AdvisoryData.map((data) => data.label),
            datasets: [
              {
                label: `${props}`,
                data: getDataArray(props),
                backgroundColor: "#064FF0",
                borderColor: "#064FF0",
              },
            ],
          }}
          options={{
            elements: {
              line: {
                tension: 0.5,
              },
            },
            plugins: {
              title: {
                text: `${props}`,
              },
            },
          }}
        />
      )}
    </div>
  );
};

export default LineChart;
