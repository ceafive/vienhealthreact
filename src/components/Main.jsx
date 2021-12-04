import React from "react";
import { progressCardItems, sideBarLinks } from "../data";
import DataDisplay from "./DataDisplay";
import Footer from "./Footer";
import NavItems from "./NavItems";
import Profile from "./Profile";

const Main = () => {
  const sideBarItems = React.useMemo(() => sideBarLinks, []);
  const progressItems = React.useMemo(() => progressCardItems, []);

  return (
    <div className="px-5 lg:px-10 xl:px-24 py-10">
      <div className="lg:flex justify-between">
        <div className="shadow-card px-5 py-5 bg-white rounded-[6px] w-full lg:w-22%">
          <div>
            <Profile />
            <NavItems sideBarItems={sideBarItems} />
          </div>
        </div>

        <div className="shadow-card px-2 lg:px-7 py-5 bg-white w-full lg:w-9/12 rounded-[6px]">
          <div className="w-full">
            <DataDisplay progressItems={progressItems} />
          </div>
        </div>
      </div>

      <div className="" id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Main;
