import React from "react";

const sizeClasses = {
  txtRobotoBold18: "font-bold font-roboto",
  txtRobotoSemiBold20: "font-roboto font-semibold",
  txtRobotoRegular14: "font-normal font-roboto",
  txtRobotoRegular18WhiteA700: "font-normal font-roboto",
  txtRobotoRegular16: "font-normal font-roboto",
  txtRobotoCondensedBold48WhiteA700: "font-bold font-robotocondensed",
  txtRobotoCondensedBold48: "font-bold font-robotocondensed",
  txtRobotoRegular18: "font-normal font-roboto",
  txtRobotoCondensedBold56: "font-bold font-robotocondensed",
  txtRobotoBold24: "font-bold font-roboto",
  txtRobotoSemiBold16: "font-roboto font-semibold",
  txtRobotoCondensedBold40: "font-bold font-robotocondensed",
  txtRobotoSemiBold14: "font-roboto font-semibold",
  txtRobotoBold20: "font-bold font-roboto",
  txtRobotoBold32: "font-bold font-roboto",
  txtRobotoRegular16Gray800: "font-normal font-roboto",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
