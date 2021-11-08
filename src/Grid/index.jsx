/* eslint-disable no-unused-expressions */
/* eslint-disable no-nested-ternary */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */
/* eslint-disable no-bitwise */
/* eslint-disable no-magic-numbers */
import PropTypes from 'prop-types';

const spacer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12];
const breakPoint = {
  xs: { 'col-': spacer },
  sm: { 'col-sm-': spacer },
  md: { 'col-md-': spacer },
  lg: { 'col-lg-': spacer },
  xl: { 'col-xl-': spacer },
};
const options = {
  alignItems: { 'align-items-': ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'] },
  direction: { 'flex-': ['row', 'row-reverse', 'column', 'column-reverse'] },
  wrap: { 'flex-': ['nowrap', 'wrap', 'wrap-reverse'] },
  spacing: { 'g-': spacer },
  spacingX: { 'gx-': spacer },
  spacingY: { 'gy-': spacer },
  justify: { 'justify-content-': ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'] },
  ...breakPoint,
};
console.log(options);
function Grid({ direction, alignItems, wrap, justify, children, container, spacing, spacingX, spacingY, md, xs, sm, lg, xl }) {
  const cssArr = [];
  for (const item in arguments[0]) {
    if (options[item]) {
      const arg = arguments[0][item];
      const key = Object.keys(options[item])[0];
      const val = options[item][key].includes(arg) ? arg : '';
      if (val) cssArr.push(key + val);
    }
  }
  container && cssArr.push('row');

  return <div className={cssArr.join(' ')}>{children} </div>;
}

Grid.propTypes = {
  alignItems: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'stretch', 'baseline']).isRequired,
  // alignContent: PropTypes.oneOf(['stretch', 'center', 'flex-start', 'flex-end', 'space-between', 'space-around']),
  direction: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
  container: PropTypes.bool,
  justify: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly']),
  wrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
  spacing: PropTypes.oneOf(spacer),
  children: PropTypes.node,
};

export default Grid;
