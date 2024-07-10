import ApexCharts from "apexcharts";

const data1 = [
  { x: new Date('2023-01-01').getTime(), y: 10 },
  { x: new Date('2023-01-02').getTime(), y: 15 },
  { x: new Date('2023-01-03').getTime(), y: 12 },
  { x: new Date('2023-01-04').getTime(), y: 20 },
  { x: new Date('2023-01-05').getTime(), y: 18 },
  { x: new Date('2023-01-06').getTime(), y: 25 },
  { x: new Date('2023-01-07').getTime(), y: 22 }
];

const data2 = [
  { x: new Date('2023-01-01').getTime(), y: 30 },
  { x: new Date('2023-01-02').getTime(), y: 35 },
  { x: new Date('2023-01-03').getTime(), y: 32 },
  { x: new Date('2023-01-04').getTime(), y: 40 },
  { x: new Date('2023-01-05').getTime(), y: 38 },
  { x: new Date('2023-01-06').getTime(), y: 45 },
  { x: new Date('2023-01-07').getTime(), y: 42 }
];

const dataZoomTime = [
  { x: new Date('2023-01-01').getTime(), y: 10 },
  { x: new Date('2023-01-02').getTime(), y: 15 },
  { x: new Date('2023-01-03').getTime(), y: 13 },
  { x: new Date('2023-01-04').getTime(), y: 20 },
  { x: new Date('2023-01-05').getTime(), y: 18 },
  { x: new Date('2023-01-06').getTime(), y: 22 },
  { x: new Date('2023-01-07').getTime(), y: 25 }
];


// BASIC LINE CHART
export const lineBasicChart = () => {
  try {
    let optionsBasicLineChart = {
      series: [{
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }],
      chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    title: {
      text: 'Product Trends by Month',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    }
    };

    let chartBasicLineChart = new ApexCharts(document.querySelector("#chartBasicLineChart"), optionsBasicLineChart);
    chartBasicLineChart.render();
  } catch (error) {
    console.log(error)
  }
}

// LINE WITH DATA LABELS
export const lineDataLabelsChart = () => {
  let optionsDataLabels = {
    series: [
    {
      name: "High - 2013",
      data: [28, 29, 33, 36, 32, 32, 33]
    },
    {
      name: "Low - 2013",
      data: [12, 11, 14, 18, 17, 13, 13]
    }
  ],
    chart: {
    height: 350,
    type: 'line',
    dropShadow: {
      enabled: true,
      color: '#000',
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2
    },
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    }
  },
  colors: ['#77B6EA', '#545454'],
  dataLabels: {
    enabled: true,
  },
  stroke: {
    curve: 'smooth'
  },
  title: {
    text: 'Average High & Low Temperature',
    align: 'left'
  },
  grid: {
    borderColor: '#e7e7e7',
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  markers: {
    size: 1
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    title: {
      text: 'Month'
    }
  },
  yaxis: {
    title: {
      text: 'Temperature'
    },
    min: 5,
    max: 40
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    floating: true,
    offsetY: -25,
    offsetX: -5
  }
  };

  let chartDataLabels = new ApexCharts(document.querySelector("#chartLineDataLabels"), optionsDataLabels);
  chartDataLabels.render();
}

// Zoomable Timeseries
export const lineZoomTimeChart = () => {
  try {
    let optionsZoomTime = {
      series: [{
      name: 'XYZ MOTORS',
      data: dataZoomTime
    }],
      chart: {
      type: 'area',
      stacked: false,
      height: 350,
      zoom: {
        type: 'x',
        enabled: true,
        autoScaleYaxis: true
      },
      toolbar: {
        autoSelected: 'zoom'
      }
    },
    dataLabels: {
      enabled: false
    },
    markers: {
      size: 0,
    },
    title: {
      text: 'Stock Price Movement',
      align: 'left'
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100]
      },
    },
    yaxis: {
      title: {
        text: 'Price'
      },
    },
    xaxis: {
      type: 'datetime',
    },
    tooltip: {
      shared: false,
    }
  };

  let chartZoomTime = new ApexCharts(document.querySelector("#chartZoomTime"), optionsZoomTime);
  chartZoomTime.render();
  } catch (error) {
    console.log(error)    
  }
}

