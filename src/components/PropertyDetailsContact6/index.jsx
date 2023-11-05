import React from "react";

import { Button, Img, Input, Line, Radio, RadioGroup, Text } from "components";

const PropertyDetailsContact6 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-start justify-center w-full">
          <div className="flex flex-1 flex-col gap-8 items-start justify-start w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-full">
              <Text
                className="text-base text-black-900 text-center w-auto"
                size="txtRobotoSemiBold16"
              >
                {props?.subheadingOne}
              </Text>
              <div className="flex flex-col gap-6 items-start justify-start w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-full"
                  size="txtRobotoCondensedBold48"
                >
                  {props?.headingNine}
                </Text>
                <Text
                  className="text-black-900 text-lg w-full"
                  size="txtRobotoRegular18"
                >
                  {props?.textSix}
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start py-2 w-auto">
              <div className="flex flex-row gap-4 items-start justify-start w-auto">
                <Img
                  className="h-6 w-6"
                  src="images/img_iconenvelope.svg"
                  alt="iconenvelope"
                />
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtRobotoRegular16"
                >
                  {props?.email}
                </Text>
              </div>
              <div className="flex flex-row gap-4 items-start justify-start w-auto">
                <Img
                  className="h-6 w-6"
                  src="images/img_iconphone.svg"
                  alt="iconphone"
                />
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtRobotoRegular16"
                >
                  {props?.textSeven}
                </Text>
              </div>
              <div className="flex flex-row gap-4 items-start justify-start w-auto">
                <Img
                  className="h-6 w-6"
                  src="images/img_iconmap.svg"
                  alt="iconmap"
                />
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtRobotoRegular16"
                >
                  {props?.textEight}
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
            <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-full">
              <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-base text-black-900 w-full"
                  size="txtRobotoRegular16"
                >
                  {props?.firstname}
                </Text>
                <Input
                  name="textinput"
                  placeholder="Placeholder"
                  className="!placeholder:text-gray-800 !text-gray-800 font-roboto p-0 text-base text-left w-full"
                  wrapClassName="outline outline-[1px] outline-black-900 w-full"
                  shape="round"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-base text-black-900 w-full"
                  size="txtRobotoRegular16"
                >
                  {props?.lastname}
                </Text>
                <Input
                  name="textinput_One"
                  placeholder="Placeholder"
                  className="!placeholder:text-gray-800 !text-gray-800 font-roboto p-0 text-base text-left w-full"
                  wrapClassName="outline outline-[1px] outline-black-900 w-full"
                  shape="round"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                ></Input>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-full">
              <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-base text-black-900 w-full"
                  size="txtRobotoRegular16"
                >
                  {props?.emailOne}
                </Text>
                <Input
                  name="textinput_Two"
                  placeholder="Placeholder"
                  className="!placeholder:text-gray-800 !text-gray-800 font-roboto p-0 text-base text-left w-full"
                  wrapClassName="outline outline-[1px] outline-black-900 w-full"
                  shape="round"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-base text-black-900 w-full"
                  size="txtRobotoRegular16"
                >
                  {props?.phonenumber}
                </Text>
                <Input
                  name="textinput_Three"
                  placeholder="Placeholder"
                  className="!placeholder:text-gray-800 !text-gray-800 font-roboto p-0 text-base text-left w-full"
                  wrapClassName="outline outline-[1px] outline-black-900 w-full"
                  shape="round"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                ></Input>
              </div>
            </div>
            <div className="flex flex-col gap-2 items-start justify-start w-full">
              <Text
                className="text-base text-black-900 w-full"
                size="txtRobotoRegular16"
              >
                {props?.chooseatopic}
              </Text>
              <Input
                name="select"
                placeholder="Select one..."
                className="!placeholder:text-gray-800 !text-gray-800 font-roboto p-0 text-base text-left w-full"
                wrapClassName="flex outline outline-[1px] outline-black-900 w-full"
                suffix={
                  <Img
                    className="h-6 ml-[35px] my-auto"
                    src="images/img_arrowdown.svg"
                    alt="arrow_down"
                  />
                }
                shape="round"
                color="white_A700"
                size="xs"
                variant="fill"
              ></Input>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start py-4 w-full">
              <Text
                className="text-base text-black-900 w-auto"
                size="txtRobotoRegular16"
              >
                {props?.whichbestdescriOne}
              </Text>
              <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-full">
                <RadioGroup
                  className="flex flex-1 flex-col gap-3.5 items-start justify-start w-full"
                  name="column2"
                >
                  <Radio
                    value="Radio"
                    className="font-roboto sm:pr-5 text-base text-black-900 text-left"
                    inputClassName="bg-white-A700 h-[18px] mr-[5px] outline outline-[1px] outline-black-900 rounded-[9px] w-[18px]"
                    checked={false}
                    name="column2"
                    label="Radio"
                    id="Radio"
                  ></Radio>
                  <Radio
                    value="Radio1"
                    className="font-roboto sm:pr-5 text-base text-black-900 text-left"
                    inputClassName="bg-white-A700 h-[18px] mr-[5px] outline outline-[1px] outline-black-900 rounded-[9px] w-[18px]"
                    checked={false}
                    name="column2"
                    label="Radio1"
                    id="Radio1"
                  ></Radio>
                  <Radio
                    value="Radio2"
                    className="font-roboto sm:pr-5 text-base text-black-900 text-left"
                    inputClassName="bg-white-A700 h-[18px] mr-[5px] outline outline-[1px] outline-black-900 rounded-[9px] w-[18px]"
                    checked={false}
                    name="column2"
                    label="Radio2"
                    id="Radio2"
                  ></Radio>
                </RadioGroup>
                <RadioGroup
                  className="flex flex-1 flex-col gap-3.5 items-start justify-start w-full"
                  name="column3"
                >
                  <Radio
                    value="Radio"
                    className="font-roboto sm:pr-5 text-base text-black-900 text-left"
                    inputClassName="bg-white-A700 h-[18px] mr-[5px] outline outline-[1px] outline-black-900 rounded-[9px] w-[18px]"
                    checked={false}
                    name="column3"
                    label="Radio"
                    id="Radio4"
                  ></Radio>
                  <Radio
                    value="Radio1"
                    className="font-roboto sm:pr-5 text-base text-black-900 text-left"
                    inputClassName="bg-white-A700 h-[18px] mr-[5px] outline outline-[1px] outline-black-900 rounded-[9px] w-[18px]"
                    checked={false}
                    name="column3"
                    label="Radio1"
                    id="Radio12"
                  ></Radio>
                  <Radio
                    value="Radio2"
                    className="font-roboto text-base text-black-900 text-left"
                    inputClassName="bg-white-A700 h-[18px] mr-[5px] outline outline-[1px] outline-black-900 rounded-[9px] w-[18px]"
                    checked={false}
                    name="column3"
                    label="Radio2"
                    id="Radio22"
                  ></Radio>
                </RadioGroup>
              </div>
            </div>
            <div className="flex flex-col gap-2 items-start justify-start w-full">
              <Text
                className="text-base text-black-900 w-full"
                size="txtRobotoRegular16"
              >
                {props?.message}
              </Text>
              <div className="bg-white-A700 flex flex-col md:gap-10 gap-[137px] h-[180px] md:h-auto items-start justify-start outline outline-[1px] outline-black-900 p-3 rounded-[20px] w-full">
                <Text
                  className="text-base text-gray-800 w-auto"
                  size="txtRobotoRegular16Gray800"
                >
                  {props?.typeyourmessageOne}
                </Text>
                <div className="relative w-1.5">
                  <Line className="absolute bg-black-900 bottom-[0] h-px right-[0] rotate-[-135deg] w-0.5" />
                  <Line className="absolute bg-black-900 h-px inset-[0] justify-center m-auto rotate-[-135deg] w-1.5" />
                </div>
              </div>
            </div>
            <Radio
              value="Radio"
              className="font-roboto sm:pr-5 text-base text-black-900 text-left"
              inputClassName="bg-white-A700 h-[18px] mr-[5px] outline outline-[1px] outline-black-900 rounded-[9px] w-[18px]"
              checked={false}
              name="labelSix1"
              label="Radio"
              id="Radio7"
            ></Radio>
            <Button
              className="!text-white-A700 cursor-pointer font-roboto outline outline-[1px] outline-white-A700 text-base text-center w-[99px]"
              shape="round"
              color="light_blue_500"
              size="md"
              variant="fill"
            >
              {props?.buttonOne}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

PropertyDetailsContact6.defaultProps = {
  subheadingOne: "Contact",
  headingNine: "Contact Us",
  textSix: "Please fill out the form below to get in touch with us.",
  email: "hello@relume.io",
  textSeven: "+1 (555) 000-0000",
  textEight: "123 Sample St, Sydney NSW 2000 AU",
  firstname: "First Name",
  lastname: "Last Name",
  emailOne: "Email",
  phonenumber: "Phone Number",
  chooseatopic: "Choose a Topic",
  whichbestdescriOne: "Which Best Describes You?",
  message: "Message",
  typeyourmessageOne: "Type your message...",
  buttonOne: "Button",
};

export default PropertyDetailsContact6;
