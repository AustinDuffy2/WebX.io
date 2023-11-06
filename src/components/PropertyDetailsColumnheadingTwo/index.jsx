import React from "react";

import { Button, Text } from "components";

const PropertyDetailsColumnheadingTwo = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-start justify-start w-full">
          <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
            <div className="flex flex-col gap-5 items-start justify-start w-full">
              <Text
                className="md:text-5xl sm:text-[42px] text-[56px] text-black-900 w-full"
                size="txtRobotoCondensedBold56"
              >
                {props?.headingtwo}
              </Text>
              <Text
                className="leading-[150.00%] max-w-[606px] md:max-w-full text-black-900 text-lg"
                size="txtRobotoRegular18"
              >
                {props?.textone}
              </Text>
            </div>
            <div className="flex flex-row gap-2 items-start justify-start w-full">
              <Button
                className="!text-black-900 cursor-pointer font-roboto font-semibold min-w-[84px] text-center text-sm"
                shape="square"
                color="gray_100"
                size="xs"
                variant="fill"
              >
                {props?.waterfront}
              </Button>
              <Button
                className="!text-black-900 cursor-pointer font-roboto font-semibold min-w-[59px] text-center text-sm"
                shape="square"
                color="gray_100"
                size="xs"
                variant="fill"
              >
                {props?.luxury}
              </Button>
              <Button
                className="!text-black-900 cursor-pointer font-roboto font-semibold min-w-[75px] text-center text-sm"
                shape="square"
                color="gray_100"
                size="xs"
                variant="fill"
              >
                {props?.exclusive}
              </Button>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-start justify-start w-full">
            <div className="sm:gap-5 gap-8 grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
              <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-black-900 text-xl w-full"
                  size="txtRobotoBold20"
                >
                  {props?.client}
                </Text>
                <Text
                  className="text-base text-black-900 w-full"
                  size="txtRobotoRegular16"
                >
                  {props?.clientname}
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-black-900 text-xl w-full"
                  size="txtRobotoBold20"
                >
                  {props?.date}
                </Text>
                <Text
                  className="text-base text-black-900 w-full"
                  size="txtRobotoRegular16"
                >
                  {props?.datevalue}
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-black-900 text-xl w-full"
                  size="txtRobotoBold20"
                >
                  {props?.role}
                </Text>
                <Text
                  className="text-base text-black-900 w-full"
                  size="txtRobotoRegular16"
                >
                  {props?.rolevalue}
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-black-900 text-xl w-full"
                  size="txtRobotoBold20"
                >
                  {props?.website}
                </Text>
                <Text
                  className="text-base text-black-900 underline w-full"
                  size="txtRobotoRegular16"
                >
                  {props?.websiteurl}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

PropertyDetailsColumnheadingTwo.defaultProps = {
  headingtwo: "Luxury Condo Project",
  textone:
    "Experience modern living at its finest in this luxurious waterfront condominium.",
  waterfront: "Waterfront",
  luxury: "Luxury",
  exclusive: "Exclusive",
  client: "Client",
  clientname: "John Doe",
  date: "Date",
  datevalue: "April 2023",
  role: "Role",
  rolevalue: "Architect",
  website: "Website",
  websiteurl: "www.luxurycondos.com",
};

export default PropertyDetailsColumnheadingTwo;
