/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-expressions */
import BSToast from "bootstrap/js/src/toast";
import PropTypes from "prop-types";
import React, { useEffect, useRef } from "react";

export default function Toast({ toast, className, onHidden, children }) {
  const toastRef = useRef();
  const subComponentList = Object.keys(Toast);
  const subComponents = subComponentList.map(key => React.Children.map(children, child => (child.type.displayName === key ? child : null)));
  useEffect(() => {
    const elToast = toastRef.current;
    const bsToast = BSToast.getOrCreateInstance(elToast);
    if (toast) {
      bsToast.show();
      window.scrollTo(0, 0);
    } else bsToast.hide();
    elToast.addEventListener("hidden.bs.toast", onHidden);
  }, [toast]);

  return (
    <div
      className="toast-container position-absolute p-3 top-20 start-50 translate-middle-x"
      id="toastPlacement"
      data-original-class="toast-container position-absolute p-3">
      <div className={`toast ${className}`} role="alert" ref={toastRef}>
        {subComponents.map(component => component)}
      </div>
    </div>
  );
}

const Header = ({ children, className, ...rest }) => (
  <div className={`toast-header ${className}`} {...rest}>
    {children}
  </div>
);
Header.displayName = "Header";
Toast.Header = Header;

const Body = ({ children, className, ...rest }) => <div className={`toast-body ${className}`}>{children}</div>;
Body.displayName = "Body";
Toast.Body = Body;

Toast.propTypes = {
  children: PropTypes.node,
  toast: PropTypes.bool,
  className: PropTypes.string,
  onHidden: PropTypes.func,
  //  options: PropTypes.objectOf(PropTypes.object),
};
Body.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
Header.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
