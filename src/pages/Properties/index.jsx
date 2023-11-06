import React from "react";

import { Button, Img, Line, List, Text } from "components";
import AIPlatformLayout27 from "components/AIPlatformLayout27";
import Footer from "components/Footer";
import NavBar from "components/NavBar";
import PropertiesCta13 from "components/PropertiesCta13";
import PropertiesFaq1 from "components/PropertiesFaq1";
import PropertiesLayout237 from "components/PropertiesLayout237";
import PropertiesPortfolio8 from "components/PropertiesPortfolio8";

const PropertiesPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto gap-[50px] items-start justify-start mx-auto px-2.5 py-10 w-auto sm:w-full md:w-full">
        <NavBar className="bg-white-A700 flex flex-col items-start justify-start max-w-[1420px] mx-auto p-5 md:px-5 w-full" />
        <PropertiesPortfolio8 className="bg-white-A700 flex flex-col md:gap-10 gap-20 items-center justify-start max-w-[1420px] mx-auto px-16 md:px-5 py-28 w-full" />
        <div className="bg-white-A700 flex flex-col gap-12 items-center justify-start max-w-[1420px] mx-auto px-16 md:px-5 py-28 w-full">
          <Text
            className="text-black-900 text-lg w-full"
            size="txtRobotoBold18"
          >
            Trusted by top real estate companies worldwide
          </Text>
          <Img
            className="h-14 w-full"
            src="images/img_content.svg"
            alt="content"
          />
        </div>
        <AIPlatformLayout27 className="bg-white-A700 flex flex-col gap-20 items-start justify-start max-w-[1420px] mx-auto px-16 md:px-5 py-28 w-full" />
        <PropertiesCta13 className="bg-white-A700 flex flex-col font-robotocondensed gap-20 items-start justify-start max-w-[1420px] mx-auto px-16 md:px-5 py-28 w-full" />
        <PropertiesLayout237 className="bg-white-A700 flex flex-col font-roboto md:gap-10 gap-20 items-center justify-start max-w-[1420px] mx-auto px-16 md:px-5 py-28 w-full" />
        <AIPlatformLayout27 className="bg-white-A700 flex flex-col gap-20 items-start justify-start max-w-[1420px] mx-auto px-16 md:px-5 py-28 w-full" />
        <PropertiesFaq1 className="bg-white-A700 flex flex-col font-roboto gap-20 items-center justify-start max-w-[1420px] mx-auto px-16 md:px-5 py-28 w-full" />
        <Footer className="bg-white-A700 flex font-roboto gap-20 items-center justify-center px-16 md:px-5 py-28 w-full" />
      </div>
    </>
  );
};

export default PropertiesPage;
