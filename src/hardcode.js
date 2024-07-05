import { setChartSpecificOptions, handleClick, saveImage } from "./utils";
import ApexCharts from "apexcharts";

let chartHardCode;

document.addEventListener("DOMContentLoaded", () => {
    const optionsHC  = {
        series: [{
        name: 'Ethan Francis',
        data: [409624.20, 0, 283920.40, 0, 16912.90, 556744.40, 361633.40, 0]
      }, {
        name: 'Stetson Dorrough',
        data: [146098.84, 0, 19912.25, 174839.43, 0, 0, 0, 0]
      }, {
        name: 'Albert Sanchez',
        data: [817110.30, 948295.44, 978027.84, 661728.38, 1179771.93, 888444.39, 693831.22, 0]
      }],
        chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['12/2023', '1/2024', '2/2024', '3/2024', '4/2024', '5/2024', '6/2024', '7/2024'],
      },
      yaxis: {
        title: {
          text: '$ (thousands)'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " dollars"
          }
        }
      }
      };
  
    chartHardCode = new ApexCharts(document.querySelector("#chartPiePQ"), optionsHC);
    chartHardCode.render();
  });

// Function to save the chart back to FileMaker.
window.saveImage = saveImage;

