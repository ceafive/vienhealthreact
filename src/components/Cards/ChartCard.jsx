import React from "react";

const ChartCard = ({ item, chartName }) => {
  return (
    <div className="border border-gray-100 shadow-progressCard rounded-[4px] h-full">
      <div className="flex items-start justify-between p-3 lg:p-3">
        <div className="flex items-start">
          <div
            className={`p-2 ${item?.iconBGColor} rounded-[3.20245px] flex items-center justify-center`}
          >
            <ion-icon
              name={item?.icon}
              style={{
                color: "#fff",
              }}
            ></ion-icon>
          </div>

          <div className="ml-3">
            <h1
              className={`text-[#3E3F42] text-[16px] leading-[25.6px] font-medium -mt-1`}
            >
              {item?.header?.main}
            </h1>
            <h1
              className={`${item?.header?.subColor} text-[12px] leading-[16.8px]`}
            >
              {item?.header?.sub}
            </h1>
          </div>
        </div>
        <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
      </div>

      <hr className="bg-[#E8E8E8] h-[1px]" />

      <div className="flex items-center justify-center p-3 lg:p-5">
        <div className="w-1/2">
          <canvas id={chartName}></canvas>
        </div>

        <div className="w-1/2">
          <div className="">
            <div className="my-3 text-center">
              <h1 className="text-[#1A1A1A] leading-[27.6px] text-[20px]">
                {item?.data[1]?.main}
              </h1>
              <h1 className="text-[#9EA0A5] leading-[14.4px] text-[9.6px]">
                {item?.data[1]?.sub}
              </h1>
            </div>

            <hr className="bg-[#E8E8E8] h-[1px] w-full" />

            <div className="my-3 text-center">
              <h1 className="text-[#1A1A1A] leading-[27.6px] text-[20px]">
                {item?.data[2]?.main}
              </h1>
              <h1 className="text-[#9EA0A5] leading-[14.4px] text-[9.6px]">
                {item?.data[2]?.sub}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartCard;
