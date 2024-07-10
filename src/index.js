import ApexCharts from "apexcharts";
import { setChartSpecificOptions, handleClick, saveImage } from "./utils";

// Import Charts
import {
  lineBasicChart,
  lineBrushChartAbove,
  lineBrushChartDown,
  lineDataLabelsChart,
  lineMissingValuesChart,
  lineZoomTimeChart,
} from "./charts/01-lines";
import {
  basicColumnsChart,
  columnDataLabelsChart,
  stackedColumnsChart,
} from "./charts/02-columns";
import {
  barFunc,
  barGrouped,
  barMixedCombo,
  barStacked,
} from "./charts/03-bars";
import { simpleDonutChart, simplePieChart } from "./charts/04-pie";
import { advancedTimelineChart, basicTimelineChart } from "./charts/05-time";
import {
  basicChart,
  leftBars,
  polarChart,
  radarChart,
  treeMapChart,
} from "./charts/06-other";

window.loadChart = function (json) {
  const obj = JSON.parse(json);
  const { series, seriesNew, type, callback } = obj;

  const crData = series[0].data.map((item) => item.y);
  const crDataLabel = series[0].data.map((item) => item.x);

  // Lines
  lineBasicChart();
  lineDataLabelsChart();
  lineZoomTimeChart();
  lineBrushChartAbove();
  lineBrushChartDown();
  lineMissingValuesChart();

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
};

//function to save the chart back to FIleMaker.
window.saveImage = saveImage;
