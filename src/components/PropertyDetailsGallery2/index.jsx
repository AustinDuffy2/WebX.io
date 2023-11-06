import React from "react";

import { Img, Text } from "components";

const PropertyDetailsGallery2 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-6 items-center justify-start w-full">
          <Text
            className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center w-full"
            size="txtRobotoCondensedBold48"
          >
            {props?.heading}
          </Text>
          <Text
            className="text-black-900 text-center text-lg w-full"
            size="txtRobotoRegular18"
          >
            {props?.text}
          </Text>
        </div>
        <div className="flex sm:flex-col flex-row gap-8 items-start justify-center w-full">
          <Img
            className="flex-1 h-[640px] md:h-auto max-h-[640px] object-cover rounded-[30px] sm:w-[]"
            src="images/img_placeholderimage_640x630.png"
            alt="placeholderimag"
          />
          <Img
            className="flex-1 h-[640px] md:h-auto max-h-[640px] object-cover rounded-[30px] sm:w-[]"
            src="images/img_placeholderimage_640x630.png"
            alt="placeholderimag_One"
          />
        </div>
      </div>
    </>
  );
};

PropertyDetailsGallery2.defaultProps = {
  heading: "Property Gallery",
  text: "Explore stunning images of the property and its surroundings.",
};

export default PropertyDetailsGallery2;
