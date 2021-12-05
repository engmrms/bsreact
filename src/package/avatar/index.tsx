/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-props-no-spreading */
import "./styles.scss";

import React, { HtmlHTMLAttributes } from "react";

interface types extends HtmlHTMLAttributes<HTMLImageElement | HTMLSpanElement> {
  className: string;
  size?: "xxl" | "xl" | "lr" | "md" | "sm" | "xs" | "xxs";
  children?: React.ReactNode;
}

const Avatar = ({ children, size, className, ...rest }: types) =>
  !children ? (
    <img className={`avatar-${size} ${className}`} {...rest} />
  ) : (
    <span className={`avatar-${size} ${className}`} {...rest}>
      {" "}
      {children}
    </span>
  );

export default Avatar;
