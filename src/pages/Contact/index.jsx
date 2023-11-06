import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  Radio,
  RadioGroup,
  Text,
} from "components";
import ContactContact27 from "components/ContactContact27";
import ContactContact4 from "components/ContactContact4";
import ContactHeader46 from "components/ContactHeader46";
import ContactTeam1 from "components/ContactTeam1";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

const ContactPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto gap-[50px] items-start justify-start mx-auto px-2.5 py-10 w-auto sm:w-full md:w-full">
        <NavBar className="bg-white-A700 flex flex-col items-start justify-start max-w-[1420px] mx-auto p-5 md:px-5 w-full" />
        <ContactContact27 className="bg-white-A700 flex flex-col md:gap-10 gap-20 items-start justify-start max-w-[1420px] mx-auto px-16 md:px-5 py-28 w-full" />
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
        <ContactHeader46 className="bg-white-A700 flex flex-col gap-20 h-[369px] md:h-auto items-start justify-start max-w-[1420px] mx-auto px-16 md:px-5 py-28 w-full" />
        <ContactTeam1 className="bg-white-A700 flex flex-col md:gap-10 gap-20 items-center justify-start max-w-[1420px] mx-auto px-2.5 md:px-5 py-28 w-full" />
        <ContactContact4 className="bg-white-A700 flex flex-col gap-12 items-start justify-start max-w-[1420px] mx-auto px-16 md:px-5 py-28 w-full" />
        <Footer className="bg-white-A700 flex gap-20 items-center justify-center px-16 md:px-5 py-28 w-full" />
      </div>
    </>
  );
};

export default ContactPage;
