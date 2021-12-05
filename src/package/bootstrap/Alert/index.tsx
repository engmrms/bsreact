/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */

import { Alert as BSAlert } from "bootstrap";
import React, { useRef } from "react";

// import { Icons } from "../../utils/helpers/Icons";

interface AlertTypes {
  icon: string;
  className: string;
  children: JSX.Element;
  onClose: () => {};
  dismissible: Boolean;
  variant: "outlined" | "filled";
  severity:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "dark"
    | "light";
}
interface DefaultTypes {
  children: JSX.Element;
  className: string;
}

export default function Alert({
  severity,
  variant,
  onClose,
  icon,
  dismissible,
  className,
  children,
}: AlertTypes) {
  const refAlert = useRef<HTMLDivElement>(null);
  const handleClose = () => {
    const { current } = refAlert;
    if (current) {
      const alert = BSAlert.getOrCreateInstance(current);
      alert.close();
    }
    onClose();
  };
  return (
    <div
      ref={refAlert}
      className={`alert alert-${severity} d-flex align-items-center
      ${dismissible && "alert-dismissible fade show"}
      ${className || ""}`}
      role="alert"
    >
      {/* {icon && <Icons name={icon} />} */}
      <div>{children}</div>
      {dismissible && (
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={handleClose}
        />
      )}
    </div>
  );
}
Alert.defaultProps = {
  severity: "light",
};

const Heading = ({ children, className, ...rest }: DefaultTypes) => (
  <h4 className={`alert-heading ${className || ""}`} {...rest}>
    {children}
  </h4>
);
Heading.displayName = "Heading";
Alert.Heading = Heading;

// const close = () => {
//   const alert =  Alert.;

//   console.log(alert);
// };
// Alert.close = close;
