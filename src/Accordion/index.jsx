/* eslint-disable react/display-name */
/* eslint-disable no-magic-numbers */
/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable react/prop-types */

import React, { useEffect, useState } from 'react';

const Accordion = ({ children, className }) => {
  const [activePane, setActivePane] = useState();
  const [height, setHeight] = useState(0);

  const activatePane = index => {
    setHeight(document.querySelectorAll('.accordion-collapse')[index].scrollHeight);
    setActivePane(prev => (prev === index ? -1 : index));
  };

  useEffect(() => {
    window.setTimeout(() => {
      let defaultActive = children.findIndex(child => child.props.active);
      defaultActive = defaultActive > -1 ? defaultActive : 0;
      setActivePane(defaultActive);
      setHeight(document.querySelectorAll('.accordion-collapse')[defaultActive].scrollHeight);
    }, 333);
  }, []);

  return (
    <div className={`accordion ${className}`} role="tablist">
      {children.map((child, index) => React.cloneElement(child, { activePane, index, height, key: index, activateTab: () => activatePane(index) }))}
    </div>
  );
};

Accordion.Pane = ({ heading, index, activePane, height, activateTab, children }) => {
  const isActive = activePane === index;
  const innerStyle = {
    height: `${isActive ? height : 0}px`,
  };
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button className={`accordion-button ${!isActive ? 'collapsed' : ''}`} type="button" aria-expanded={isActive} onClick={activateTab}>
          {heading}
        </button>
      </h2>
      <div className="accordion-collapse collapsing" style={innerStyle}>
        <div className="accordion-body">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
