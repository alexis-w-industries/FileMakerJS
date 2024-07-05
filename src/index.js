import { setChartSpecificOptions, handleClick, saveImage } from "./utils";

import ApexCharts from "apexcharts";

let chart;
window.loadChart = function (json) {
  
  const obj = JSON.parse(json);
  const { series, type, callback } = obj;

  console.log("series 1: ", series)

  //GLOBAL OPTIONS!!!!

  const options = {
    // colors: ["#F7DF1E", "#1D91B2"],
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    plotOptions: {
      bar: { horizontal: false, dataLabels: { position: "bottom" } },
    },
    markers: { size: 3 },
    dataLabels: {
      enabled: true,
      background: { enabled: true, foreColor: "black" },
      offsetX: 20,
    },
    legend: {
      show: true,
      position: "left",
      horizontalAlign: "right",
    },
    chart: {
      toolbar: { show: true },
      type: "bar",
      width: "100%",
      zoom: { enabled: true },
      height: 440,
    },
    fill: {
      opacity: 1
    },
    yaxis: {
      title: {
        text: 'Count of Status'
      }
    },
    xaxis: {
      type: "category",
    },
  };
  
  //OPTIONS FOR XY Charts
  const dataXYOptions = {
    series: series,
    xaxis: {
      type: "category",
    },
  };

  chart = new ApexCharts(document.querySelector("#chart"), {
    ...options,
    ...setChartSpecificOptions(dataXYOptions, type, series),
  });

  chart.render();
};

//function to save the chart back to FIleMaker.
window.saveImage = saveImage;