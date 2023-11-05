import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  Radio,
  Slider,
  Text,
} from "components";
import AIPlatformContact3 from "components/AIPlatformContact3";
import AIPlatformCta7 from "components/AIPlatformCta7";
import AIPlatformLayout121 from "components/AIPlatformLayout121";
import AIPlatformLayout241 from "components/AIPlatformLayout241";
import AIPlatformLayout25 from "components/AIPlatformLayout25";
import AIPlatformLayout27 from "components/AIPlatformLayout27";
import AIPlatformLayout89 from "components/AIPlatformLayout89";
import AIPlatformTestimonial7 from "components/AIPlatformTestimonial7";
import Footer from "components/Footer";
import SignUpScreenNavbar11 from "components/SignUpScreenNavbar11";

const AIPlatformPage = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto gap-[50px] items-start justify-start mx-auto px-2.5 py-10 w-auto sm:w-full md:w-full">
        <SignUpScreenNavbar11
          className="bg-white-A700 flex flex-col items-start justify-start max-w-[1420px] mx-auto p-5 md:px-5 w-full"
          linkfour="Link Four"
        />
        <AIPlatformLayout89 className="bg-white-A700 flex flex-col md:gap-10 gap-20 h-[1265px] md:h-auto items-start justify-start max-w-[1420px] mx-auto px-16 md:px-5 py-28 w-full" />
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
        <AIPlatformLayout241 className="bg-white-A700 flex flex-col md:gap-10 gap-20 items-start justify-start max-w-[1420px] mx-auto px-16 md:px-5 py-28 w-full" />
        <AIPlatformLayout121 className="bg-white-A700 flex flex-col gap-20 items-start justify-start max-w-[1420px] mx-auto px-16 md:px-5 py-28 w-full" />
        <AIPlatformLayout25 className="bg-white-A700 flex flex-col gap-20 items-start justify-start max-w-[1420px] mx-auto px-16 md:px-5 py-28 w-full" />
        <div className="h-[600px] max-w-[1420px] mx-auto md:px-5 relative w-full">
          <Slider
            autoPlay
            autoPlayInterval={2000}
            activeIndex={sliderState}
            responsive={{
              0: { items: 1 },
              550: { items: 1 },
              1050: { items: 1 },
            }}
            onSlideChanged={(e) => {
              setsliderState(e?.item);
            }}
            ref={sliderRef}
            className="m-auto w-full"
            items={[...Array(5)].map(() => (
              <React.Fragment key={Math.random()}>
                <AIPlatformTestimonial7 className="bg-white-A700 flex flex-col gap-20 items-center justify-start max-w-[1420px] mx-2.5 md:px-10 px-16 sm:px-5 py-28" />
              </React.Fragment>
            ))}
            renderDotsItem={({ isActive }) => {
              if (isActive) {
                return (
                  <div className="inline-block cursor-pointer rounded-[50%] h-2 bg-black-900 w-2 relative" />
                );
              }
              return (
                <div
                  className="inline-block cursor-pointer rounded-[50%] h-2 bg-blue_gray-400 w-2 relative"
                  role="button"
                  tabIndex={0}
                />
              );
            }}
          />
          <PagerIndicator
            className="absolute bottom-[19%] flex gap-[9px] h-7 inset-x-[0] justify-center mx-auto p-2.5 w-24"
            count={5}
            activeCss="inline-block cursor-pointer rounded-[50%] h-2 bg-black-900 w-2 relative"
            activeIndex={sliderState}
            inactiveCss="inline-block cursor-pointer rounded-[50%] h-2 bg-blue_gray-400 w-2 relative"
            sliderRef={sliderRef}
            selectedWrapperCss="inline-block"
            unselectedWrapperCss="inline-block"
          />
        </div>
        <AIPlatformLayout27 className="bg-white-A700 flex flex-col gap-20 items-start justify-start max-w-[1420px] mx-auto px-16 md:px-5 py-28 w-full" />
        <AIPlatformCta7 className="bg-white-A700 flex flex-col gap-20 items-start justify-start max-w-[1420px] mx-auto px-16 md:px-5 py-28 w-full" />
        <AIPlatformContact3 className="bg-white-A700 flex flex-col gap-12 items-start justify-start max-w-[1420px] mx-auto px-16 md:px-5 py-28 w-full" />
        <Footer className="bg-white-A700 flex gap-20 items-center justify-center px-16 md:px-5 py-28 w-full" />
      </div>
    </>
  );
};

export default AIPlatformPage;
