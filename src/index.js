import ApexCharts from "apexcharts";
import { setChartSpecificOptions, handleClick, saveImage } from "./utils";

// Import Charts
import { lineBasicChart, lineBrushChartAbove, lineBrushChartDown, lineDataLabelsChart, lineMissingValuesChart, lineZoomTimeChart } from "./charts/01-lines";
import { basicColumnsChart, columnDataLabelsChart, stackedColumnsChart } from "./charts/02-columns";
import { barFunc, barGrouped, barMixedCombo, barStacked } from "./charts/03-bars";
import { simpleDonutChart, simplePieChart } from "./charts/04-pie";
import { advancedTimelineChart, basicTimelineChart } from "./charts/05-time";
import { basicChart, leftBars, polarChart, radarChart, treeMapChart } from "./charts/06-other";

let chart;
window.loadChart = function (json) {
  
  const obj = JSON.parse(json);
  const { series, seriesNew, type, callback } = obj;
  
  const crData = series[0].data.map(item => item.y)
  const crDataLabel = series[0].data.map(item => item.x)

  // Lines
  lineBasicChart();
  lineDataLabelsChart();
  lineZoomTimeChart();
  lineBrushChartAbove();
  lineBrushChartDown();
  lineMissingValuesChart()

  // Columnms
  basicColumnsChart();
  columnDataLabelsChart();
  stackedColumnsChart();

  // Bars
  barFunc(seriesNew);
  barGrouped();
  barStacked();
  barMixedCombo();

  // Pie
  simplePieChart();
  simpleDonutChart();

  // Timeline
  basicTimelineChart();
  advancedTimelineChart();

  // Other
  basicChart(series, type);
  radarChart(crData, crDataLabel);
  polarChart(crData, crDataLabel);
  treeMapChart(series, crDataLabel);
  leftBars(series, crDataLabel);

  // BARS

  // const options = {
  //   // colors: ["#F7DF1E", "#1D91B2"],
  //   stroke: {
  //     show: true,
  //     width: 2,
  //     colors: ['transparent']
  //   },
  //   plotOptions: {
  //     bar: { horizontal: false, dataLabels: { position: "bottom" } },
  //   },
  //   markers: { size: 3 },
  //   dataLabels: {
  //     enabled: true,
  //     background: { enabled: true, foreColor: "black" },
  //     offsetX: 20,
  //   },
  //   legend: {
  //     show: true,
  //     position: "left",
  //     horizontalAlign: "right",
  //   },
  //   chart: {
  //     toolbar: { show: true },
  //     type: "bar",
  //     width: "100%",
  //     zoom: { enabled: true },
  //     height: 440,
  //   },
  //   fill: {
  //     opacity: 1
  //   },
  //   yaxis: {
  //     title: {
  //       text: 'Count of Status'
  //     }
  //   },
  //   xaxis: {
  //     type: "category",
  //   },
  // };
  
  // // OPTIONS FOR XY Charts
  // const dataXYOptions = {
  //   series: series,
  //   xaxis: {
  //     type: "category",
  //   },
  // };

  // chart = new ApexCharts(document.querySelector("#chart"), {
  //   ...options,
  //   ...setChartSpecificOptions(dataXYOptions, type, series),
  // });

  // chart.render();

};

//function to save the chart back to FIleMaker.
window.saveImage = saveImage;