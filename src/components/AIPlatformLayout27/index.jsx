import React from "react";

import { Img, Text } from "components";

const AIPlatformLayout27 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-start justify-center w-full">
          <div className="flex flex-1 flex-col gap-8 items-start justify-start w-full">
            <div className="flex flex-col gap-6 items-start justify-start w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-full"
                size="txtRobotoCondensedBold40"
              >
                {props?.headingfive}
              </Text>
              <Text
                className="leading-[150.00%] max-w-[606px] md:max-w-full text-black-900 text-lg"
                size="txtRobotoRegular18"
              >
                {props?.texttwo}
              </Text>
            </div>
            <div className="flex md:flex-col flex-row gap-6 items-start justify-start py-2 w-full">
              <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-full"
                  size="txtRobotoCondensedBold48"
                >
                  {props?.numbertwo}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[291px] md:max-w-full text-base text-black-900"
                  size="txtRobotoRegular16"
                >
                  {props?.textthree}
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-full"
                  size="txtRobotoCondensedBold48"
                >
                  {props?.numberthree}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[291px] md:max-w-full text-base text-black-900"
                  size="txtRobotoRegular16"
                >
                  {props?.textfour}
                </Text>
              </div>
            </div>
          </div>
          <Img
            className="flex-1 md:flex-none h-[640px] sm:h-auto max-h-[640px] object-cover rounded-[30px] sm:w-[] md:w-[]"
            src="images/img_placeholderimage_640x606.png"
            alt="placeholderimag_Two"
          />
        </div>
      </div>
    </>
  );
};

AIPlatformLayout27.defaultProps = {
  headingfive: "Discover the Power of Our Platform",
  texttwo:
    "With our highly trained AI platform, we have successfully found countless properties and satisfied users worldwide.",
  numbertwo: "50%",
  textthree: "Increase in Property Discoveries and User Satisfaction",
  numberthree: "50%",
  textfour: "Growth in Property Listings and User Engagement",
};

export default AIPlatformLayout27;
