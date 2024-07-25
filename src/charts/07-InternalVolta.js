import ApexCharts from "apexcharts";

const series = [
  {
    name: "Website Blog",
    type: "column",
    data: [
      440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160, 257, 160,
    ],
  },
  {
    name: "Social Media",
    type: "line",
    data: [
      23.12, 42.12, 35.12, 27.12, 43.12, 22.12, 17.12, 31.12, 22.12, 22.12,
      12.01, 16, 12.01, 16,
    ],
  },
];

export const internatlVoltaLineChart = (jsonArrFI) => {
  try {
    let options = {
      series: jsonArrFI,
      chart: {
        height: 350,
        type: "line",
      },
      stroke: {
        width: [0, 4],
      },
      title: {
        text: "Traffic Sources",
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1],
      },
      labels: [
        "Wiring",
        "Wire Termination",
        "Labeling/Nameplate",
        "Missing Part",
        "Assembly Issue",
        "Torque Marking",
        "Breaker/Cradle",
        "Damaged Part",
        "Wire Routing",
        "Cosmetic Issues",
        "Wrong Orientation",
        "Debris/Foreign Objects",
        "Drawing Change",
      ],
      xaxis: {
        tickAmount: jsonArrFI[0].data.length, // Ajusta los ticks en el eje x
        labels: {
          rotate: -45,
          maxHeight: 70,
        },
      },
      yaxis: [
        {
          title: {
            text: "",
          },
        },
        {
          opposite: true,
          title: {
            text: "",
          },
        },
      ],
      plotOptions: {
        bar: {
          columnWidth: "50%",
        },
      },
    };

    let chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
  } catch (error) {
    console.log(error);
  }
};

export const monthlyDefectsLineChart = (jsonArrMonthlyDefectsT) => {
  try {

    const data = jsonArrMonthlyDefectsT.map(item => {
      return {
        name: item.name,
        data: item.data
      }
    });
    const labels = jsonArrMonthlyDefectsT[0].label;

    let options = {
      series: data,
      chart: {
        height: 350,
        type: "line",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2,
        },
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#77B6EA", "#545454"],
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: "smooth",
      },
      // title: {
      //   text: "Average High & Low Temperature",
      //   align: "left",
      // },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      markers: {
        size: 1,
      },
      xaxis: {
        categories: labels,
        title: {
          text: "Month",
        },
      },
      // yaxis: {
      //   title: {
      //     text: "Temperature",
      //   },
      //   min: 5,
      //   max: 40,
      // },
      // legend: {
      //   position: "top",
      //   horizontalAlign: "right",
      //   floating: true,
      //   offsetY: -25,
      //   offsetX: -5,
      // },
    };

    let chart = new ApexCharts(
      document.querySelector("#chart-monthly-defects"),
      options
    );
    chart.render();
  } catch (error) {
    console.log(error);
  }
};
