import React from "react";

const Header = () => {
  return (
    <div className="h-[100px] lg:h-[80px] bg-white shadow-sm px-5 lg:px-24">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between h-full w-full">
        <div className="hidden xl:flex w-1/12"></div>

        <div className="w-full lg:w-5/12 xl:w-4/12">
          <div className="flex relative h-[48px]">
            <input
              className="border border-gray-100 shadow-sm bg-[#F5F5F5] transition px-2 pr-1 rounded-md focus:outline-none w-full text-sm font-light"
              type="search"
              name="search"
            />
            <button
              type="submit"
              className="bg-[#016450] p-4 h-full rounded-r-lg"
            >
              <svg
                className="text-white h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                // style="enable-background:new 0 0 56.966 56.966;"
                width="512px"
                height="512px"
              >
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
              </svg>
            </button>
            <div className="absolute top-2 left-2  flex">
              <p className="text-[#1A1A1A] text-[16px] leading-[25.6px] flex items-center bg-[#E8E8E8] rounded-[6px] px-2">
                <span>Granger, IA</span>
                <span className="mt-2 ml-2">
                  <ion-icon
                    name="close-circle"
                    style={{
                      fontSize: 20,
                      color: "#767676",
                    }}
                  ></ion-icon>
                </span>
              </p>

              <p className="text-[#767676] text-[16px] leading-[25.6px] flex items-center font-light ml-4">
                Add More
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-6/12 xl:w-5/12 flex justify-between items-center text-[#1a1a1a]">
          <div className="hidden lg:flex w-1/2 justify-between">
            <p className="cursor-pointer">Udwell Now</p>
            <p className="cursor-pointer">Sell a property</p>
          </div>

          <div className="flex justify-end w-full lg:w-3/12 xl:w-1/3 mt-1 cursor-pointer">
            <ion-icon
              name="menu-outline"
              size="large"
              style={{
                color: "#1A1A1A",
              }}
            ></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
