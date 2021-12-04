import {
  configDoughnut1,
  configDoughnut2,
  configLineChart1,
  configLineChart2,
  configBarChart,
} from "./chartData";

export const sideBarLinks = [
  {
    id: 1,
    name: "Profile",
    icon: "person-outline",
    active: true,
  },
  {
    id: 2,
    name: "My listing",
    icon: "clipboard-outline",
    active: false,
  },
  {
    id: 3,
    name: "Saved homes",
    icon: "home-outline",
    active: false,
  },
  {
    id: 4,
    name: "Saved search",
    icon: "search-outline",
    active: true,
  },
  {
    id: 5,
    name: "Messages",
    icon: "chatbubbles-outline",
    active: false,
  },
  {
    id: 6,
    name: "Notifications",
    icon: "cog-outline",
    active: false,
  },
  {
    id: 7,
    name: "Billing",
    icon: "calculator-outline",
    active: false,
  },
  {
    id: 8,
    name: "Analytics",
    icon: "pie-chart-outline",
    active: false,
  },
  {
    id: 9,
    name: "Blog",
    icon: "chatbox-ellipses-outline",
    active: false,
  },
];

export const progressCardItems = [
  {
    id: 1,
    header: {
      main: "Sales",
      sub: "Monthly Goal",
    },
    data: {
      main: "98.1%",
      sub: "+6.9%",
      gain: true,
    },
    chartType: "progressBar",
    footer: "Yearly Goal",
  },
  {
    id: 2,
    header: {
      main: "Revenue",
      sub: "Total Profit",
    },
    data: {
      main: "$13,892",
      sub: "+11.3%",
      gain: false,
    },
    chartType: "barChart",
    footer: "",
  },
  {
    id: 3,
    header: {
      main: "Clients",
      sub: "Subscribed",
    },
    data: {
      main: "1,232",
      sub: "+3.2%",
      gain: true,
    },
    chartType: "progressBar",
    footer: "Yearly Goal",
  },
];

export {
  configDoughnut1,
  configDoughnut2,
  configLineChart1,
  configLineChart2,
  configBarChart,
};
