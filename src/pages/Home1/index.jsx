import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Footer1 from "components/Footer1";
import HomeCta3 from "components/HomeCta3";
import HomeHeader26 from "components/HomeHeader26";
import HomeLayout1 from "components/HomeLayout1";
import HomeLayout10 from "components/HomeLayout10";
import HomeLayout219 from "components/HomeLayout219";
import HomeLayout228 from "components/HomeLayout228";
import HomeTestimonial4 from "components/HomeTestimonial4";
import SignUpScreenNavbar11 from "components/SignUpScreenNavbar11";

const Home1Page = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto gap-[50px] items-start justify-start mx-auto px-2.5 py-10 w-auto sm:w-full md:w-full">
        <SignUpScreenNavbar11
          className="bg-white-A700 flex flex-col items-start justify-start max-w-[1420px] mx-auto p-5 md:px-5 w-full"
          linkfour="Link Four"
        />
        <HomeHeader26 className="bg-white-A700 flex md:flex-col flex-row md:gap-10 gap-[76.83px] items-start justify-center max-w-[1420px] mx-auto px-16 md:px-5 py-28 w-full" />
        <div className="bg-white-A700 flex flex-col gap-[46.1px] items-center justify-start max-w-[1420px] mx-auto md:px-5 px-[61.47px] py-28 w-full">
          <Text
            className="text-black-900 text-lg w-full"
            size="txtRobotoBold18"
          >
            Trusted by top real estate companies worldwide
          </Text>
          <Img
            className="h-[53px] w-full"
            src="images/img_content.svg"
            alt="content"
          />
        </div>
        <HomeLayout10 className="bg-white-A700 flex flex-col md:gap-10 gap-[76.83px] items-center justify-center max-w-[1420px] mx-auto md:px-5 px-[61.47px] py-28 w-full" />
        <HomeLayout219 className="bg-white-A700 flex flex-col gap-[76.83px] items-center justify-start max-w-[1420px] mx-auto md:px-5 px-[61.47px] py-28 w-full" />
        <HomeLayout228 className="bg-white-A700 flex flex-col gap-[76.83px] items-center justify-start max-w-[1420px] mx-auto md:px-5 px-[61.47px] py-28 w-full" />
        <HomeLayout1 className="bg-white-A700 flex flex-col gap-[76.83px] items-start justify-start max-w-[1420px] mx-auto md:px-5 px-[61.47px] py-28 w-full" />
        <HomeTestimonial4 className="bg-white-A700 flex flex-col gap-[76.83px] items-center justify-start max-w-[1420px] mx-auto md:px-5 px-[61.47px] py-28 w-full" />
        <HomeCta3
          className="bg-cover bg-no-repeat flex flex-col gap-[76.83px] h-[412px] items-start justify-start max-w-[1420px] mx-auto md:px-5 px-[61.47px] py-28 w-full"
          style={{ backgroundImage: "url('images/img_cta3.png')" }}
        />
        <Footer1 className="bg-white-A700 flex gap-[76.83px] items-center justify-center md:px-5 px-[61.47px] py-28 w-full" />
      </div>
    </>
  );
};

export default Home1Page;
