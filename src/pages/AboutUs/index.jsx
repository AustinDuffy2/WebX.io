import React from "react";

import { Button, Img, Line, List, Text } from "components";
import AboutUsContact15 from "components/AboutUsContact15";
import AboutUsCta27 from "components/AboutUsCta27";
import AboutUsLayout4 from "components/AboutUsLayout4";
import AboutUsTeam8 from "components/AboutUsTeam8";
import Footer from "components/Footer";
import HomeLayout228 from "components/HomeLayout228";
import NavBar from "components/NavBar";

const AboutUsPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto gap-[50px] items-start justify-start mx-auto px-2.5 py-10 w-auto sm:w-full md:w-full">
        <NavBar className="bg-white-A700 flex flex-col items-start justify-start max-w-[1420px] mx-auto p-5 md:px-5 w-full" />
        <AboutUsContact15 className="bg-white-A700 flex flex-col md:gap-10 gap-20 h-[1286px] md:h-auto items-center justify-start max-w-[1420px] mx-auto px-16 md:px-5 py-28 w-full" />
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
        <AboutUsLayout4 className="bg-white-A700 flex flex-col gap-20 items-start justify-start max-w-[1420px] mx-auto px-16 md:px-5 py-28 w-full" />
        <HomeLayout228 className="bg-white-A700 flex flex-col gap-20 items-center justify-start max-w-[1420px] mx-auto px-16 md:px-5 py-[10.41px] w-full" />
        <AboutUsTeam8 className="bg-white-A700 flex flex-col md:gap-10 gap-20 items-start justify-start max-w-[1420px] mx-auto px-16 md:px-5 py-28 w-full" />
        <AboutUsCta27
          className="bg-cover bg-no-repeat flex flex-col gap-20 h-[421px] items-center justify-start max-w-[1420px] mx-auto px-16 md:px-5 py-28 w-full"
          style={{ backgroundImage: "url('images/img_cta3.png')" }}
        />
        <Footer className="bg-white-A700 flex gap-20 items-center justify-center px-16 md:px-5 py-28 w-full" />
      </div>
    </>
  );
};

export default AboutUsPage;
