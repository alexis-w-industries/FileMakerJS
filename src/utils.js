import html2canvas from "html2canvas";

const reconfigureForPieCharts = (data) => {
  const d = data.data;
  let series, labels;

  series = d.map((item) => item.x);
  labels = d.map((item) => item.y);

  return { series, labels, jsonData };
};

const setChartSpecificOptions = (dataXYOptions, type, series) => {
  const chartType = type === "pie" || type === "donut" || type === "radialBar";
  return chartType ? reconfigureForPieCharts(series) : dataXYOptions;
};

const handleClick = (config, series, callback) => {
  const seriesNames = series.map((item) => item.name);
  const xAxisNames = series.map((item) => item.data.map((item) => item.x));
  const dataPointIndex = config.dataPointIndex;
  const seriesIndex = config.seriesIndex;
  const category = xAxisNames[seriesIndex][dataPointIndex];
  const seriesName = seriesNames[seriesIndex];
  const obj = { category, seriesName };
  FileMaker.PerformScript(callback, JSON.stringify(obj));
};

const events = {
  events: {
    dataPointSelection: function (event, chartContext, config) {
      handleClick(config, series);
    },
  },
};

const getImagesFromWebViewer = function () {
  let scriptName = "Get Image";
  let sendImages = function ({ imgURI, blob }) {
    alert("SEND");
    let chartName = "Chart1";
    console.log("image", imgURI);
    if (imgURI) {
      let obj = { name: chartName, img: imgURI };
      window.FileMaker.PerformScriptWithOption(
        scriptName,
        JSON.stringify(obj),
        5
      );
      return;
    }
    let reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = function () {
      let base64data = reader.result;
      console.log(base64data);
      let obj = { name: chartName, img: base64data };
      FileMaker.PerformScriptWithOption(scriptName, JSON.stringify(obj), 5);
    };
  };
  chart.dataURI().then(sendImages);
};

const saveImage = (callback) => {
  html2canvas(document.querySelector("#chart")).then((canvas) => {
    const img = canvas.toDataURL("image/png");
    console.log(img);

    FileMaker.PerformScriptWithOption(callback, JSON.stringify(img), 5);
  });
};

export {
  reconfigureForPieCharts,
  handleClick,
  setChartSpecificOptions,
  saveImage,
  events,
  getImagesFromWebViewer,
};
