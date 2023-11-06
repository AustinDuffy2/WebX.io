import React from "react";

import { Button, Img, Text } from "components";

const AIPlatformLayout89 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-start justify-center w-full">
          <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
            <Text
              className="text-base text-black-900 w-full"
              size="txtRobotoSemiBold16"
            >
              {props?.subheading}
            </Text>
            <Text
              className="leading-[120.00%] max-w-[606px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-black-900"
              size="txtRobotoCondensedBold48"
            >
              {props?.heading}
            </Text>
          </div>
          <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
            <Text
              className="leading-[150.00%] max-w-[606px] md:max-w-full text-black-900 text-lg"
              size="txtRobotoRegular18"
            >
              {props?.description}
            </Text>
            <div className="flex flex-row gap-6 items-center justify-start pt-4 w-auto">
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
        </div>
        <Img
          className="md:h-auto h-full object-cover rounded-[30px] w-full"
          src="images/img_placeholderimage.png"
          alt="placeholderimag"
        />
      </div>
    </>
  );
};

AIPlatformLayout89.defaultProps = {
  subheading: "Revolutionizing",
  heading: "Unleashing the Power of AI in Real Estate",
  description:
    "Our AI platform is at the forefront of technological innovation, transforming the way we search for commercial real estate, multi-family properties, industrial sites, and rental properties around the world. With our highly trained AI platform, you can easily access comprehensive real estate data and find the perfect properties that meet your needs.",
  learnmore: "Learn More",
};

export default AIPlatformLayout89;
