import React from "react";

const Footer = () => {
  const socialButtons = [
    {
      active: false,
      name: "facebook",
    },
    {
      active: true,
      name: "instagram",
    },
    {
      active: false,
      name: "twitter",
    },
  ];

  return (
    <div className="mt-5 lg:mt-10">
      <div className="lg:flex justify-between items-center">
        <div className="w-full lg:w-22%">
          <h1 className="text-center lg:text-left mb-5 lg:mg-0 text-[#767676] text-[14px] leading-[25.2px] opacity-[0.8]">
            Counter Delivery, Carters Beach PostCentre, Westport
          </h1>
        </div>

        <div className="w-full lg:w-9/12">
          <div className="flex w-full">
            <div className="w-1/3">
              <h1 className="text-[#1A1A1A] text-[18px] leading-[28.8px]">
                About
              </h1>

              <p className="text-[#767676] leading-[25.2px] text-[14px] my-2">
                Company
              </p>
              <p className="text-[#767676] leading-[25.2px] text-[14px] my-2">
                Team
              </p>
              <p className="text-[#767676] leading-[25.2px] text-[14px] my-2">
                Careers
              </p>
              <p className="text-[#767676] leading-[25.2px] text-[14px] my-2">
                Blog
              </p>
            </div>

            <div className="w-1/3">
              <h1 className="text-[#1A1A1A] text-[18px] leading-[28.8px]">
                Support
              </h1>

              <p className="text-[#767676] leading-[25.2px] text-[14px] my-2">
                Help Center
              </p>
              <p className="text-[#767676] leading-[25.2px] text-[14px] my-2">
                Cancellation Options
              </p>
              <p className="text-[#767676] leading-[25.2px] text-[14px] my-2">
                Neighbourhood Support
              </p>
              <p className="text-[#767676] leading-[25.2px] text-[14px] my-2">
                Trust & Safety
              </p>
            </div>

            <div className="w-1/3">
              <h1 className="text-[#1A1A1A] text-[18px] leading-[28.8px]">
                Address
              </h1>

              <p className="text-[#767676] leading-[25.2px] text-[14px] my-2">
                Counter Delivery, Carters Beach PostCentre, Westport
              </p>

              <div className="hidden lg:flex w-full items-center mt-10">
                {socialButtons.map((socialButton, idx) => {
                  return (
                    <div
                      key={idx}
                      className={`rounded-full ${
                        socialButton?.active ? "bg-[#016450]" : "bg-white"
                      } h-10 w-10 shadow-social flex justify-center items-center mr-5`}
                    >
                      <ion-icon
                        name={`logo-${socialButton?.name}`}
                        style={{
                          fontSize: 17,
                          color: !socialButton?.active ? "#016450" : "#fff",
                          opacity: "0.7",
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex lg:hidden  w-full justify-center items-center mt-5">
        {socialButtons.map((socialButton, idx) => {
          return (
            <div
              key={idx}
              className={`rounded-full ${
                socialButton?.active ? "bg-[#016450]" : "bg-white"
              } h-10 w-10 shadow-social flex justify-center items-center mr-5`}
            >
              <ion-icon
                name={`logo-${socialButton?.name}`}
                style={{
                  fontSize: 17,
                  color: !socialButton?.active ? "#016450" : "#fff",
                  opacity: "0.7",
                }}
              />
            </div>
          );
        })}
      </div>

      <div className="lg:flex justify-center items-center mt-10 text-[#484848] text-[14px] leading-[25.2px]">
        <h1 className="hidden lg:block text-center">
          <span className="px-3">©Udwell, LLC. All rights reserved.</span>
          <span className="px-3 text-[#A3A3A3]">&#8226;</span>
          <span className="px-3">Terms & Conditions</span>
          <span className="px-3 text-[#A3A3A3]">&#8226;</span>
          <span className="px-3">Privacy Policy</span>
        </h1>

        <h1 className="block lg:hidden text-center">
          <span className="px-3">©Udwell, LLC. All rights reserved.</span>
        </h1>

        <h1 className="block lg:hidden text-center">
          <span className="px-3">Terms & Conditions</span>
          <span className="px-3 text-[#A3A3A3]">&#8226;</span>
          <span className="px-3">Privacy Policy</span>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
