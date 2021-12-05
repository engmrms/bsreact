/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
import { Dropdown } from "bootstrap";
import PropTypes from "prop-types";
import React, { useEffect, useRef } from "react";
// import { NavLink } from "react-router-dom";

export default function BSdropdown({ children, ...rest }) {
  const subComponentList = Object.keys(BSdropdown);
  const subComponents = subComponentList.map(key => React.Children.map(children, child => (child.type.displayName === key ? child : null)));

  return <div {...rest}>{subComponents.map(component => component)}</div>;
}

BSdropdown.propTypes = {
  children: PropTypes.node,
};

const Toggle = ({ link, children, className, ...rest }) =>
  link ? (
    <a className={className || ""} href="/" role="button" data-bs-toggle="dropdown" {...rest}>
      {children}
    </a>
  ) : (
    <button className={className || ""} type="button" data-bs-toggle="dropdown" {...rest}>
      {children}
    </button>
  );

Toggle.displayName = "Toggle";
BSdropdown.Toggle = Toggle;
Toggle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  link: PropTypes.bool,
};

const Menu = ({ children, className, ...rest }) => {
  const drpref = useRef();
  useEffect(() => {
    Dropdown.getOrCreateInstance(drpref.current);
  }, []);
  return (
    <ul ref={drpref} className={`dropdown-menu ${className || ""}`} {...rest}>
      {children}
    </ul>
  );
};

Menu.displayName = "Menu";
BSdropdown.Menu = Menu;
Menu.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const Item = ({ children, href, className, ...rest }) => (
  <li>
    {href && (
      <a className={`${className || ""}`} href={href} {...rest}>
        {children}
      </a>
    )}

    {!href && (
      <span className={`${className || ""}`} {...rest}>
        {children}
      </span>
    )}
  </li>
);

Item.displayName = "Item";
BSdropdown.Item = Item;
Item.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string,
};
