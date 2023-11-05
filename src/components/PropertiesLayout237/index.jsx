import React from "react";

import { Button, Img, List, Text } from "components";

const PropertiesLayout237 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-center justify-start w-full">
          <Text
            className="text-base text-black-900 text-center w-auto"
            size="txtRobotoSemiBold16"
          >
            {props?.tagline}
          </Text>
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center w-full"
              size="txtRobotoCondensedBold48"
            >
              {props?.headingtext}
            </Text>
            <Text
              className="leading-[150.00%] max-w-[1292px] md:max-w-full text-black-900 text-center text-lg"
              size="txtRobotoRegular18"
            >
              {props?.descriptiontext}
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-12 items-center justify-start w-full">
          <List
            className="sm:flex-col flex-row gap-12 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
              <Img
                className="h-12 w-12"
                src="images/img_iconrelume.svg"
                alt="iconrelume"
              />
              <div className="flex flex-col gap-6 items-center justify-start w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-full"
                  size="txtRobotoBold32"
                >
                  {props?.locationheadingtext}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[398px] md:max-w-full text-base text-black-900 text-center"
                  size="txtRobotoRegular16"
                >
                  {props?.locationdescriptiontext}
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
              <Img
                className="h-12 w-12"
                src="images/img_iconrelume.svg"
                alt="iconrelume"
              />
              <div className="flex flex-col gap-6 items-center justify-start w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-full"
                  size="txtRobotoBold32"
                >
                  {props?.propertyheadingtext}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[398px] md:max-w-full text-base text-black-900 text-center"
                  size="txtRobotoRegular16"
                >
                  {props?.propertydescriptiontext}
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
              <Img
                className="h-12 w-12"
                src="images/img_iconrelume.svg"
                alt="iconrelume"
              />
              <div className="flex flex-col gap-6 items-center justify-start w-full">
                <Text
                  className="leading-[130.00%] max-w-[398px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
                  size="txtRobotoBold32"
                >
                  {props?.sizeheadingtext}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[398px] md:max-w-full text-base text-black-900 text-center"
                  size="txtRobotoRegular16"
                >
                  {props?.sizedescriptiontext}
                </Text>
              </div>
            </div>
          </List>
          <div className="flex flex-row gap-6 items-center justify-start pt-4 w-auto">
            <Button
              className="!text-white-A700 cursor-pointer font-roboto h-11 min-w-[98px] text-base text-center"
              shape="round"
              color="light_blue_500_7f"
              size="md"
              variant="fill"
            >
              {props?.searchbuttontext}
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
                {props?.signupbuttontext}
              </div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

PropertiesLayout237.defaultProps = {
  tagline: "Discover",
  headingtext: "Find Your Perfect Property with Advanced Search Filters",
  descriptiontext: (
    <>
      Our platform offers a highly advanced search feature that allows you to
      easily find the perfect property. With filters for location, property
      type, size, and price range, you can quickly narrow down your options and
      find exactly what you&#39;re looking for.
    </>
  ),
  locationheadingtext: "Location-Based Search",
  locationdescriptiontext:
    "Easily search for properties based on your desired location.",
  propertyheadingtext: "Property Type Filter",
  propertydescriptiontext:
    "Filter properties based on their type, such as commercial real estate, multi-family, or industrial sites.",
  sizeheadingtext: "Size and Price Range Filters",
  sizedescriptiontext: (
    <>
      Narrow down your search by specifying the size and price range of the
      properties you&#39;re interested in.
    </>
  ),
  searchbuttontext: "Search",
  signupbuttontext: "Sign Up",
};

export default PropertiesLayout237;
