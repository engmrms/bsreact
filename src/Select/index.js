import React from 'react';
import Select from 'react-select';

function RSelect(props) {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
  return (
    <div>
      <Select options={options} isSearchable isClearable isRtl />
    </div>
  );
}

export default RSelect;
