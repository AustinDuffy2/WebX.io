import React from "react";

import { Button, Img, Text } from "components";

const NavBar = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="border-b border-black-900 border-solid flex md:flex-col flex-row md:gap-5 items-start justify-center sm:px-5 px-[30px] py-5 w-full">
          <div className="flex flex-1 md:flex-col flex-row gap-8 items-center sm:items-start justify-between w-full">
            <Img
              className="h-[27px] max-h-[27px] sm:w-[] md:w-[]"
              src="images/img_column.svg"
              alt="column"
            />
            <Text
              className="flex-1 text-base text-black-900 w-auto"
              size="txtRobotoRegular16"
            >
              Link One
            </Text>
            <Text
              className="flex-1 text-base text-black-900 w-auto"
              size="txtRobotoRegular16"
            >
              Link Two
            </Text>
            <Text
              className="flex-1 text-base text-black-900 w-auto"
              size="txtRobotoRegular16"
            >
              Link Three
            </Text>
            <Button
              className="bg-transparent cursor-pointer flex flex-1 items-center justify-center sm:justify-start pr-[35px] w-full"
              rightIcon={
                <Img
                  className="h-6 ml-1"
                  src="images/img_arrowdown.svg"
                  alt="arrow_down"
                />
              }
            >
              <div className="font-roboto sm:justify-start sm:pr-5 text-base text-black-900 text-left">
                Link Four
              </div>
            </Button>
          </div>
          <div className="flex flex-row gap-4 items-center justify-center w-auto">
            <Button className="bg-light_blue-500_7f cursor-pointer font-roboto min-w-[89px] py-2.5 rounded-[10px] text-base text-center text-white-A700">
              Sign In
            </Button>
            <Button className="bg-light_blue-500 cursor-pointer font-roboto min-w-[150px] outline outline-[1px] outline-white-A700 py-2.5 rounded-[10px] text-base text-center text-white-A700">
              Create Account
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

NavBar.defaultProps = {};

export default NavBar;
