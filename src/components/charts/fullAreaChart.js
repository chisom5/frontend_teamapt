import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const AreaFullChart = () => {
  const [options] = useState({
    chart: {
      type: "area",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },

    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "month",
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      }
    },
    yaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      }
    },
    grid: {
      borderColor: "#b9acf2",
      clipMarkers: false,
      yaxis: {
        lines: {
          show: false,
        },
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
    },

    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
    },
    tooltip: {
      x: {
        format: "month",
      },
    },
  });

  const [series] = useState([
    {
      name: "series1",
      data: [48, 12, 45, 11, 62, 16, 100],
    },
  ]);

  return (
    <div id="chart" class="chart_full_element mt-auto">
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={130}
      />
    </div>
  );
};
export default AreaFullChart;
