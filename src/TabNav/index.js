/* eslint-disable react/prop-types */
import './tabNav.scss';

import React, { useState } from 'react';

export const TabNav = ({ children }) => {
  const [activePane, setActivePane] = useState(children[0].props.id);
  /* for mobile behaviour */
  const [open, setOpen] = useState(false);

  const clickTab = tabId => {
    setActivePane(tabId);
    setOpen(!open);
  };

  return (
    <div>
      <ul className={`nav nav-pills nav-dropdown mb-5 ${open ? 'open' : ''}`}>
        {children.map(child => (
          <li className="nav-item" key={child.props.id}>
            <a
              href="/"
              className={`nav-link ${activePane === child.props.id ? ' active' : ''}`}
              onClick={e => {
                e.preventDefault();
                clickTab(child.props.id);
              }}>
              {child.props.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="tab-content pt-3">
        {children.map(child => React.cloneElement(child, { activePane: activePane === child.props.id, key: child.props.id }))}
      </div>
    </div>
  );
};

export const Pane = ({ activePane, children, id }) => (
  <div className={`tab-pane${activePane ? ' active' : ''}`} id={id}>
    {children}
  </div>
);
