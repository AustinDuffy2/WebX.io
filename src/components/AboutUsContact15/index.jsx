import React from "react";

import { Img, List, Text } from "components";

const AboutUsContact15 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-start justify-start w-full">
          <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
            <Text
              className="text-base text-black-900 text-center w-auto"
              size="txtRobotoSemiBold16"
            >
              {props?.subheading}
            </Text>
            <div className="flex flex-col gap-6 items-start justify-start w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-full"
                size="txtRobotoCondensedBold48"
              >
                {props?.heading}
              </Text>
              <Text
                className="leading-[150.00%] max-w-[606px] md:max-w-full text-black-900 text-lg"
                size="txtRobotoRegular18"
              >
                {props?.text}
              </Text>
            </div>
          </div>
          <List
            className="flex flex-1 flex-col gap-6 items-start py-2 w-full"
            orientation="vertical"
          >
            <div className="flex flex-1 md:flex-col flex-row gap-4 items-start justify-start my-0 w-full">
              <Img
                className="h-6 w-6"
                src="images/img_iconenvelope.svg"
                alt="iconenvelope"
              />
              <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-black-900 text-xl w-full"
                  size="txtRobotoBold20"
                >
                  {props?.heading1}
                </Text>
                <Text
                  className="text-base text-black-900 underline w-full"
                  size="txtRobotoRegular16"
                >
                  {props?.email}
                </Text>
              </div>
            </div>
            <div className="flex flex-1 md:flex-col flex-row gap-4 items-start justify-start my-0 w-full">
              <Img
                className="h-6 w-6"
                src="images/img_iconphone.svg"
                alt="iconphone"
              />
              <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-black-900 text-xl w-full"
                  size="txtRobotoBold20"
                >
                  {props?.heading2}
                </Text>
                <Text
                  className="text-base text-black-900 underline w-full"
                  size="txtRobotoRegular16"
                >
                  {props?.phonenumber}
                </Text>
              </div>
            </div>
            <div className="flex flex-1 md:flex-col flex-row gap-4 items-start justify-start my-0 w-full">
              <Img
                className="h-6 w-6"
                src="images/img_iconmap.svg"
                alt="iconmap"
              />
              <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-black-900 text-xl w-full"
                  size="txtRobotoBold20"
                >
                  {props?.heading3}
                </Text>
                <Text
                  className="text-base text-black-900 w-full"
                  size="txtRobotoRegular16"
                >
                  {props?.address}
                </Text>
              </div>
            </div>
          </List>
        </div>
        <Img
          className="md:h-auto h-full object-cover rounded-[30px] w-full"
          src="images/img_placeholderimage_738x1292.png"
          alt="placeholderimag"
        />
      </div>
    </>
  );
};

AboutUsContact15.defaultProps = {
  subheading: "Tagline",
  heading: "Contact us",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  heading1: "Email",
  email: "hello@relume.io",
  heading2: "Phone",
  phonenumber: "+1 (555) 000-0000",
  heading3: "Office",
  address: "123 Sample St, Sydney NSW 2000 AU",
};

export default AboutUsContact15;
