import React from "react";

import { Button, Text } from "components";

const AboutUsCta27 = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/img_cta3.png')" }}
      >
        <div className="flex flex-col gap-6 items-center justify-start w-full">
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700 w-full"
              size="txtRobotoCondensedBold48WhiteA700"
            >
              {props?.headingFive}
            </Text>
            <Text
              className="text-center text-lg text-white-A700 w-full"
              size="txtRobotoRegular18WhiteA700"
            >
              {props?.textFour}
            </Text>
          </div>
          <div className="flex flex-row gap-4 items-start justify-start pt-4 w-auto">
            <Button
              className="!text-white-A700 cursor-pointer font-roboto min-w-[71px] outline outline-[1px] outline-white-A700 text-base text-center"
              shape="round"
              color="light_blue_500"
              size="md"
              variant="fill"
            >
              {props?.trybutton}
            </Button>
            <Button
              className="!text-white-A700 cursor-pointer font-roboto min-w-[81px] text-base text-center"
              shape="round"
              color="light_blue_500"
              size="md"
              variant="fill"
            >
              {props?.nowbutton}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

AboutUsCta27.defaultProps = {
  headingFive: "Discover the Power of AI",
  textFour:
    "Find commercial real estate, multi-family, industrial sites, and rental properties worldwide.",
  trybutton: "Try",
  nowbutton: "Now",
};

export default AboutUsCta27;
