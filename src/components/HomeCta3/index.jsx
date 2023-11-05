import React from "react";

import { Button, Text } from "components";

const HomeCta3 = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/img_cta3.png')" }}
      >
        <div className="flex flex-col gap-[23.05px] items-start justify-start w-full">
          <div className="flex flex-col gap-[23.05px] items-start justify-start w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-full"
              size="txtRobotoCondensedBold48WhiteA700"
            >
              {props?.headingSix}
            </Text>
            <Text
              className="text-lg text-white-A700 w-full"
              size="txtRobotoRegular18WhiteA700"
            >
              {props?.textFour}
            </Text>
          </div>
          <div className="flex flex-row gap-[15.37px] items-start justify-start pt-[15.37px] w-full">
            <Button
              className="!text-white-A700 cursor-pointer font-roboto min-w-[99px] outline outline-[1px] outline-white-A700 rounded-[9px] text-base text-center"
              shape="round"
              color="light_blue_500"
              size="sm"
              variant="fill"
            >
              {props?.signuplabel}
            </Button>
            <Button
              className="!text-white-A700 cursor-pointer font-roboto min-w-[124px] rounded-[9px] text-base text-center"
              shape="round"
              color="light_blue_500"
              size="md"
              variant="fill"
            >
              {props?.learnmorelabel}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

HomeCta3.defaultProps = {
  headingSix: "Discover Your Dream Properties",
  textFour:
    "Find the perfect commercial real estate, multi-family, industrial sites, and rental properties worldwide.",
  signuplabel: "Sign Up",
  learnmorelabel: "Learn More",
};

export default HomeCta3;
