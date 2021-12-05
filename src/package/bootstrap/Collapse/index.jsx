/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-expressions */

import { Collapse } from "bootstrap";
import PropTypes from "prop-types";
import React, { useRef } from "react";

export default function BSCollapse({ show, parent, children, ...rest }) {
  const subComponentList = Object.keys(BSCollapse);
  const subComponents = subComponentList.map(key => React.Children.map(children, child => (child.type.displayName === key ? child : null)));
  let collapse = null;
  let props = {};
  const collapseref = useRef();

  props = {
    onClick: e => {
      e.preventDefault();
      collapse = collapse ?? Collapse.getOrCreateInstance(collapseref?.current, { toggle: show, parent });
      collapse?.toggle();
      parent &&
        document
          .querySelector(parent)
          .querySelectorAll(".collapsed")
          .forEach(element => {
            if (element !== e.target) element.classList.remove("collapsed");
          });
      e.target.className.includes("collapsed") ? e.target.classList.remove("collapsed") : e.target.classList.add("collapsed");
    },
    collapseref,
  };

  return <div {...rest}>{subComponents?.map(component => component[0] && React?.cloneElement(component[0], props))}</div>;
}

BSCollapse.propTypes = {
  children: PropTypes.node,
  show: PropTypes.bool,
  parent: PropTypes.string,
};

const Toggle = ({ link, children, className, ...rest }) =>
  link ? (
    <a className={className} href="/" role="button" {...rest}>
      {children}
    </a>
  ) : (
    <button className={`${className || ""}`} type="button" {...rest}>
      {children}
    </button>
  );

Toggle.displayName = "Toggle";
BSCollapse.Toggle = Toggle;

Toggle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  link: PropTypes.bool,
};

const Body = ({ collapseref, children, className }) => (
  <div ref={collapseref} className={`collapse ${className || ""} `}>
    {children}
  </div>
);

Body.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  collapseref: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};

Body.displayName = "Body";
BSCollapse.Body = Body;
