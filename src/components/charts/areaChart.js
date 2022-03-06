import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const AreaSmallChart = () => {
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
      name: "invoice",
      data: [18, 8, 52, 21, 68, 56, 100],
    },
  ]);

  return (
    <div id="chart" class="chart_element mt-auto">
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={130}
      />
    </div>
  );
};
export default AreaSmallChart;
