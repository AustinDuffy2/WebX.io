import React from "react";

import { Button, Img, Text } from "components";

const HomeHeader26 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[23.05px] h-[708px] md:h-auto items-center justify-center w-full">
          <div className="flex flex-col gap-[23.05px] h-full items-center justify-center w-full">
            <Text
              className="leading-[120.00%] max-w-[607px] md:max-w-full md:text-5xl sm:text-[42px] text-[56px] text-black-900 text-center"
              size="txtRobotoCondensedBold56"
            >
              {props?.mediumlengthtext}
            </Text>
            <Text
              className="leading-[150.00%] max-w-[607px] md:max-w-full text-black-900 text-center text-lg"
              size="txtRobotoRegular18"
            >
              {props?.descriptiontext}
            </Text>
          </div>
          <div className="flex flex-row gap-[15.37px] items-start justify-center pt-[15.37px] w-full">
            <Button
              className="!text-white-A700 cursor-pointer font-roboto min-w-[94px] outline outline-[1px] outline-white-A700 rounded-[9px] text-base text-center"
              shape="round"
              color="light_blue_500"
              size="sm"
              variant="fill"
            >
              {props?.searchtext}
            </Button>
            <Button
              className="!text-white-A700 cursor-pointer font-roboto h-[42px] min-w-[99px] rounded-[9px] text-base text-center"
              shape="round"
              color="light_blue_500_7f"
              size="sm"
              variant="fill"
            >
              {props?.signuptext}
            </Button>
          </div>
        </div>
        <Img
          className="flex-1 md:flex-none h-[708px] sm:h-auto object-cover rounded-[19px] w-full"
          src="images/img_placeholderimage_708x607.png"
          alt="placeholderimag"
        />
      </div>
    </>
  );
};

HomeHeader26.defaultProps = {
  mediumlengthtext: "Find the perfect property for your needs today",
  descriptiontext:
    "Discover a wide range of commercial real estate, multi-family, industrial sites, and rental properties around the world with our AI-powered platform.",
  searchtext: "Search",
  signuptext: "Sign Up",
};

export default HomeHeader26;
