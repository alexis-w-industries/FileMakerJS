import ApexCharts from "apexcharts";

// SIMPLE PIE
export const simplePieChart = () => {
  try {
    let optionsSimplePie = {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 380,
        type: "pie",
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
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

    let chartSimplePie = new ApexCharts(
      document.querySelector("#chartSimplePie"),
      optionsSimplePie
    );
    chartSimplePie.render();
  } catch (error) {
    console.log(error);
  }
};

// SIMPLE DONUT
export const simpleDonutChart = () => {
  try {
    let optionsSimpleDonut = {
      series: [44, 55, 41, 17, 15],
      chart: {
        type: "donut",
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

    let chartSimpleDonut = new ApexCharts(
      document.querySelector("#chartSimpleDonut"),
      optionsSimpleDonut
    );
    chartSimpleDonut.render();
  } catch (error) {
    console.log(error);
  }
};
