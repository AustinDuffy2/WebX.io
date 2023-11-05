import React from "react";

import { Button, Img, List, Text } from "components";

const HomeLayout228 = (props) => {
  return (
    <>
      <div className={props.className}>
        <List
          className="sm:flex-col flex-row gap-[46.1px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
          orientation="horizontal"
        >
          <div className="flex flex-1 flex-col gap-[23.05px] items-center justify-start w-full">
            <div className="flex flex-col gap-[23.05px] items-center justify-start w-full">
              <Img
                className="h-[46px] w-[46px]"
                src="images/img_iconrelume.svg"
                alt="iconrelume"
              />
              <div className="flex flex-col gap-[23.05px] items-center justify-start w-full">
                <Text
                  className="leading-[130.00%] max-w-[401px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
                  size="txtRobotoBold32"
                >
                  {props?.sectionheading}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[401px] md:max-w-full text-base text-black-900 text-center"
                  size="txtRobotoRegular16"
                >
                  {props?.sectiondescription}
                </Text>
              </div>
            </div>
            <div className="flex flex-row gap-[23.05px] items-center justify-start pt-[15.37px] w-auto">
              <Button
                className="!text-white-A700 cursor-pointer font-roboto h-[42px] min-w-[92px] outline outline-[1px] outline-black-900 rounded-[9px] text-base text-center"
                shape="round"
                color="light_blue_500_7f"
                size="sm"
                variant="fill"
              >
                {props?.actionbuttonone}
              </Button>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[76px] rounded-[9px]"
                rightIcon={
                  <Img
                    className="h-[23px] ml-[7px]"
                    src="images/img_folder.svg"
                    alt="folder"
                  />
                }
                shape="round"
                color="white_A700"
                variant="fill"
              >
                <div className="!text-black-900 font-roboto text-base text-left">
                  {props?.actionbuttontwo}
                </div>
              </Button>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-[23.05px] items-center justify-start w-full">
            <div className="flex flex-col gap-[23.05px] items-center justify-start w-full">
              <Img
                className="h-[46px] w-[46px]"
                src="images/img_iconrelume.svg"
                alt="iconrelume"
              />
              <div className="flex flex-col gap-[23.05px] items-center justify-start w-full">
                <Text
                  className="leading-[130.00%] max-w-[401px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
                  size="txtRobotoBold32"
                >
                  {props?.sectionheading1}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[401px] md:max-w-full text-base text-black-900 text-center"
                  size="txtRobotoRegular16"
                >
                  {props?.sectiondescription1}
                </Text>
              </div>
            </div>
            <div className="flex flex-row gap-[23.05px] items-center justify-start pt-[15.37px] w-auto">
              <Button
                className="!text-white-A700 cursor-pointer font-roboto h-[42px] min-w-[92px] outline outline-[1px] outline-black-900 rounded-[9px] text-base text-center"
                shape="round"
                color="light_blue_500_7f"
                size="sm"
                variant="fill"
              >
                {props?.actionbuttonone1}
              </Button>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[76px] rounded-[9px]"
                rightIcon={
                  <Img
                    className="h-[23px] ml-[7px]"
                    src="images/img_folder.svg"
                    alt="folder"
                  />
                }
                shape="round"
                color="white_A700"
                variant="fill"
              >
                <div className="!text-black-900 font-roboto text-base text-left">
                  {props?.actionbuttontwo1}
                </div>
              </Button>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-[23.05px] items-center justify-start w-full">
            <div className="flex flex-col gap-[23.05px] items-center justify-start w-full">
              <Img
                className="h-[46px] w-[46px]"
                src="images/img_iconrelume.svg"
                alt="iconrelume"
              />
              <div className="flex flex-col gap-[23.05px] items-center justify-start w-full">
                <Text
                  className="leading-[130.00%] max-w-[401px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
                  size="txtRobotoBold32"
                >
                  {props?.sectionheading2}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[401px] md:max-w-full text-base text-black-900 text-center"
                  size="txtRobotoRegular16"
                >
                  {props?.sectiondescription2}
                </Text>
              </div>
            </div>
            <div className="flex flex-row gap-[23.05px] items-center justify-start pt-[15.37px] w-auto">
              <Button
                className="!text-white-A700 cursor-pointer font-roboto h-[42px] min-w-[92px] outline outline-[1px] outline-black-900 rounded-[9px] text-base text-center"
                shape="round"
                color="light_blue_500_7f"
                size="sm"
                variant="fill"
              >
                {props?.actionbuttonone2}
              </Button>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[76px] rounded-[9px]"
                rightIcon={
                  <Img
                    className="h-[23px] ml-[7px]"
                    src="images/img_folder.svg"
                    alt="folder"
                  />
                }
                shape="round"
                color="white_A700"
                variant="fill"
              >
                <div className="!text-black-900 font-roboto text-base text-left">
                  {props?.actionbuttontwo2}
                </div>
              </Button>
            </div>
          </div>
        </List>
      </div>
    </>
  );
};

HomeLayout228.defaultProps = {
  sectionheading: "Medium length section heading goes here",
  sectiondescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
  actionbuttonone: "Button",
  actionbuttontwo: "Button",
  sectionheading1: "Medium length section heading goes here",
  sectiondescription1:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
  actionbuttonone1: "Button",
  actionbuttontwo1: "Button",
  sectionheading2: "Medium length section heading goes here",
  sectiondescription2:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
  actionbuttonone2: "Button",
  actionbuttontwo2: "Button",
};

export default HomeLayout228;
