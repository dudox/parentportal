import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container } from "react-bootstrap";
import Chart from "react-apexcharts";

function RadialChart() {
  const thing = {
    series: [50],
    options: {
      chart: {
        height: 350,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 15,
            size: "70%",
          },
          dataLabels: {
            name: {
              fontSize: "50",
              show: true,
            },
            value: {
              show: false,
            },
          },
        },
      },
      labels: [50],
    },
  };
  return (
    <React.Fragment>
      
        <Chart
          options={thing.options}
          series={thing.series}
          type="radialBar"
          height={200}
          width={200}
          labels={thing.labels}
        />
      
    </React.Fragment>
  );
}

export default RadialChart;
