/* eslint-disable no-magic-numbers */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-expressions */
import { Toast as BSToast } from "bootstrap";
import React, { HtmlHTMLAttributes, useEffect, useRef } from "react";

interface ToastTypes {
  toast: boolean;
  className: string;
  onHidden?: () => {};
  children: JSX.Element;
  bg:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "dark"
    | "light";

  position:
    | "top-start"
    | "top-center"
    | "top-end"
    | "middle-start"
    | "middle-center"
    | "middle-end"
    | "bottom-start"
    | "bottom-center"
    | "bottom-end";
}

interface DefaultTypes extends HtmlHTMLAttributes<HTMLDivElement> {
  className?: string;
  children: JSX.Element;
}

export default function Toast({
  toast,
  className,
  onHidden,
  children,
  position,
  bg,
}: ToastTypes) {
  const toastRef = useRef<HTMLDivElement>(null);
  const subComponentList = Object.keys(Toast);
  const subComponents = subComponentList.map((key) =>
    React.Children.map(children, (child: JSX.Element) =>
      child.type.displayName === key ? child : null
    )
  );
  useEffect(() => {
    const { current } = toastRef;
    if (current) {
      const bsToast = BSToast.getOrCreateInstance(current);
      if (toast) {
        bsToast.show();
        window.scrollTo(0, 0);
      } else bsToast.hide();
      if (onHidden) current.addEventListener("hidden.bs.toast", onHidden);
    }
  }, [toast]);
  const styles: { [key: string]: string } = {
    top: "top-0",
    middle: "top-50 translate-middle-y",
    center: "start-50 translate-middle-x",
    start: "start-0",
    end: "end-0",
    bottom: "bottom-0",
  };
  const poitionStyles = position
    .split("-")
    .map<string>((t) => styles[t])
    .join(" ");
  return (
    <div
      className={`toast-container position-absolute p-3 ${poitionStyles}`}
      id="toastPlacement"
    >
      <div
        className={`toast ${bg ? `bg-${bg}` : ""}  ${className}`}
        role="alert"
        ref={toastRef}
      >
        {subComponents.map((component) => component)}
      </div>
    </div>
  );
}

const Header = ({ children, className, ...rest }: DefaultTypes) => (
  <div className={`toast-header ${className || ""}`} {...rest}>
    {children}
  </div>
);
Header.displayName = "Header";
Toast.Header = Header;

const Body = ({ children, className, ...rest }: DefaultTypes) => (
  <div className={`toast-body ${className || ""}`} {...rest}>
    {children}
  </div>
);
Body.displayName = "Body";
Toast.Body = Body;
