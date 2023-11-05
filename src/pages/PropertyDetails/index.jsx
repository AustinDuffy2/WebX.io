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
import SignUpScreenNavbar11 from "components/SignUpScreenNavbar11";

const navlinkdropdownOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const PropertyDetailsPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto gap-[50px] items-start justify-start mx-auto px-2.5 py-10 w-auto sm:w-full md:w-full">
        <SignUpScreenNavbar11 className="bg-white-A700 flex flex-col items-start justify-start max-w-[1420px] mx-auto p-5 md:px-5 w-full" />
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