// BRUSH CHART Above
export const lineBrushChartAbove = () => {
  try {
    let optionsBCA = {
      series: [{
      name: 'Flies',
      data: data1
    },{
      name: 'Spiders',
      data: data2
    }],
      chart: {
      id: 'chart2',
      type: 'line',
      height: 230,
      dropShadow: {
          enabled: true,
          enabledOnSeries: [1]
      },
      toolbar: {
        autoSelected: 'pan',
        show: false
      }
    },
    colors: ['#008FFB', '#00E396'],
    stroke: {
      width: 3
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: [2,6],
      curve: ['straight','monotoneCubic']
    },
    fill: {
      opacity: [1,0.75],
    },
    markers: {
      size: 0
    },
    yaxis: [
      {
        seriesName: 'Flies',
        axisTicks: {
          show: true,
          color: '#008FFB'
        },
        axisBorder: {
          show: true,
          color: '#008FFB'
        },
        labels: {
          style: {
            colors: '#008FFB',
          }
        },
        title: {
          text: "Flies",
          style: {
            color: '#008FFB'
          }
        },
      },
      {
        seriesName: 'Spiders',
        opposite: true,
        axisTicks: {
          show: true,
          color: '#00E396'
        },
        axisBorder: {
          show: true,
          color: '#00E396'
        },
        labels: {
          style: {
            colors: '#00E396'
          }
        },
        title: {
          text: "Spiders",
          style: {
            color: '#00E396'
          }
        },
      }
    ],
    xaxis: {
      type: 'datetime'
    }
  };

  let chartBCA = new ApexCharts(document.querySelector("#chartBCA"), optionsBCA);
  chartBCA.render();
  } catch (error) {
    console.log(error)
  }
}

// BRUSH CHART Down
export const lineBrushChartDown = () => {
  try {
    let optionsLineBCD = {
      series: [{
      name: 'Flies',
      data: data1
    },{
      name: 'Spiders',
      data: data2
    }],
      chart: {
      id: 'chart1',
      height: 130,
      type: 'area',
      brush:{
        target: 'chart2',
        enabled: true
      },
      selection: {
        enabled: true,
        xaxis: {
          min: new Date('24 April 2017').getTime(),
          max: new Date('29 May 2017').getTime()
        }
      },
    },
    colors: ['#008FFB', '#00E396'],
    stroke: {
      width: [1, 3],
      curve: ['straight', 'monotoneCubic']
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.91,
        opacityTo: 0.1,
      }
    },
    xaxis: {
      type: 'datetime',
      tooltip: {
        enabled: false
      }
    },
    yaxis: {
      max: 100,
      tickAmount: 2
    }
    };

    let chartLineBCD = new ApexCharts(document.querySelector("#chartBCD"), optionsLineBCD);
    chartLineBCD.render();    
  } catch (error) {
    console.log(error)
  }
}

// Missing Values Chart
export const lineMissingValuesChart = () => {
  try {
    let optionsMV = {
      series: [{
      name: 'Peter',
      data: [5, 5, 10, 8, 7, 5, 4, null, null, null, 10, 10, 7, 8, 6, 9]
    }, {
      name: 'Johnny',
      data: [10, 15, null, 12, null, 10, 12, 15, null, null, 12, null, 14, null, null, null]
    }, {
      name: 'David',
      data: [null, null, null, null, 3, 4, 1, 3, 4,  6,  7,  9, 5, null, null, null]
    }],
      chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      },
      animations: {
        enabled: false
      }
    },
    stroke: {
      width: [5,5,4],
      curve: 'smooth'
    },
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    title: {
      text: 'Missing data (null values)'
    },
    xaxis: {
    },
    };

    let chartMV = new ApexCharts(document.querySelector("#chartMV"), optionsMV);
    chartMV.render();
  } catch (error) {
    console.log(error)
  }
}