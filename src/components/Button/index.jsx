import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  square: "rounded-none",
  round: "rounded-[10px]",
};
const variants = {
  outline: { black_900: "border border-black-900 border-solid" },
  fill: {
    light_blue_500: "bg-light_blue-500",
    light_blue_500_7f: "bg-light_blue-500_7f",
    gray_100: "bg-gray-100",
    white_A700: "bg-white-A700",
  },
};
const sizes = { xs: "p-1.5", sm: "p-2.5", md: "p-3.5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf([
    "black_900",
    "light_blue_500",
    "light_blue_500_7f",
    "gray_100",
    "white_A700",
  ]),
};

export { Button };
