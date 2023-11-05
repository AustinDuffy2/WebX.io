import React from "react";

import { Img, Text } from "components";

const PropertyDetailsContent2 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-start justify-center w-full">
          <Img
            className="flex-1 md:flex-none h-[640px] sm:h-auto max-h-[640px] object-cover rounded-[30px] sm:w-[] md:w-[]"
            src="images/img_placeholderimage_640x606.png"
            alt="placeholderimag_Two"
          />
          <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-full"
              size="txtRobotoCondensedBold48"
            >
              {props?.headingThree}
            </Text>
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-col items-start justify-start pb-4 w-full">
                <Text
                  className="leading-[150.00%] max-w-[606px] md:max-w-full text-base text-black-900"
                  size="txtRobotoRegular16"
                >
                  {props?.description}
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start pb-4 w-full">
                <Text
                  className="leading-[150.00%] max-w-[606px] md:max-w-full text-base text-black-900"
                  size="txtRobotoRegular16"
                >
                  {props?.descriptionone}
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="leading-[150.00%] max-w-[606px] md:max-w-full text-base text-black-900"
                  size="txtRobotoRegular16"
                >
                  {props?.descriptiontwo}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

PropertyDetailsContent2.defaultProps = {
  headingThree: "Property Overview",
  description:
    "Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.",
  descriptionone:
    "Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.",
  descriptiontwo:
    "Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc tortor. Nulla adipiscing erat a erat. Condimentum lorem posuere gravida enim posuere cursus diam.",
};

export default PropertyDetailsContent2;
