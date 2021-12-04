import React, { useEffect } from "react";
import {
  configBarChart,
  configDoughnut1,
  configDoughnut2,
  configLineChart1,
  configLineChart2,
} from "../data";
import ChartCard from "./Cards/ChartCard";
import LongChartCard from "./Cards/LongChartCard";
import ProgressCard from "./Cards/ProgressCard";

const DataDisplay = ({ progressItems }) => {
  useEffect(() => {
    const barChart = document.getElementById("chartBar");

    new window.Chart(
      document.getElementById("chartDoughnut1"),
      configDoughnut1
    );
    new window.Chart(
      document.getElementById("chartDoughnut2"),
      configDoughnut2
    );
    new window.Chart(document.getElementById("chartLine1"), configLineChart1);
    new window.Chart(document.getElementById("chartLine2"), configLineChart2);
    new window.Chart(barChart, configBarChart);
  }, []);

  return (
    <>
      <div className="flex flex-wrap justify-between items-center w-full mt-4">
        {progressItems.map((item, idx) => {
          return (
            <div key={item?.id} className="w-full lg:w-32% my-1 lg:m-0">
              <ProgressCard item={item} />
            </div>
          );
        })}
      </div>

      <div className="flex flex-wrap justify-between w-full mt-4">
        <div className="w-full lg:w-4/12 my-1 lg:m-0">
          <ChartCard
            chartName="chartDoughnut1"
            item={{
              header: {
                main: "Total Sales",
                sub: "+$985.56",
                subColor: "text-[#34AA44]",
              },
              data: {
                1: {
                  main: "$2,595",
                  sub: "Invoiced",
                },
                2: {
                  main: "23",
                  sub: "Invoices",
                },
              },
              icon: "cash-outline",
              iconBGColor: "bg-[#016450]",
            }}
          />
        </div>

        <div className="w-full lg:w-64% my-1 lg:m-0">
          <LongChartCard
            chartName="chartLine1"
            item={{
              header: {
                main: "Daily Profit",
              },
            }}
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-between w-full mt-4">
        <div className="w-full lg:w-64% my-1 lg:m-0">
          <LongChartCard
            chartName="chartLine2"
            item={{
              header: {
                main: "Daily active clients",
              },
            }}
          />
        </div>

        <div className="w-full lg:w-4/12 my-1 lg:m-0">
          <ChartCard
            chartName="chartDoughnut2"
            item={{
              header: {
                main: "User Onboarding",
                sub: "Q3 Goal: 8,000 User",
                subColor: "text-[#A3A3A3]",
              },
              data: {
                1: {
                  main: "2,452",
                  sub: "ONBOARDED",
                },
              },
              icon: "person-outline",
              iconBGColor: "bg-[#FACF55]",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default DataDisplay;
