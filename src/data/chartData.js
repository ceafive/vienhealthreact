const dataDoughnut1 = {
  datasets: [
    {
      data: [300, 80],
      backgroundColor: ["#016450", "#EAECEE"],
    },
  ],
};

const dataDoughnut2 = {
  datasets: [
    {
      data: [35, 80],
      backgroundColor: ["#FACF55", "#EAECEE"],
    },
  ],
};

const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const lineData = [7, 3.1, 5.5, 8.5, 6, 2.9, 5.5];
const dataChartLine1 = {
  labels,
  datasets: [
    {
      backgroundColor: "rgba(255, 132, 51, 0.1)",
      borderColor: "#FF8433",
      borderWidth: 1.51847,
      data: lineData,
      fill: true,
    },
  ],
};

const dataChartLine2 = {
  labels,
  datasets: [
    {
      label: "",
      backgroundColor: "rgba(52, 131, 115, 0.1)",
      borderColor: "#348373",
      borderWidth: 1.51847,
      data: lineData,
      fill: true,
    },
  ],
};

const labelsBarChart = ["January", "February", "March", "April", "May", "June"];
const dataBarChart = {
  labels: labelsBarChart,
  datasets: [
    {
      backgroundColor: "#FF8433",
      borderColor: "#FF8433",
      data: [3, 2, 1, 4, 3, 1.5, 2.5],
    },
  ],
};

export const configDoughnut1 = {
  type: "doughnut",
  data: dataDoughnut1,
  options: {},
};

export const configDoughnut2 = {
  type: "doughnut",
  data: dataDoughnut2,
  options: {},
};

export const configLineChart1 = {
  type: "line",
  data: dataChartLine1,
  options: {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#9EA0A5",
        },
      },
      y: {
        beginAtZero: false,
        grid: {
          color: "#EAEDF3",
        },
        position: "right",
        min: 0,
        max: 9,
        ticks: {
          color: "#9EA0A5",
          stepSize: 3,
          callback: function (value, index, values) {
            return "$" + value + "K";
          },
        },
      },
    },
  },
};

export const configLineChart2 = {
  type: "line",
  data: dataChartLine2,
  options: {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#9EA0A5",
        },
      },
      y: {
        beginAtZero: false,
        grid: {
          color: "#EAEDF3",
        },
        position: "right",
        min: 0,
        max: 9,
        ticks: {
          color: "#9EA0A5",
          stepSize: 3,
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return "$" + value + "K";
          },
        },
      },
    },
  },
};

export const configBarChart = {
  type: "bar",
  data: dataBarChart,
  options: {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
    },
  },
};
