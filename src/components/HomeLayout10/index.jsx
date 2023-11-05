import React from "react";

import { Img, Text } from "components";

const HomeLayout10 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[614px] md:h-auto object-cover rounded-[28px] w-full"
          src="images/img_placeholderimage_614x1297.png"
          alt="placeholderimag_One"
        />
        <div className="flex flex-col gap-[30.73px] items-center justify-start w-full">
          <div className="flex flex-col gap-[15.37px] items-center justify-start w-full">
            <Text
              className="text-base text-black-900 text-center w-auto"
              size="txtRobotoSemiBold16"
            >
              {props?.subheading}
            </Text>
            <div className="flex flex-col gap-[23.05px] items-start justify-start w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center w-full"
                size="txtRobotoCondensedBold48"
              >
                {props?.heading}
              </Text>
              <Text
                className="leading-[150.00%] max-w-[1297px] md:max-w-full text-black-900 text-center text-lg"
                size="txtRobotoRegular18"
              >
                {props?.description}
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-[23.05px] items-start justify-center py-[7.68px] w-full">
            <div className="flex flex-1 flex-col gap-[15.37px] items-start justify-start w-full">
              <Img
                className="h-[46px] w-[46px]"
                src="images/img_iconrelume.svg"
                alt="iconrelume"
              />
              <Text
                className="text-black-900 text-center text-xl w-full"
                size="txtRobotoBold20"
              >
                {props?.subheadingone}
              </Text>
              <Text
                className="text-base text-black-900 text-center w-full"
                size="txtRobotoRegular16"
              >
                {props?.textone}
              </Text>
            </div>
            <div className="flex flex-1 flex-col gap-[15.37px] items-start justify-start w-full">
              <Img
                className="h-[46px] w-[46px]"
                src="images/img_iconrelume.svg"
                alt="iconrelume_One"
              />
              <Text
                className="text-black-900 text-center text-xl w-full"
                size="txtRobotoBold20"
              >
                {props?.subheadingtwo}
              </Text>
              <Text
                className="text-base text-black-900 text-center w-full"
                size="txtRobotoRegular16"
              >
                {props?.texttwo}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HomeLayout10.defaultProps = {
  subheading: "Simplify",
  heading: "Find Your Dream Property with Ease",
  description: (
    <>
      Our highly trained AI platform makes searching for properties a breeze.
      Whether you&#39;re looking for commercial real estate, multi-family homes,
      industrial sites, or rental properties, we&#39;ve got you covered. With
      our advanced technology, you can easily find the perfect property that
      meets your needs.
    </>
  ),
  subheadingone: "Search Now",
  textone: "Discover a wide range of properties from around the world.",
  subheadingtwo: "Get Started",
  texttwo:
    "Begin your property search and find your perfect investment opportunity.",
};

export default HomeLayout10;
