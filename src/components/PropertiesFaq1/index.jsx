import React from "react";

import { Button, Text } from "components";

const PropertiesFaq1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col md:gap-10 gap-20 items-center justify-start w-full">
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center w-full"
              size="txtRobotoCondensedBold48"
            >
              {props?.headingtext}
            </Text>
            <Text
              className="text-black-900 text-center text-lg w-full"
              size="txtRobotoRegular18"
            >
              {props?.descriptiontext}
            </Text>
          </div>
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <div className="flex flex-col gap-4 items-center justify-start w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-full"
                size="txtRobotoBold32"
              >
                {props?.questionheadingtext}
              </Text>
              <Text
                className="text-black-900 text-center text-lg w-full"
                size="txtRobotoRegular18"
              >
                {props?.questiondescriptiontext}
              </Text>
            </div>
            <Button
              className="!text-white-A700 cursor-pointer font-roboto h-12 text-base text-center w-[104px]"
              shape="round"
              color="light_blue_500_7f"
              size="md"
              variant="fill"
            >
              {props?.buttontext}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

PropertiesFaq1.defaultProps = {
  headingtext: "FAQs",
  descriptiontext:
    "Find answers to commonly asked questions about the property, including financing options, zoning regulations, and maintenance responsibilities.",
  questionheadingtext: "Still have questions?",
  questiondescriptiontext: "Contact us for more information.",
  buttontext: "Button",
};

export default PropertiesFaq1;
