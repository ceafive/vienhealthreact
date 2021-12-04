import React from "react";

const ProgressCard = ({ item }) => {
  return (
    <div className="border border-gray-100 shadow-progressCard p-3 lg:p-5 rounded-[4px]  min-h-[175px]">
      <div className="flex items-center justify-between">
        <h1 className="text-[#484848] text-[16px] leading-[25.6px] font-medium">
          {item?.header?.main}
        </h1>
        <h1 className="text-[#9EA0A5] text-[14px] leading-[25.2px]">
          {item?.header?.sub}
        </h1>
      </div>

      <div className="flex items-center justify-between my-3">
        <h1 className="text-[#1A1A1A] text-[36px] leading-[45.72px]">
          {item?.data?.main}
        </h1>
        <h1
          className={`${
            item?.data?.gain ? "text-[#348373]" : "text-[#FF8433]"
          } text-[14px] leading-[25.2px]`}
        >
          {item?.data?.sub}
        </h1>
      </div>

      {item?.chartType === "progressBar" && (
        <div className=" bg-[#EAECEE] w-full h-1 rounded-[1px] my-3">
          <div className="w-1/2 bg-[#016450] h-full"></div>
        </div>
      )}

      {item?.chartType === "barChart" && (
        <div style={{ maxHeight: 30 }}>
          <canvas id="chartBar"></canvas>
        </div>
      )}

      <div>
        <h1 className="text-[#A3A3A3] text-[12px] leading-[16.8px]">
          {item?.footer}
        </h1>
      </div>
    </div>
  );
};

export default ProgressCard;
