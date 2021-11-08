/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
import React from 'react';

export default function BSdropdown({ children }) {
  const subComponentList = Object.keys(BSdropdown);
  const subComponents = subComponentList.map(key => React.Children.map(children, child => (child.type.name === key ? child : null)));

  return <div className="dropdown">{subComponents.map(component => component)}</div>;
}

const Toggle = ({ children, className, ...rest }) => (
  <button
    className={`btn btn-secondary dropdown-toggle ${className}`}
    type="button"
    id="dropdownMenuButton1"
    data-bs-toggle="dropdown"
    aria-expanded="false"
    {...rest}>
    {children}
  </button>
);
BSdropdown.Toggle = Toggle;

const Menu = ({ children, className, ...rest }) => (
  <ul className={`dropdown-menu ${className}`} aria-labelledby="dropdownMenuButton1">
    {children}
  </ul>
);
BSdropdown.Menu = Menu;

const Item = ({ children, href, className, ...rest }) => (
  <li className={`${className && className}`} {...rest}>
    {href && (
      <a className="dropdown-item" href={href}>
        {children}
      </a>
    )}

    {!href && <span className="dropdown-item"> {children}</span>}
  </li>
);
BSdropdown.Item = Item;
