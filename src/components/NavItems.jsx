import React from "react";

const NavItems = ({ sideBarItems }) => {
  return (
    <div className="mt-4">
      {sideBarItems?.map((item, idx) => {
        return (
          <div key={idx}>
            <hr className="bg-[#E8E8E8] h-[1px]" />
            <div className="flex justify-between py-3 cursor-pointer">
              <h1
                className={`text-brandDark text-[16px] leading-[25.6px] ${
                  item?.active ? "font-medium" : ""
                }`}
              >
                {item?.name}
              </h1>
              <ion-icon
                name={item?.icon}
                style={{
                  color: "#A3A3A3",
                }}
              ></ion-icon>
            </div>
            {idx === sideBarItems?.length - 1 && (
              <hr className="bg-[#E8E8E8] h-[1px]" />
            )}
          </div>
        );
      })}

      <div className="mt-10">
        <h1 className="text-[#484848] leading-[22.4px] text-[14px]">
          Profile link
        </h1>
        <div className="flex relative h-[48px] border border-[#D1D1D1] rounded-[6px] overflow-hidden">
          <input
            className="overflow-hidden text-[#226EC7] bg-[#fff] transition px-2 pr-1  focus:outline-none w-full text-sm font-light"
            type="search"
            defaultValue="https://www.udwell.com/p."
          />
          <button
            type="submit"
            className="bg-[#fff] p-4 h-full rounded-r-lg border-l border-[#D1D1D1] flex justify-center items-center"
          >
            <ion-icon
              name="copy-outline"
              style={{
                color: "#A3A3A3",
              }}
            ></ion-icon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavItems;
