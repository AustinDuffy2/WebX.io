import React from "react";

import { Button, Img, Text } from "components";

const AboutUsTeam8 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-start justify-start w-full">
          <Text
            className="text-base text-black-900 w-auto"
            size="txtRobotoSemiBold16"
          >
            {props?.subheadingTwo}
          </Text>
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-full"
              size="txtRobotoCondensedBold48"
            >
              {props?.headingThree}
            </Text>
            <Text
              className="text-black-900 text-lg w-full"
              size="txtRobotoRegular18"
            >
              {props?.loremipsumdolorOne}
            </Text>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-24 items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="md:gap-5 gap-[47px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
              <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                <Img
                  className="h-[395px] sm:h-auto object-cover rounded-bl-[30px] rounded-br-[30px] w-full"
                  src="images/img_placeholderimage_395x398.png"
                  alt="placeholderimag"
                />
                <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                    <Text
                      className="text-black-900 text-xl w-full"
                      size="txtRobotoSemiBold20"
                    >
                      {props?.name}
                    </Text>
                    <Text
                      className="text-black-900 text-lg w-full"
                      size="txtRobotoRegular18"
                    >
                      {props?.jobtitle}
                    </Text>
                  </div>
                  <Text
                    className="leading-[150.00%] max-w-[398px] md:max-w-full text-base text-black-900"
                    size="txtRobotoRegular16"
                  >
                    {props?.description}
                  </Text>
                </div>
                <div className="flex flex-row gap-3.5 items-start justify-start w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconlinkedin.svg"
                    alt="iconlinkedin"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_airplane.svg"
                    alt="airplane"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_icondribble.svg"
                    alt="icondribble"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                <Img
                  className="h-[395px] sm:h-auto object-cover rounded-bl-[30px] rounded-br-[30px] w-full"
                  src="images/img_placeholderimage_395x398.png"
                  alt="placeholderimag"
                />
                <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <div className="flex flex-col gap-[7px] items-center justify-start w-full">
                    <Text
                      className="text-black-900 text-xl w-full"
                      size="txtRobotoSemiBold20"
                    >
                      {props?.name1}
                    </Text>
                    <Text
                      className="text-black-900 text-lg w-full"
                      size="txtRobotoRegular18"
                    >
                      {props?.jobtitle1}
                    </Text>
                  </div>
                  <Text
                    className="leading-[150.00%] max-w-[398px] md:max-w-full text-base text-black-900"
                    size="txtRobotoRegular16"
                  >
                    {props?.description1}
                  </Text>
                </div>
                <div className="flex flex-row gap-3.5 items-start justify-start w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconlinkedin.svg"
                    alt="iconlinkedin"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_airplane.svg"
                    alt="airplane"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_icondribble.svg"
                    alt="icondribble"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                <Img
                  className="h-[395px] sm:h-auto object-cover rounded-bl-[30px] rounded-br-[30px] w-full"
                  src="images/img_placeholderimage_395x398.png"
                  alt="placeholderimag"
                />
                <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                    <Text
                      className="text-black-900 text-xl w-full"
                      size="txtRobotoSemiBold20"
                    >
                      {props?.name2}
                    </Text>
                    <Text
                      className="text-black-900 text-lg w-full"
                      size="txtRobotoRegular18"
                    >
                      {props?.jobtitle2}
                    </Text>
                  </div>
                  <Text
                    className="leading-[150.00%] max-w-[398px] md:max-w-full text-base text-black-900"
                    size="txtRobotoRegular16"
                  >
                    {props?.description2}
                  </Text>
                </div>
                <div className="flex flex-row gap-3.5 items-start justify-start w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconlinkedin.svg"
                    alt="iconlinkedin"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_airplane.svg"
                    alt="airplane"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_icondribble.svg"
                    alt="icondribble"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                <Img
                  className="h-[395px] sm:h-auto object-cover rounded-bl-[30px] rounded-br-[30px] w-full"
                  src="images/img_placeholderimage_395x398.png"
                  alt="placeholderimag"
                />
                <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                    <Text
                      className="text-black-900 text-xl w-full"
                      size="txtRobotoSemiBold20"
                    >
                      {props?.name3}
                    </Text>
                    <Text
                      className="text-black-900 text-lg w-full"
                      size="txtRobotoRegular18"
                    >
                      {props?.jobtitle3}
                    </Text>
                  </div>
                  <Text
                    className="leading-[150.00%] max-w-[398px] md:max-w-full text-base text-black-900"
                    size="txtRobotoRegular16"
                  >
                    {props?.description3}
                  </Text>
                </div>
                <div className="flex flex-row gap-3.5 items-start justify-start w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconlinkedin.svg"
                    alt="iconlinkedin"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_airplane.svg"
                    alt="airplane"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_icondribble.svg"
                    alt="icondribble"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                <Img
                  className="h-[395px] sm:h-auto object-cover rounded-bl-[30px] rounded-br-[30px] w-full"
                  src="images/img_placeholderimage_395x398.png"
                  alt="placeholderimag"
                />
                <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <div className="flex flex-col gap-[7px] items-center justify-start w-full">
                    <Text
                      className="text-black-900 text-xl w-full"
                      size="txtRobotoSemiBold20"
                    >
                      {props?.name4}
                    </Text>
                    <Text
                      className="text-black-900 text-lg w-full"
                      size="txtRobotoRegular18"
                    >
                      {props?.jobtitle4}
                    </Text>
                  </div>
                  <Text
                    className="leading-[150.00%] max-w-[398px] md:max-w-full text-base text-black-900"
                    size="txtRobotoRegular16"
                  >
                    {props?.description4}
                  </Text>
                </div>
                <div className="flex flex-row gap-3.5 items-start justify-start w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconlinkedin.svg"
                    alt="iconlinkedin"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_airplane.svg"
                    alt="airplane"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_icondribble.svg"
                    alt="icondribble"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                <Img
                  className="h-[395px] sm:h-auto object-cover rounded-bl-[30px] rounded-br-[30px] w-full"
                  src="images/img_placeholderimage_395x398.png"
                  alt="placeholderimag"
                />
                <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                    <Text
                      className="text-black-900 text-xl w-full"
                      size="txtRobotoSemiBold20"
                    >
                      {props?.name5}
                    </Text>
                    <Text
                      className="text-black-900 text-lg w-full"
                      size="txtRobotoRegular18"
                    >
                      {props?.jobtitle5}
                    </Text>
                  </div>
                  <Text
                    className="leading-[150.00%] max-w-[398px] md:max-w-full text-base text-black-900"
                    size="txtRobotoRegular16"
                  >
                    {props?.description5}
                  </Text>
                </div>
                <div className="flex flex-row gap-3.5 items-start justify-start w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconlinkedin.svg"
                    alt="iconlinkedin"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_airplane.svg"
                    alt="airplane"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_icondribble.svg"
                    alt="icondribble"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <div className="flex flex-col gap-4 items-center justify-start w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-full"
                size="txtRobotoBold32"
              >
                {props?.headingFour}
              </Text>
              <Text
                className="text-black-900 text-lg w-full"
                size="txtRobotoRegular18"
              >
                {props?.textThree}
              </Text>
            </div>
            <Button
              className="!text-white-A700 cursor-pointer font-roboto h-12 text-base text-center w-[155px]"
              shape="round"
              color="light_blue_500_7f"
              size="md"
              variant="fill"
            >
              {props?.button}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

AboutUsTeam8.defaultProps = {
  subheadingTwo: "Revolutionizing",
  headingThree: "Meet Our Team",
  loremipsumdolorOne:
    "Get to know the talented individuals driving our platform",
  name: "John Doe",
  jobtitle: "Founder",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  name1: "Jane Smith",
  jobtitle1: "Developer",
  description1:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  name2: "Michael Johnson",
  jobtitle2: "Advisor",
  description2:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  name3: "Sarah Thompson",
  jobtitle3: "Developer",
  description3:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  name4: "David Wilson",
  jobtitle4: "Designer",
  description4:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  name5: "Emily Davis",
  jobtitle5: "Marketing",
  description5:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  headingFour: "Join Us!",
  textThree: "Exciting opportunities to be part of our team",
  button: "Button",
};

export default AboutUsTeam8;
