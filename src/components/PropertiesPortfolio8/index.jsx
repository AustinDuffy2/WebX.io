import React from "react";

import { Button, Img, List, Text } from "components";

const PropertiesPortfolio8 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-center justify-start w-full">
          <Text
            className="text-base text-black-900 text-center w-auto"
            size="txtRobotoSemiBold16"
          >
            {props?.subheading}
          </Text>
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center w-full"
              size="txtRobotoCondensedBold48"
            >
              {props?.heading}
            </Text>
            <Text
              className="text-black-900 text-center text-lg w-full"
              size="txtRobotoRegular18"
            >
              {props?.language}
            </Text>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-16 items-center justify-start w-full">
          <div className="flex flex-col items-start justify-center w-full">
            <List
              className="sm:flex-col flex-row gap-12 grid md:grid-cols-1 grid-cols-2 justify-center w-full"
              orientation="horizontal"
            >
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <Img
                  className="h-[400px] md:h-auto object-cover rounded-bl-[30px] rounded-br-[30px] w-full"
                  src="images/img_placeholderimage_400x622.png"
                  alt="placeholderimag"
                />
                <div className="flex flex-col items-start justify-start p-6 sm:px-5 w-full">
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-full"
                      size="txtRobotoBold24"
                    >
                      {props?.heading1}
                    </Text>
                    <Text
                      className="leading-[150.00%] max-w-[574px] md:max-w-full text-base text-black-900"
                      size="txtRobotoRegular16"
                    >
                      {props?.text}
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-start justify-start pt-4 w-full">
                    <Button
                      className="!text-black-900 cursor-pointer font-roboto font-semibold min-w-[66px] text-center text-sm"
                      shape="square"
                      color="gray_100"
                      size="xs"
                      variant="fill"
                    >
                      {props?.tagOne}
                    </Button>
                    <Button
                      className="!text-black-900 cursor-pointer font-roboto font-semibold min-w-[66px] text-center text-sm"
                      shape="square"
                      color="gray_100"
                      size="xs"
                      variant="fill"
                    >
                      {props?.tagTwo}
                    </Button>
                    <Button
                      className="!text-black-900 cursor-pointer font-roboto font-semibold min-w-[76px] text-center text-sm"
                      shape="square"
                      color="gray_100"
                      size="xs"
                      variant="fill"
                    >
                      {props?.tagThree}
                    </Button>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-6 w-full">
                    <Button
                      className="cursor-pointer flex items-center justify-center px-5 w-[120px]"
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
                        {props?.button}
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <Img
                  className="h-[400px] md:h-auto object-cover rounded-bl-[30px] rounded-br-[30px] w-full"
                  src="images/img_placeholderimage_400x622.png"
                  alt="placeholderimag"
                />
                <div className="flex flex-col items-start justify-start p-6 sm:px-5 w-full">
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-full"
                      size="txtRobotoBold24"
                    >
                      {props?.heading2}
                    </Text>
                    <Text
                      className="leading-[150.00%] max-w-[574px] md:max-w-full text-base text-black-900"
                      size="txtRobotoRegular16"
                    >
                      {props?.text1}
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-start justify-start pt-4 w-full">
                    <Button
                      className="!text-black-900 cursor-pointer font-roboto font-semibold min-w-[66px] text-center text-sm"
                      shape="square"
                      color="gray_100"
                      size="xs"
                      variant="fill"
                    >
                      {props?.tagone1}
                    </Button>
                    <Button
                      className="!text-black-900 cursor-pointer font-roboto font-semibold min-w-[66px] text-center text-sm"
                      shape="square"
                      color="gray_100"
                      size="xs"
                      variant="fill"
                    >
                      {props?.tagtwo1}
                    </Button>
                    <Button
                      className="!text-black-900 cursor-pointer font-roboto font-semibold min-w-[76px] text-center text-sm"
                      shape="square"
                      color="gray_100"
                      size="xs"
                      variant="fill"
                    >
                      {props?.tagthree1}
                    </Button>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-6 w-full">
                    <Button
                      className="cursor-pointer flex items-center justify-center px-5 w-[120px]"
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
                        {props?.button1}
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </List>
          </div>
          <Button
            className="!text-white-A700 cursor-pointer font-roboto h-12 outline outline-[1px] outline-black-900 text-base text-center w-[104px]"
            shape="round"
            color="light_blue_500_7f"
            size="md"
            variant="fill"
          >
            {props?.buttontext}
          </Button>
        </div>
      </div>
    </>
  );
};

PropertiesPortfolio8.defaultProps = {
  subheading: "Portfolio",
  heading: "Short heading goes here",
  language: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  heading1: "Project name here",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  tagOne: "Tag one",
  tagTwo: "Tag two",
  tagThree: "Tag three",
  heading2: "Project name here",
  text1:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  tagone1: "Tag one",
  tagtwo1: "Tag two",
  tagthree1: "Tag three",
  buttontext: "Button",
};

export default PropertiesPortfolio8;
