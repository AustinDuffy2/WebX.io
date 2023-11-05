import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const SignUpScreenNavbar11 = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div className={props.className}>
        <div className="border-b border-black-900 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-center sm:justify-start sm:px-5 px-[30px] py-5 w-full">
          <div className="flex flex-1 md:flex-col flex-row gap-8 items-center sm:items-start justify-between w-full">
            <Img
              className="h-[27px] max-h-[27px] sm:w-[] md:w-[]"
              src="images/img_column.svg"
              alt="column"
            />
            <Text
              className="common-pointer flex flex-1 text-base text-black-900 w-auto"
              size="txtRobotoRegular16"
              onClick={() => navigate("/home1")}
            >
              {props?.linkone}
            </Text>
            <Text
              className="common-pointer flex-1 text-base text-black-900 w-auto"
              size="txtRobotoRegular16"
              onClick={() => navigate("/aboutus")}
            >
              {props?.linktwo}
            </Text>
            <Text
              className="common-pointer flex-1 text-base text-black-900 w-auto"
              size="txtRobotoRegular16"
              onClick={() => navigate("/propertydetails")}
            >
              {props?.linkthree}
            </Text>
            {!!props?.linkfour ? (
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
                  {props?.linkfour}
                </div>
              </Button>
            ) : null}
          </div>
          <div className="flex flex-row gap-4 sm:grid items-center justify-center w-auto">
            <Button
              className="common-pointer !text-white-A700 cursor-pointer font-roboto min-w-[89px] text-base text-center"
              onClick={() => navigate("/loginscreen")}
              shape="round"
              color="light_blue_500_7f"
              size="sm"
              variant="fill"
            >
              {props?.signin}
            </Button>
            <Button
              className="common-pointer !text-white-A700 cursor-pointer font-roboto min-w-[150px] outline outline-[1px] outline-white-A700 text-base text-center"
              onClick={() => navigate("/signupscreen")}
              shape="round"
              color="light_blue_500"
              size="sm"
              variant="fill"
            >
              {props?.createaccount}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

SignUpScreenNavbar11.defaultProps = {
  linkone: "Link One",
  linktwo: "Link Two",
  linkthree: "Link Three",
  signin: "Sign In",
  createaccount: "Create Account",
};

export default SignUpScreenNavbar11;
