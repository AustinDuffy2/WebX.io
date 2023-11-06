import React from "react";

import { Button, Img, Text } from "components";

const AIPlatformLayout25 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-start justify-center w-full">
          <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
            <div className="flex flex-col gap-8 items-start justify-start w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="text-base text-black-900 text-center w-auto"
                  size="txtRobotoSemiBold16"
                >
                  {props?.subheadingthree}
                </Text>
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <Text
                    className="leading-[120.00%] max-w-[606px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                    size="txtRobotoCondensedBold48"
                  >
                    {props?.headingfour}
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[606px] md:max-w-full text-black-900 text-lg"
                    size="txtRobotoRegular18"
                  >
                    {props?.descriptionTwo}
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-6 items-start justify-start py-2 w-full">
                <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-full"
                    size="txtRobotoCondensedBold48"
                  >
                    {props?.number}
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[291px] md:max-w-full text-base text-black-900"
                    size="txtRobotoRegular16"
                  >
                    {props?.text}
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-full"
                    size="txtRobotoCondensedBold48"
                  >
                    {props?.numberone}
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[291px] md:max-w-full text-base text-black-900"
                    size="txtRobotoRegular16"
                  >
                    {props?.textone}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-center justify-start pt-4 w-auto">
              <Button
                className="!text-white-A700 cursor-pointer font-roboto h-11 min-w-[129px] text-base text-center"
                shape="round"
                color="light_blue_500_7f"
                size="sm"
                variant="fill"
              >
                {props?.learnMoreTwo}
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
                  {props?.signUpTwo}
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

AIPlatformLayout25.defaultProps = {
  subheadingthree: "Revolutionize",
  headingfour: "AI Platform: Transforming Real Estate Search",
  descriptionTwo:
    "Our AI platform revolutionizes the real estate search process by analyzing millions of data points. Find the perfect property with ease.",
  number: "50%",
  text: "AI-powered technology for accurate property recommendations.",
  numberone: "50%",
  textone: "Efficiently search and compare properties worldwide.",
  learnMoreTwo: "Learn More",
};

export default AIPlatformLayout25;
