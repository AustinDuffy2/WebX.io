import React from "react";

import { Button, Input, Line, Radio, Text } from "components";

const AIPlatformContact3 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-start justify-start w-full">
          <Text
            className="text-base text-black-900 text-center w-auto"
            size="txtRobotoSemiBold16"
          >
            {props?.subheadingfour}
          </Text>
          <div className="flex flex-col gap-6 items-start justify-start w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-full"
              size="txtRobotoCondensedBold48"
            >
              {props?.headingseven}
            </Text>
            <Text
              className="text-black-900 text-lg w-full"
              size="txtRobotoRegular18"
            >
              {props?.textsix}
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-start justify-start w-full">
          <div className="flex flex-col gap-2 items-start justify-start w-full">
            <Text
              className="text-base text-black-900 w-full"
              size="txtRobotoRegular16"
            >
              {props?.name}
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
          <div className="flex flex-col gap-2 items-start justify-start w-full">
            <Text
              className="text-base text-black-900 w-full"
              size="txtRobotoRegular16"
            >
              {props?.email}
            </Text>
            <Input
              name="textinputone"
              placeholder="Placeholder"
              className="!placeholder:text-gray-800 !text-gray-800 font-roboto p-0 text-base text-left w-full"
              wrapClassName="outline outline-[1px] outline-black-900 w-full"
              shape="round"
              color="white_A700"
              size="sm"
              variant="fill"
            ></Input>
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
            name="label"
            label="Radio"
            id="Radio"
          ></Radio>
          <Button
            className="!text-white-A700 cursor-pointer font-roboto outline outline-[1px] outline-white-A700 text-base text-center w-[99px]"
            shape="round"
            color="light_blue_500"
            size="md"
            variant="fill"
          >
            {props?.submitbutton}
          </Button>
        </div>
      </div>
    </>
  );
};

AIPlatformContact3.defaultProps = {
  subheadingfour: "Innovative",
  headingseven: "Get in Touch",
  textsix: "Have a question or need more information? Contact us!",
  name: "Name",
  email: "Email",
  message: "Message",
  submitbutton: "Button",
};

export default AIPlatformContact3;
