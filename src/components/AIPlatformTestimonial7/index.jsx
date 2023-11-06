import React from "react";

import { Button, Img, Text } from "components";

const AIPlatformTestimonial7 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex md:flex-col flex-row gap-8 items-center justify-between w-full">
            <Button
              className="flex h-12 items-center justify-center w-12"
              shape="circle"
              color="black_900"
              size="md"
              variant="outline"
            >
              <Img
                className="h-4"
                src="images/img_arrowleft.svg"
                alt="arrowleft"
              />
            </Button>
            <div className="flex flex-1 flex-col gap-8 items-center justify-start w-full">
              <Img
                className="h-12 w-[120px]"
                src="images/img_webflowblack.svg"
                alt="webflowblack"
              />
              <Text
                className="leading-[140.00%] max-w-[1196px] md:max-w-full text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                size="txtRobotoBold24"
              >
                {props?.quote}
              </Text>
              <div className="flex flex-col gap-4 items-center justify-start w-[300px]">
                <Img
                  className="h-14 md:h-auto rounded-[50%] w-14"
                  src="images/img_avatarimage.png"
                  alt="avatarimage"
                />
                <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                  <Text
                    className="text-base text-black-900 text-center w-full"
                    size="txtRobotoSemiBold16"
                  >
                    {props?.username}
                  </Text>
                  <Text
                    className="text-base text-black-900 text-center w-full"
                    size="txtRobotoRegular16"
                  >
                    {props?.userposition}
                  </Text>
                </div>
              </div>
            </div>
            <Button
              className="flex h-12 items-center justify-center w-12"
              shape="circle"
              color="black_900"
              size="md"
              variant="outline"
            >
              <Img
                className="h-4"
                src="images/img_arrowleft.svg"
                alt="arrowright"
              />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

AIPlatformTestimonial7.defaultProps = {
  quote:
    "Our AI platform has revolutionized the way we search for properties. It has made the process faster, more efficient, and highly accurate.",
  username: "John Doe",
  userposition: "CEO, ABC Company",
};

export default AIPlatformTestimonial7;
