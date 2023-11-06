import React from "react";

import { Button, Img, List, Text } from "components";

const AIPlatformLayout241 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-center justify-start w-full">
          <Text
            className="text-base text-black-900 text-center w-auto"
            size="txtRobotoSemiBold16"
          >
            {props?.subheadingone}
          </Text>
          <div className="flex flex-col gap-6 items-start justify-start w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-full"
              size="txtRobotoCondensedBold48"
            >
              {props?.headingtwo}
            </Text>
            <Text
              className="leading-[150.00%] max-w-[1292px] md:max-w-full text-black-900 text-lg"
              size="txtRobotoRegular18"
            >
              {props?.descriptionone}
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-12 items-center justify-start w-full">
          <List
            className="sm:flex-col flex-row gap-12 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
              <Img
                className="h-12 w-12"
                src="images/img_iconrelume.svg"
                alt="iconrelume"
              />
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-full"
                size="txtRobotoBold32"
              >
                {props?.headingone}
              </Text>
              <Text
                className="leading-[150.00%] max-w-[398px] md:max-w-full text-base text-black-900"
                size="txtRobotoRegular16"
              >
                {props?.descriptiontwo}
              </Text>
            </div>
            <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
              <Img
                className="h-12 w-12"
                src="images/img_iconrelume.svg"
                alt="iconrelume"
              />
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-full"
                size="txtRobotoBold32"
              >
                {props?.headingthree}
              </Text>
              <Text
                className="leading-[150.00%] max-w-[398px] md:max-w-full text-base text-black-900"
                size="txtRobotoRegular16"
              >
                {props?.descriptionthree}
              </Text>
            </div>
            <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
              <Img
                className="h-12 w-12"
                src="images/img_iconrelume.svg"
                alt="iconrelume"
              />
              <Text
                className="leading-[130.00%] max-w-[398px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                size="txtRobotoBold32"
              >
                {props?.headingfour}
              </Text>
              <Text
                className="leading-[150.00%] max-w-[398px] md:max-w-full text-base text-black-900"
                size="txtRobotoRegular16"
              >
                {props?.descriptionfour}
              </Text>
            </div>
          </List>
          <div className="flex flex-row gap-6 items-center justify-center pt-4 w-auto">
            <Button
              className="!text-white-A700 cursor-pointer font-roboto h-11 min-w-[129px] text-base text-center"
              shape="round"
              color="light_blue_500_7f"
              size="sm"
              variant="fill"
            >
              {props?.learnmoreone}
            </Button>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[87px]"
              rightIcon={
                <Img
                  className="h-6 ml-2"
                  src="images/img_folder.svg"
                  alt="folder"
                />
              }
              shape="round"
              color="white_A700"
              variant="fill"
            >
              <div className="!text-black-900 font-roboto text-base text-left">
                {props?.signupone}
              </div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

AIPlatformLayout241.defaultProps = {
  subheadingone: "Discover",
  headingtwo: "Unlock the Power of Our AI Platform",
  descriptionone:
    "Our AI platform offers advanced property search capabilities, market trends analysis, and personalized recommendations to help you find the perfect real estate investment.",
  headingone: "Advanced Property Search",
  descriptiontwo:
    "Effortlessly search for commercial real estate, multi-family properties, industrial sites, and rental properties around the world.",
  headingthree: "Market Trends Analysis",
  descriptionthree:
    "Stay ahead of the curve with our AI-powered market trends analysis, providing valuable insights into real estate market dynamics.",
  headingfour: "Personalized Recommendations",
  descriptionfour:
    "Receive tailored recommendations based on your preferences, ensuring you find the best investment opportunities.",
  learnmoreone: "Learn More",
};

export default AIPlatformLayout241;
