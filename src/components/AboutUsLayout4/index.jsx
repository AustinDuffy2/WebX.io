import React from "react";

import { Button, Img, Text } from "components";

const AboutUsLayout4 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-center justify-center w-full">
          <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
            <div className="flex flex-col gap-8 items-center justify-start w-full">
              <div className="flex flex-col gap-4 items-center justify-start w-full">
                <Text
                  className="text-base text-black-900 text-center w-auto"
                  size="txtRobotoSemiBold16"
                >
                  {props?.subheadingone}
                </Text>
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <Text
                    className="leading-[120.00%] max-w-[606px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center"
                    size="txtRobotoCondensedBold48"
                  >
                    {props?.headingtwo}
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[606px] md:max-w-full text-black-900 text-center text-lg"
                    size="txtRobotoRegular18"
                  >
                    {props?.description}
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-6 items-start justify-center py-2 w-full">
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="text-black-900 text-xl w-full"
                    size="txtRobotoBold20"
                  >
                    {props?.subheadingoneon}
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[291px] md:max-w-full text-base text-black-900"
                    size="txtRobotoRegular16"
                  >
                    {props?.textone}
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="text-black-900 text-xl w-full"
                    size="txtRobotoBold20"
                  >
                    {props?.subheadingtwo}
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[291px] md:max-w-full text-base text-black-900"
                    size="txtRobotoRegular16"
                  >
                    {props?.texttwo}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-center justify-center pt-4 w-full">
              <Button
                className="!text-white-A700 cursor-pointer font-roboto h-11 min-w-[129px] text-base text-center"
                shape="round"
                color="light_blue_500_7f"
                size="sm"
                variant="fill"
              >
                {props?.learnmore}
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
                  {props?.signup}
                </div>
              </Button>
            </div>
          </div>
          <Img
            className="flex-1 md:flex-none h-[640px] sm:h-auto max-h-[640px] object-cover rounded-[30px] sm:w-[] md:w-[]"
            src="images/img_placeholderimage_640x606.png"
            alt="placeholderimag_One"
          />
        </div>
      </div>
    </>
  );
};

AboutUsLayout4.defaultProps = {
  subheadingone: "Revolutionize",
  headingtwo: "Discover Your Dream Property with Our AI Platform",
  description:
    "Our AI platform utilizes advanced technology to provide users with an effortless way to find the perfect property. With our powerful search capabilities, you can easily explore a wide range of commercial real estate, multi-family, industrial sites, and rental properties around the world.",
  subheadingoneon: "Efficient Search",
  textone:
    "Quickly find the properties that meet your specific criteria and preferences.",
  subheadingtwo: "Smart Recommendations",
  texttwo:
    "Receive personalized property recommendations based on your search history and preferences.",
  learnmore: "Learn More",
};

export default AboutUsLayout4;
