import React from "react";

import { Button, Img, Text } from "components";

const HomeLayout1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 gap-[76.83px] items-center justify-start w-full">
          <div className="flex flex-1 flex-col gap-[23.05px] items-start justify-start w-full">
            <div className="flex flex-col gap-[15.37px] items-center justify-start w-full">
              <Text
                className="text-base text-black-900 text-center w-auto"
                size="txtRobotoSemiBold16"
              >
                {props?.subheading}
              </Text>
              <div className="flex flex-col gap-[23.05px] items-center justify-start w-full">
                <Text
                  className="leading-[120.00%] max-w-[610px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center"
                  size="txtRobotoCondensedBold48"
                >
                  {props?.heading}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[610px] md:max-w-full text-black-900 text-center text-lg"
                  size="txtRobotoRegular18"
                >
                  {props?.description}
                </Text>
              </div>
            </div>
            <div className="flex flex-row gap-[23.05px] items-center justify-center pt-[15.37px] w-full">
              <Button
                className="!text-white-A700 cursor-pointer font-roboto h-[42px] min-w-[124px] rounded-[9px] text-base text-center"
                shape="round"
                color="light_blue_500_7f"
                size="sm"
                variant="fill"
              >
                {props?.learnmorebutton}
              </Button>
              <div className="h-[23px] relative w-[83px]">
                <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto rounded-[9px] w-auto">
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtRobotoRegular16"
                  >
                    {props?.button}
                  </Text>
                </div>
                <Img
                  className="absolute h-[23px] inset-y-[0] my-auto right-[0] w-[23px]"
                  src="images/img_folder.svg"
                  alt="folder"
                />
              </div>
            </div>
          </div>
          <Img
            className="flex flex-1 md:flex-none h-[614px] sm:h-auto max-h-[614px] max-w-[614px] object-cover rounded-[28px] sm:w-[] md:w-[]"
            src="images/img_placeholderimage_614x1297.png"
            alt="placeholderimag_Three"
          />
        </div>
      </div>
    </>
  );
};

HomeLayout1.defaultProps = {
  subheading: "Discover",
  heading: "Unleash the Power of AI in Real Estate",
  description:
    "Experience the speed, accuracy, and global reach of our AI platform for real estate data. Find commercial real estate, multi-family properties, industrial sites, and rental properties around the world with ease.",
  learnmorebutton: "Learn More",
  button: "Sign Up",
};

export default HomeLayout1;
