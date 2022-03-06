import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const PieChart = () => {
  const [options] = useState({
    chart: {
      type: "donut",
      height: 'inherit'
    },
    labels: ["Transport", "Online shopping", "Restaurant"],
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: false,
            total: {
              showAlways: true,
              show: true,
            },
          },
        },
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 250,
          },
          legend: {
            show: true,
            position: "left",
            horizontalAlign: 'center',
            offsetX: 0,
      offsetY: 10,
          },
        },
      },
    ],
  });

  const [series] = useState([44, 55, 48]);

  return (
    <div id="chart" class="chart_pie_element">
      <ReactApexChart
        options={options}
        series={series}
        type="donut"
        height={130}
      />
    </div>
  );
};
export default PieChart;
