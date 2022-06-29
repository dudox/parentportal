import React from "react";
import Chart from "react-apexcharts";

function LineChart() {
  const thing = {
    series: [
      {
        name: "Score",
        data: [75, 30, 0, 50, 90, 75, 50],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Am I OK? History",
        align: "left",
      },
      markers: {
        size: 2,
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th"],
        title: {
          text: "Uses",
          style: { color: "#79AB5F" },
        },
      },
      yaxis: {
        categories: ["-150", "-100", "-50", "0", "50", "100", "150"],
        title: {
          text: "Score",
          style: { color: "#79ABSF" },
        },
      },
    },
  };
  return (
    <>
      <Chart
        options={thing.options}
        series={thing.series}
        type="line"
        height={500}
        width={800}
        labels={thing.labels}
        markers={thing.markers}
        value={thing.yaxis}
      />
    </>
  );
}

export default LineChart;
