import React from "react";

import { Button, Img, Line, List, Text } from "components";
import AIPlatformLayout121 from "components/AIPlatformLayout121";
import AIPlatformLayout27 from "components/AIPlatformLayout27";
import Footer from "components/Footer";
import SearchCta45 from "components/SearchCta45";
import SignUpScreenNavbar11 from "components/SignUpScreenNavbar11";

const SearchPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto gap-[50px] items-start justify-start mx-auto px-2.5 py-10 w-auto sm:w-full md:w-full">
        <SignUpScreenNavbar11
          className="bg-white-A700 flex flex-col items-start justify-start max-w-[1420px] mx-auto p-5 md:px-5 w-full"
          linkfour="Link Four"
        />
        <AIPlatformLayout121 className="bg-white-A700 flex flex-col gap-20 items-start justify-start max-w-[1420px] mx-auto px-16 md:px-5 py-28 w-full" />
        <div className="bg-white-A700 flex flex-col gap-12 items-center justify-start max-w-[1420px] mx-auto px-16 md:px-5 py-28 w-full">
          <Text
            className="text-black-900 text-lg w-full"
            size="txtRobotoBold18"
          >
            Trusted by industry-leading companies worldwide
          </Text>
          <Img
            className="h-14 w-full"
            src="images/img_content.svg"
            alt="content"
          />
        </div>
        <AIPlatformLayout27 className="bg-white-A700 flex flex-col gap-20 items-start justify-start max-w-[1420px] mx-auto px-16 md:px-5 py-28 w-full" />
        <SearchCta45 className="bg-white-A700 flex flex-col gap-20 items-center justify-start max-w-[1420px] mx-auto px-2.5 md:px-5 py-28 w-full" />
        <Footer className="bg-white-A700 flex gap-20 items-center justify-center px-16 md:px-5 py-28 w-full" />
      </div>
    </>
  );
};

export default SearchPage;
