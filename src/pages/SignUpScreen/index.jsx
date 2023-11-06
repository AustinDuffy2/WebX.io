import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Footer1 from "components/Footer1";
import NavBar from "components/NavBar";
import SignUpScreenLogin from "components/SignUpScreenLogin";

const SignUpScreenPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto gap-[50px] items-start justify-start mx-auto px-2.5 py-10 w-auto sm:w-full md:w-full">
        <NavBar className="bg-white-A700 flex flex-col items-start justify-start max-w-[1420px] mx-auto p-5 md:px-5 w-full" />
        <SignUpScreenLogin className="bg-white-A700 flex flex-col h-[890px] md:h-auto items-center justify-start max-w-[1420px] mx-auto px-16 md:px-5 w-full" />
        <div className="bg-white-A700 flex flex-col gap-12 items-center justify-start max-w-[1420px] mx-auto px-16 md:px-5 py-28 w-full">
          <Text
            className="text-black-900 text-lg w-full"
            size="txtRobotoBold18"
          >
            Trusted by top real estate companies worldwide
          </Text>
          <Img
            className="h-14 w-full"
            src="images/img_content.svg"
            alt="content"
          />
        </div>
        <Footer1 className="bg-white-A700 flex gap-[76.83px] items-center justify-center md:px-5 px-[61.47px] py-28 w-full" />
      </div>
    </>
  );
};

export default SignUpScreenPage;
