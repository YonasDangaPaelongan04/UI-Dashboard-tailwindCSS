// Row 1

window.addEventListener('load', function () {
  let options = {
    // set the labels option to true to show the labels on the X and Y axis
    xaxis: {
      show: true,
      categories: ['01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', '06 Feb', '07 Feb'],
      labels: {
        show: true,
        style: {
          fontFamily: 'Poppins, sans-serif',
          cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400',
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: true,
      labels: {
        show: true,
        style: {
          fontFamily: 'Poppins, sans-serif',
          cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400',
        },
        formatter: function (value) {
          return value;
        },
      },
    },
    series: [
      {
        name: 'Items Sold',
        data: [150, 141, 145, 152, 135, 125, 150],
        color: '#1A56DB',
      },
      {
        name: 'Orders',
        data: [43, 13, 65, 12, 42, 73, 17],
        color: '#7E3BF2',
      },
    ],
    chart: {
      sparkline: {
        enabled: false,
      },
      height: '70%',
      width: '100%',
      type: 'area',
      fontFamily: 'Poppins, sans-serif',
      dropShadow: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
        shade: '#1C64F2',
        gradientToColors: ['#1C64F2'],
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 6,
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
    },
  };

  if (document.getElementById('labels-chart') && typeof ApexCharts !== 'undefined') {
    const chart = new ApexCharts(document.getElementById('labels-chart'), options);
    chart.render();
  }
});

// Row 2

window.addEventListener('load', function () {
  const options = {
    colors: ['#1A56DB', '#FDBA8C'],
    series: [
      {
        name: 'Items Sold',
        color: '#1A56DB',
        data: [
          { x: 'Mon', y: 231 },
          { x: 'Tue', y: 122 },
          { x: 'Wed', y: 63 },
          { x: 'Thu', y: 421 },
          { x: 'Fri', y: 122 },
          { x: 'Sat', y: 323 },
          { x: 'Sun', y: 111 },
        ],
      },
      {
        name: 'Orders',
        color: '#FDBA8C',
        data: [
          { x: 'Mon', y: 232 },
          { x: 'Tue', y: 113 },
          { x: 'Wed', y: 341 },
          { x: 'Thu', y: 224 },
          { x: 'Fri', y: 522 },
          { x: 'Sat', y: 411 },
          { x: 'Sun', y: 243 },
        ],
      },
    ],
    chart: {
      type: 'bar',
      height: '290px',
      fontFamily: 'Poppins, sans-serif',
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '100%',
        borderRadiusApplication: 'end',
        borderRadius: 8,
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      style: {
        fontFamily: 'Poppins, sans-serif',
      },
    },
    states: {
      hover: {
        filter: {
          type: 'darken',
          value: 1,
        },
      },
    },
    stroke: {
      show: true,
      width: 0,
      colors: ['transparent'],
    },
    grid: {
      show: false,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: -14,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      floating: false,
      labels: {
        show: true,
        style: {
          fontFamily: 'Poppins, sans-serif',
          cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400',
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    fill: {
      opacity: 1,
    },
  };

  if (document.getElementById('column-chart') && typeof ApexCharts !== 'undefined') {
    const chart = new ApexCharts(document.getElementById('column-chart'), options);
    chart.render();
  }
});
