/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-props-no-spreading */

import './style.scss';

import PropTypes from 'prop-types';
import React from 'react';

function Avatar({ src, children, size, className, ...rest }) {
  return src ? (
    <img src={src} className={`avatar-${size} ${className}`} {...rest} />
  ) : (
    <span className={`avatar-${size} ${className}`} {...rest}>
      {' '}
      {children}
    </span>
  );
}
Avatar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  src: PropTypes.string,
  size: PropTypes.oneOf(['xxl', 'xl', 'lr', 'md', 'sm', 'xs', 'xxs']),
};

export default Avatar;
