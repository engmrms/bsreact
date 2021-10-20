/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/role-supports-aria-props */
import './styles.scss';

import React, { useEffect, useState } from 'react';

function Panel({ label, content, activeTab, index, activateTab }) {
  const [height, setHeight] = useState(0);
  useEffect(() => {
    window.setTimeout(() => {
      const elHeight = document.querySelector('.panel__inner').scrollHeight;
      setHeight(elHeight);
    }, 333);
  }, []);

  const isActive = activeTab === index;
  const innerStyle = {
    height: `${isActive ? height : 0}px`,
  };

  return (
    <div className="panel" role="tabpanel" aria-expanded={isActive}>
      <button className="panel__label" role="tab" type="button" onClick={activateTab}>
        {label}
      </button>
      <div className="panel__inner" style={innerStyle} aria-hidden={!isActive}>
        <p className="panel__content">{content}</p>
      </div>
    </div>
  );
}

function Accordion({ panels }) {
  const [activeTab, setActiveTab] = useState(0);

  const activateTab = index => {
    setActiveTab(prev => (prev.activeTab === index ? -1 : index));
  };
  return (
    <div className="accordion" role="tablist">
      {panels.map((panel, index) => (
        <Panel key={index} activeTab={activeTab} index={index} {...panel} activateTab={() => activateTab(index)} />
      ))}
    </div>
  );
}

export default Accordion;
