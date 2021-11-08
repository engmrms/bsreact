import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';

import { states } from './data';

function RSelect(props) {
  const [selected, setSelected] = useState([]);

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
  const filterStates = inputValue => states.filter(state => state.label.toLowerCase().includes(inputValue.toLowerCase()));

  const loadOptions = inputValue =>
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(filterStates(inputValue)), 100);
    });

  const handleMultiChange = option => {
    setSelected(option);
    console.log(option);
  };
  return (
    <div className="row gy-4">
      <Select
        className="col"
        options={options}
        isClearable
        isRtl
        placeholder="Select Option"
        defaultValue={() => options.filter(op => op.label === 'Vanilla')}
      />
      <AsyncSelect
        className="col"
        placeholder="Select state"
        loadOptions={loadOptions}
        isRtl
        isMulti
        cacheOptions
        defaultOptions
        onChange={handleMultiChange}
      />
    </div>
  );
}

export default RSelect;
