import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  Radio,
  RadioGroup,
  SelectBox,
  Text,
} from "components";
import AIPlatformCta7 from "components/AIPlatformCta7";
import Footer from "components/Footer";
import PropertiesFaq1 from "components/PropertiesFaq1";
import PropertyDetailsColumnheadingTwo from "components/PropertyDetailsColumnheadingTwo";
import PropertyDetailsContact26 from "components/PropertyDetailsContact26";
import PropertyDetailsContact6 from "components/PropertyDetailsContact6";
import PropertyDetailsContent2 from "components/PropertyDetailsContent2";
import PropertyDetailsGallery2 from "components/PropertyDetailsGallery2";
import PropertyDetailsLayout22 from "components/PropertyDetailsLayout22";

const navlinkdropdownOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const PropertyDetailsPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto gap-[50px] items-start justify-start mx-auto px-2.5 py-10 w-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col items-start justify-start max-w-[1420px] mx-auto p-5 md:px-5 w-full">
          <div className="border-b border-black-900 border-solid flex md:flex-col flex-row md:gap-5 items-start justify-center sm:px-5 px-[30px] py-5 w-full">
            <div className="flex flex-1 md:flex-col flex-row gap-8 items-center sm:items-start justify-between sm:justify-start w-full">
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
        <PropertyDetailsGallery2 className="bg-white-A700 flex flex-col md:gap-10 gap-20 items-center justify-start max-w-[1420px] mx-auto px-16 md:px-5 py-28 w-full" />
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
        <PropertyDetailsColumnheadingTwo className="bg-white-A700 flex flex-col gap-20 items-start justify-start max-w-[1420px] mx-auto px-16 md:px-5 py-28 w-full" />
        <PropertyDetailsContent2 className="bg-white-A700 flex flex-col font-robotocondensed gap-20 items-center justify-start max-w-[1420px] mx-auto px-16 md:px-5 py-28 w-full" />
        <AIPlatformCta7 className="bg-white-A700 flex flex-col font-roboto gap-20 items-start justify-start max-w-[1420px] mx-auto px-16 md:px-5 py-28 w-full" />
        <PropertyDetailsLayout22 className="bg-white-A700 flex flex-col font-roboto gap-20 items-start justify-start max-w-[1420px] mx-auto px-16 md:px-5 py-28 w-full" />
        <PropertyDetailsContact26 className="bg-white-A700 flex flex-col font-roboto md:gap-10 gap-20 items-center justify-start max-w-[1420px] mx-auto px-16 md:px-5 py-28 w-full" />
        <PropertiesFaq1 className="bg-white-A700 flex flex-col font-roboto gap-20 items-center justify-start max-w-[1420px] mx-auto px-16 md:px-5 py-28 w-full" />
        <PropertyDetailsContact6 className="bg-white-A700 flex flex-col font-roboto gap-20 items-start justify-start max-w-[1420px] mx-auto px-16 md:px-5 py-28 w-full" />
        <Footer className="bg-white-A700 flex font-roboto gap-20 items-center justify-center px-16 md:px-5 py-28 w-full" />
      </div>
    </>
  );
};

export default PropertyDetailsPage;
