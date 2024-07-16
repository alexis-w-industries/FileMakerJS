import ApexCharts from "apexcharts";

export const thuanChart = (jsonDataBars, groups) => {
  try {
    const series = jsonDataBars.map((data) => ({
      name: data.name,
      data: data.data.map((item) => ({ x: item.x, y: item.y })),
    }));

    let options = {
      series: series,
      chart: {
        type: "bar",
        height: 380,
        stacked: true,
      },
      xaxis: {
        type: "category",
        group: {
          style: {
            fontSize: "10px",
            fontWeight: 700,
          },

          groups: groups,
        },
      },
      labels: {
        rotate: -90, 
        style: {
          fontSize: "12px", 
        },
      },
      title: {
        text: "FAT Test_Defects Per Unit",
      },
      plotOptions: {
        bar: {
          horizontal: false,
          endingShape: "flat",
        },
      },
      responsive: [
        {
          breakpoint: 1000,
          options: {
            plotOptions: {
              bar: {
                columnWidth: "50%",
              },
            },
            xaxis: {
              labels: {
                style: {
                  fontSize: "10px",
                },
              },
            },
          },
        },
      ],
    };

    let chart = new ApexCharts(document.querySelector("#thuan-chart"), options);
    chart.render();
  } catch (error) {
    console.log(error);
  }
};
