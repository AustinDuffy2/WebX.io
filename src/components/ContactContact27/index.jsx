import React from "react";

import { Button, Img, List, Text } from "components";

const ContactContact27 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-start justify-start w-full">
          <Text
            className="text-base text-black-900 text-center w-auto"
            size="txtRobotoSemiBold16"
          >
            {props?.subheading}
          </Text>
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-full"
              size="txtRobotoCondensedBold48"
            >
              {props?.heading}
            </Text>
            <Text
              className="text-black-900 text-lg w-full"
              size="txtRobotoRegular18"
            >
              {props?.language}
            </Text>
          </div>
        </div>
        <List
          className="sm:flex-col flex-row md:gap-10 gap-16 grid md:grid-cols-1 grid-cols-2 justify-center w-full"
          orientation="horizontal"
        >
          <div className="flex flex-1 flex-col gap-8 h-[546px] md:h-auto items-center justify-start w-full">
            <Img
              className="md:h-auto h-full object-cover rounded-[30px] w-full"
              src="images/img_placeholderimage_384x614.png"
              alt="placeholderimag"
            />
            <div className="flex flex-col gap-6 items-start justify-start w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-auto"
                  size="txtRobotoBold32"
                >
                  {props?.locationname}
                </Text>
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtRobotoRegular16"
                >
                  {props?.locationaddress}
                </Text>
              </div>
              <Button
                className="cursor-pointer flex items-center justify-center px-[26px] w-[133px]"
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
                <div className="!text-black-900 font-roboto sm:px-5 text-base text-left">
                  {props?.button}
                </div>
              </Button>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-8 h-[546px] md:h-auto items-center justify-start w-full">
            <Img
              className="md:h-auto h-full object-cover rounded-[30px] w-full"
              src="images/img_placeholderimage_384x614.png"
              alt="placeholderimag"
            />
            <div className="flex flex-col gap-6 items-start justify-start w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-auto"
                  size="txtRobotoBold32"
                >
                  {props?.locationname1}
                </Text>
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtRobotoRegular16"
                >
                  {props?.locationaddress1}
                </Text>
              </div>
              <Button
                className="cursor-pointer flex items-center justify-center px-[26px] w-[133px]"
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
                <div className="!text-black-900 font-roboto sm:px-5 text-base text-left">
                  {props?.button1}
                </div>
              </Button>
            </div>
          </div>
        </List>
      </div>
    </>
  );
};

ContactContact27.defaultProps = {
  subheading: "Tagline",
  heading: "Locations",
  language: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  locationname: "Sydney",
  locationaddress: "123 Sample St, Sydney NSW 2000 AU",
  button: "Button",
  locationname1: "New York",
  locationaddress1: "123 Sample St, New York NY 10000 USA",
  button1: "Button",
};

export default ContactContact27;
