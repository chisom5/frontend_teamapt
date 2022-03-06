import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const BarChart = () => {
  const colors = ["#b9acf2", "#1d62ca", "#b8abf1", "#b5a8ed", "#1d62ca"];
  const [options] = useState({
    chart: {
      type: "bar",
      height: 350,

      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },

    plotOptions: {
      bar: {
        columnWidth: "40%",
        distributed: true,
        horizontal: false,
        borderRadius: 8,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: ["Mar", "Apr", "May", "Jun", "Jul", "Aug"],
      labels: {
        style: {
          fontSize: "12px",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
    },
    fill: {
      opacity: 1,
      colors: colors,
    },
    responsive: [
      {
        breakpoint: 380,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
  });

  const [series] = useState([
    {
      data: [50, 82, 180, 38, 68, 90],
    },
  ]);

  return (
    <div id="chart" class="chart_bar_element">
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={130}
      />
    </div>
  );
};
export default BarChart;
