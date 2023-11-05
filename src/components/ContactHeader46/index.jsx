import React from "react";

import { Text } from "components";

const ContactHeader46 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-6 h-full items-start justify-start w-full">
          <Text
            className="md:text-5xl sm:text-[42px] text-[56px] text-black-900 w-full"
            size="txtRobotoCondensedBold56"
          >
            {props?.contactustext}
          </Text>
          <Text
            className="text-black-900 text-lg w-full"
            size="txtRobotoRegular18"
          >
            {props?.questionstext}
          </Text>
        </div>
      </div>
    </>
  );
};

ContactHeader46.defaultProps = {
  contactustext: "Contact Us Today",
  questionstext:
    "Have any questions or need assistance? Reach out to our team.",
};

export default ContactHeader46;
