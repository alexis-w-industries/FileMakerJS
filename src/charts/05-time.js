import ApexCharts from "apexcharts";

// BASIC TIMELINE
export const basicTimelineChart = () => {
  try {
    let optionsTimeLine = {
      series: [
        {
          data: [
            {
              x: "Code",
              y: [
                new Date("2019-03-02").getTime(),
                new Date("2019-03-04").getTime(),
              ],
            },
            {
              x: "Test",
              y: [
                new Date("2019-03-04").getTime(),
                new Date("2019-03-08").getTime(),
              ],
            },
            {
              x: "Validation",
              y: [
                new Date("2019-03-08").getTime(),
                new Date("2019-03-12").getTime(),
              ],
            },
            {
              x: "Deployment",
              y: [
                new Date("2019-03-12").getTime(),
                new Date("2019-03-18").getTime(),
              ],
            },
          ],
        },
      ],
      chart: {
        height: 350,
        type: "rangeBar",
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      xaxis: {
        type: "datetime",
      },
    };

    let chartTimeLine = new ApexCharts(
      document.querySelector("#chartTimeLine"),
      optionsTimeLine
    );
    chartTimeLine.render();
  } catch (error) {
    console.log(error);
  }
};

// ADVANCED TIMELINE
export const advancedTimelineChart = () => {
  try {
    let optionsTimeLineAdvanced = {
      series: [
        {
          name: "Bob",
          data: [
            {
              x: "Design",
              y: [
                new Date("2019-03-05").getTime(),
                new Date("2019-03-08").getTime(),
              ],
            },
            {
              x: "Code",
              y: [
                new Date("2019-03-02").getTime(),
                new Date("2019-03-05").getTime(),
              ],
            },
            {
              x: "Code",
              y: [
                new Date("2019-03-05").getTime(),
                new Date("2019-03-07").getTime(),
              ],
            },
            {
              x: "Test",
              y: [
                new Date("2019-03-03").getTime(),
                new Date("2019-03-09").getTime(),
              ],
            },
            {
              x: "Test",
              y: [
                new Date("2019-03-08").getTime(),
                new Date("2019-03-11").getTime(),
              ],
            },
            {
              x: "Validation",
              y: [
                new Date("2019-03-11").getTime(),
                new Date("2019-03-16").getTime(),
              ],
            },
            {
              x: "Design",
              y: [
                new Date("2019-03-01").getTime(),
                new Date("2019-03-03").getTime(),
              ],
            },
          ],
        },
        {
          name: "Joe",
          data: [
            {
              x: "Design",
              y: [
                new Date("2019-03-02").getTime(),
                new Date("2019-03-05").getTime(),
              ],
            },
            {
              x: "Test",
              y: [
                new Date("2019-03-06").getTime(),
                new Date("2019-03-16").getTime(),
              ],
              goals: [
                {
                  name: "Break",
                  value: new Date("2019-03-10").getTime(),
                  strokeColor: "#CD2F2A",
                },
              ],
            },
            {
              x: "Code",
              y: [
                new Date("2019-03-03").getTime(),
                new Date("2019-03-07").getTime(),
              ],
            },
            {
              x: "Deployment",
              y: [
                new Date("2019-03-20").getTime(),
                new Date("2019-03-22").getTime(),
              ],
            },
            {
              x: "Design",
              y: [
                new Date("2019-03-10").getTime(),
                new Date("2019-03-16").getTime(),
              ],
            },
          ],
        },
        {
          name: "Dan",
          data: [
            {
              x: "Code",
              y: [
                new Date("2019-03-10").getTime(),
                new Date("2019-03-17").getTime(),
              ],
            },
            {
              x: "Validation",
              y: [
                new Date("2019-03-05").getTime(),
                new Date("2019-03-09").getTime(),
              ],
              goals: [
                {
                  name: "Break",
                  value: new Date("2019-03-07").getTime(),
                  strokeColor: "#CD2F2A",
                },
              ],
            },
          ],
        },
      ],
      chart: {
        height: 450,
        type: "rangeBar",
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: "80%",
        },
      },
      xaxis: {
        type: "datetime",
      },
      stroke: {
        width: 1,
      },
      fill: {
        type: "solid",
        opacity: 0.6,
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
      },
    };

    let chartTimeLineAdvanced = new ApexCharts(
      document.querySelector("#chartTimeLineAdvanced"),
      optionsTimeLineAdvanced
    );
    chartTimeLineAdvanced.render();
  } catch (error) {
    console.log(error);
  }
};
