import React from "react";

const LongChartCard = ({ item, chartName }) => {
  return (
    <div className="border border-gray-100 shadow-progressCard rounded-[4px] h-full">
      <div className="flex items-start justify-between p-3 lg:p-5">
        <div className="flex items-start">
          <div className="">
            <h1
              className={`text-[#3E3F42] text-[16px] leading-[25.6px] font-medium -mt-1`}
            >
              {item?.header?.main}
            </h1>
          </div>
        </div>
        <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
      </div>

      <hr className="bg-[#E8E8E8] h-[1px]" />

      <div
        className="flex items-center justify-center p-3 lg:p-5"
        style={{
          maxHeight: 200,
        }}
      >
        <canvas id={chartName}></canvas>
      </div>
    </div>
  );
};

export default LongChartCard;
