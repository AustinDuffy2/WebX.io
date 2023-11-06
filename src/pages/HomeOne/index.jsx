import React from "react";

import { Button, Img, Line, List, SelectBox, Text } from "components";
import Footer1 from "components/Footer1";
import HomeCta3 from "components/HomeCta3";
import HomeHeader26 from "components/HomeHeader26";
import HomeLayout1 from "components/HomeLayout1";
import HomeLayout10 from "components/HomeLayout10";
import HomeLayout219 from "components/HomeLayout219";
import HomeLayout228 from "components/HomeLayout228";
import HomeTestimonial4 from "components/HomeTestimonial4";

const navlinkdropdownOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const HomeOnePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto gap-[50px] items-start justify-start mx-auto px-2.5 py-10 w-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col items-start justify-start max-w-[1420px] mx-auto p-5 md:px-5 w-full">
          <div className="border-b border-black-900 border-solid flex md:flex-col flex-row md:gap-5 items-start justify-center sm:px-5 px-[30px] py-5 w-full">
            <div className="flex flex-1 md:flex-col flex-row gap-8 items-center justify-between w-full">
              <Img
                className="h-[27px] w-[151px]"
                src="images/img_column.svg"
                alt="column"
              />
              <Text
                className="flex-1 text-base text-black-900 w-auto"
                size="txtRobotoRegular16"
              >
                Link One
              </Text>
              <Text
                className="flex-1 text-base text-black-900 w-auto"
                size="txtRobotoRegular16"
              >
                Link Two
              </Text>
              <Text
                className="flex-1 text-base text-black-900 w-auto"
                size="txtRobotoRegular16"
              >
                Link Three
              </Text>
              <SelectBox
                className="flex-1 md:flex-1 sm:pr-5 pr-[35px] text-base text-black-900 text-left w-[22%] md:w-full"
                placeholderClassName="text-black-900"
                indicator={
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="navlinkdropdown"
                options={navlinkdropdownOptionsList}
                isSearchable={false}
                placeholder="Link Four"
              />
            </div>
            <div className="flex flex-row gap-4 items-center justify-center w-auto">
              <Button className="bg-light_blue-500_7f cursor-pointer min-w-[89px] py-2.5 rounded-[10px] text-base text-center text-white-A700">
                Sign In
              </Button>
              <Button className="bg-light_blue-500 cursor-pointer min-w-[150px] outline outline-[1px] outline-white-A700 py-2.5 rounded-[10px] text-base text-center text-white-A700">
                Create Account
              </Button>
            </div>
          </div>
        </div>
        <HomeHeader26
          className="bg-white-A700 flex md:flex-col flex-row md:gap-10 gap-[76.83px] items-start justify-center max-w-[1420px] mx-auto px-16 md:px-5 py-28 w-full"
          mediumlengthtext="Find the perfect property for your needs"
        />
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

export default HomeOnePage;
