import ApexCharts from "apexcharts";
import { setChartSpecificOptions } from "../utils";

// Basic Chart Test
export const basicChart = (series, type) => {
  try {
    const options = {
      // colors: ["#F7DF1E", "#1D91B2"],
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
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
        opacity: 1,
      },
      yaxis: {
        title: {
          text: "Count of Status",
        },
      },
      xaxis: {
        type: "category",
      },
    };

    //   OPTIONS FOR XY Charts
    const dataXYOptions = {
      series: series,
      xaxis: {
        type: "category",
      },
    };

    let chart = new ApexCharts(document.querySelector("#chart"), {
      ...options,
      ...setChartSpecificOptions(dataXYOptions, type, series),
    });

    chart.render();
  } catch (error) {
    console.log(error);
  }
};

// RADAR CHART
export const radarChart = (crData, crDataLabel) => {
  try {
    let optionsRadar = {
      series: [
        {
          name: "Series 1",
          data: crData,
        },
      ],
      chart: {
        height: 350,
        type: "radar",
      },
      title: {
        text: "Basic Radar Chart",
      },
      yaxis: {
        stepSize: 20,
      },
      xaxis: {
        categories: crDataLabel,
      },
    };

    let chartRadar = new ApexCharts(
      document.querySelector("#chart-radar"),
      optionsRadar
    );
    chartRadar.render();
  } catch (error) {
    console.log(error);
  }
};

// POLAR CHART
export const polarChart = (crData, crDataLabel) => {
  try {
    let optionsPolar = {
      series: crData,
      chart: {
        type: "polarArea",
      },
      labels: crDataLabel,
      stroke: {
        colors: ["#fff"],
      },
      fill: {
        opacity: 0.8,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    };

    let chartPolar = new ApexCharts(
      document.querySelector("#chart-polar"),
      optionsPolar
    );
    chartPolar.render();
  } catch (error) {
    console.log(error);
  }
};

// TREE MAP
export const treeMapChart = (series) => {
  try {
    let optionsTM = {
      series: series,
      legend: {
        show: false,
      },
      chart: {
        height: 350,
        type: "treemap",
      },
      title: {
        text: "Basic Treemap",
      },
    };

    let chartTP = new ApexCharts(
      document.querySelector("#chart-TP"),
      optionsTM
    );
    chartTP.render();
  } catch (error) {
    console.log(error);
  }
};

// LEFT BARS
export const leftBars = (series, crDataLabel) => {
  try {
    let optionsBL = {
      series: series,
      chart: {
        type: "bar",
        height: 380,
      },
      plotOptions: {
        bar: {
          barHeight: "100%",
          distributed: true,
          horizontal: true,
          dataLabels: {
            position: "bottom",
          },
        },
      },
      colors: [
        "#33b2df",
        "#546E7A",
        "#d4526e",
        "#13d8aa",
        "#A5978B",
        "#2b908f",
        "#f9a3a4",
        "#90ee7e",
        "#f48024",
        "#69d2e7",
      ],
      dataLabels: {
        enabled: true,
        textAnchor: "start",
        style: {
          colors: ["#fff"],
        },
        formatter: function (val, opt) {
          return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
        },
        offsetX: 0,
        dropShadow: {
          enabled: true,
        },
      },
      stroke: {
        width: 1,
        colors: ["#fff"],
      },
      xaxis: {
        categories: crDataLabel,
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      title: {
        text: "Custom DataLabels",
        align: "center",
        floating: true,
      },
      subtitle: {
        text: "Category Names as DataLabels inside bars",
        align: "center",
      },
      tooltip: {
        theme: "dark",
        x: {
          show: false,
        },
        y: {
          title: {
            formatter: function () {
              return "";
            },
          },
        },
      },
    };

    let chartBL = new ApexCharts(
      document.querySelector("#chart-BL"),
      optionsBL
    );
    chartBL.render();
  } catch (error) {
    console.log(error);
  }
};
