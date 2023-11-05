import React from "react";

import { Button, Img, Line, List, Text } from "components";

const AIPlatformLayout121 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-start justify-center w-full">
          <div className="flex flex-1 flex-col gap-8 items-start justify-start w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-full">
              <Text
                className="text-base text-black-900 w-auto"
                size="txtRobotoSemiBold16"
              >
                {props?.subheadingTwo}
              </Text>
              <Text
                className="leading-[120.00%] max-w-[606px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                size="txtRobotoCondensedBold48"
              >
                {props?.headingThree}
              </Text>
            </div>
            <div className="flex flex-row gap-6 items-center justify-start pt-4 w-auto">
              <Button
                className="!text-white-A700 cursor-pointer font-roboto h-11 min-w-[98px] text-base text-center"
                shape="round"
                color="light_blue_500_7f"
                size="sm"
                variant="fill"
              >
                {props?.searchlabel}
              </Button>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[94px]"
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
                  {props?.discoverlabel}
                </div>
              </Button>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-start justify-start w-full">
            <List
              className="flex flex-col gap-4 items-center w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 md:flex-col flex-row gap-10 items-start justify-start w-full">
                <div className="flex flex-col gap-4 items-center justify-start w-auto">
                  <Img
                    className="h-12 w-12"
                    src="images/img_iconrelume.svg"
                    alt="iconrelume"
                  />
                  <Line className="bg-black-900 h-[100px] w-0.5" />
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="text-black-900 text-xl w-full"
                    size="txtRobotoBold20"
                  >
                    {props?.inputcriterialabel}
                  </Text>
                  <Text
                    className="text-base text-black-900 w-full"
                    size="txtRobotoRegular16"
                  >
                    {props?.text}
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 md:flex-col flex-row gap-10 items-start justify-start w-full">
                <div className="flex flex-col gap-4 items-center justify-start w-auto">
                  <Img
                    className="h-12 w-12"
                    src="images/img_iconrelume.svg"
                    alt="iconrelume"
                  />
                  <Line className="bg-black-900 h-[100px] w-0.5" />
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="text-black-900 text-xl w-full"
                    size="txtRobotoBold20"
                  >
                    {props?.receivesuggestionslabel}
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[518px] md:max-w-full text-base text-black-900"
                    size="txtRobotoRegular16"
                  >
                    {props?.text1}
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 md:flex-col flex-row gap-10 items-start justify-start w-full">
                <div className="flex flex-col gap-4 items-center justify-start w-auto">
                  <Img
                    className="h-12 w-12"
                    src="images/img_iconrelume.svg"
                    alt="iconrelume"
                  />
                  <Line className="bg-black-900 h-[100px] w-0.5" />
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="text-black-900 text-xl w-full"
                    size="txtRobotoBold20"
                  >
                    {props?.exploreoptionslabel}
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[518px] md:max-w-full text-base text-black-900"
                    size="txtRobotoRegular16"
                  >
                    {props?.text2}
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 md:flex-col flex-row gap-10 items-start justify-start w-full">
                <div className="flex flex-col items-center justify-start w-12">
                  <Img
                    className="h-12 w-12"
                    src="images/img_iconrelume.svg"
                    alt="iconrelume"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="text-black-900 text-xl w-full"
                    size="txtRobotoBold20"
                  >
                    {props?.makeinformeddecisionslabel}
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[518px] md:max-w-full text-base text-black-900"
                    size="txtRobotoRegular16"
                  >
                    {props?.text3}
                  </Text>
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

AIPlatformLayout121.defaultProps = {
  subheadingTwo: "Revolutionize",
  headingThree: "Streamline Your Property Search with AI",
  searchlabel: "Search",
  discoverlabel: "Discover",
  inputcriterialabel: "Input Criteria",
  text: (
    <>
      Tell us what you&#39;re looking for and let our AI platform do the rest.
    </>
  ),
  receivesuggestionslabel: "Receive Suggestions",
  text1:
    "Get personalized property suggestions based on your criteria and preferences.",
  exploreoptionslabel: "Explore Options",
  text2:
    "Browse through a wide range of properties that match your requirements.",
  makeinformeddecisionslabel: "Make Informed Decisions",
  text3:
    "Access detailed property information and make confident choices for your next investment.",
};

export default AIPlatformLayout121;
