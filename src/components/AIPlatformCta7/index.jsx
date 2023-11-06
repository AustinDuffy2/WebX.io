import React from "react";

import { Button, Text } from "components";

const AIPlatformCta7 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-center justify-center w-full">
          <div className="flex flex-1 flex-col items-start justify-start w-full">
            <div className="flex flex-col gap-6 items-start justify-start w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-full"
                size="txtRobotoCondensedBold40"
              >
                {props?.headingsix}
              </Text>
              <Text
                className="text-black-900 text-lg w-full"
                size="txtRobotoRegular18"
              >
                {props?.textfive}
              </Text>
            </div>
          </div>
          <div className="flex flex-row gap-4 items-start justify-center w-auto">
            <Button
              className="!text-white-A700 cursor-pointer font-roboto min-w-[103px] outline outline-[1px] outline-white-A700 text-base text-center"
              shape="round"
              color="light_blue_500"
              size="md"
              variant="fill"
            >
              {props?.signuplabel}
            </Button>
            <Button
              className="!text-white-A700 cursor-pointer font-roboto h-11 min-w-[129px] text-base text-center"
              shape="round"
              color="light_blue_500_7f"
              size="sm"
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

AIPlatformCta7.defaultProps = {
  headingsix: "Unlock the Power of AI",
  textfive: "Discover the Future of Real Estate with Our AI Platform",
  signuplabel: "Sign Up",
  learnmorelabel: "Learn More",
};

export default AIPlatformCta7;
