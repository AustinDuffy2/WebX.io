import React from "react";

import { Img, Line, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col md:gap-10 gap-20 items-center justify-center w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-16 items-start justify-start w-full">
            <div className="flex flex-1 flex-col gap-8 items-start justify-start w-full">
              <Img
                className="h-[27px] w-[63px]"
                src="images/img_column.svg"
                alt="logo"
              />
              <div className="flex flex-col gap-6 items-start justify-start w-full">
                <div className="flex flex-col gap-1 items-start justify-start w-full">
                  <Text
                    className="text-black-900 text-sm w-full"
                    size="txtRobotoSemiBold14"
                  >
                    Address:
                  </Text>
                  <Text
                    className="text-black-900 text-sm w-full"
                    size="txtRobotoRegular14"
                  >
                    Level 1, 12 Sample St, Sydney NSW 2000
                  </Text>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start w-full">
                  <Text
                    className="text-black-900 text-sm w-full"
                    size="txtRobotoSemiBold14"
                  >
                    Contact:
                  </Text>
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-sm underline w-full"
                      size="txtRobotoRegular14"
                    >
                      1800 123 4567
                    </Text>
                    <Text
                      className="text-black-900 text-sm underline w-full"
                      size="txtRobotoRegular14"
                    >
                      info@relume.io
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-3 items-start justify-start w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconfacebook.svg"
                    alt="iconfacebook"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_camera.svg"
                    alt="camera"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_airplane.svg"
                    alt="airplane"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconlinkedin.svg"
                    alt="iconlinkedin"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconyoutube.svg"
                    alt="iconyoutube"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
              <ul className="flex flex-col gap-3 items-start justify-start w-full common-column-list">
                <li>
                  <Text
                    className="text-base text-black-900"
                    size="txtRobotoSemiBold16"
                  >
                    Link One
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-base text-black-900"
                    size="txtRobotoSemiBold16"
                  >
                    Link Two
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-base text-black-900"
                    size="txtRobotoSemiBold16"
                  >
                    Link Three
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-base text-black-900"
                    size="txtRobotoSemiBold16"
                  >
                    Link Four
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-base text-black-900"
                    size="txtRobotoSemiBold16"
                  >
                    Link Five
                  </Text>
                </li>
              </ul>
              <ul className="flex flex-col gap-3 items-start justify-start w-full common-column-list">
                <li>
                  <Text
                    className="text-base text-black-900"
                    size="txtRobotoSemiBold16"
                  >
                    Link Six
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-base text-black-900"
                    size="txtRobotoSemiBold16"
                  >
                    Link Seven
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-base text-black-900"
                    size="txtRobotoSemiBold16"
                  >
                    Link Eight
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-base text-black-900"
                    size="txtRobotoSemiBold16"
                  >
                    Link Nine
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-base text-black-900"
                    size="txtRobotoSemiBold16"
                  >
                    Link Ten
                  </Text>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-8 items-start justify-start w-full">
            <Line className="bg-black-900 h-px w-full" />
            <div className="flex md:flex-col flex-row md:gap-10 gap-16 items-start justify-between w-full">
              <Text
                className="flex-1 text-black-900 text-sm w-auto"
                size="txtRobotoRegular14"
              >
                © 2023 Relume. All rights reserved.
              </Text>
              <div className="flex flex-1 flex-row gap-6 items-start justify-start w-full">
                <Text
                  className="flex-1 text-black-900 text-sm underline w-auto"
                  size="txtRobotoRegular14"
                >
                  Privacy Policy
                </Text>
                <Text
                  className="flex-1 text-black-900 text-sm underline w-auto"
                  size="txtRobotoRegular14"
                >
                  Terms of Service
                </Text>
                <Text
                  className="flex-1 text-black-900 text-sm underline w-auto"
                  size="txtRobotoRegular14"
                >
                  Cookies Settings
                </Text>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
