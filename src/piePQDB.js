import { saveImage } from "./utils";
import ApexCharts from "apexcharts";

let chartPiePQDB;

document.addEventListener("DOMContentLoaded", () => {
    var options = {
        series: [44, 55, 13, 43, 22],
        chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
      };

      chartPiePQDB = new ApexCharts(document.querySelector("#chartPiePQ"), options);
      chartPiePQDB.render();
    
  });

// Function to save the chart back to FileMaker.
window.saveImage = saveImage;