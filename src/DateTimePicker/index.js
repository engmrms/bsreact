// import 'react-datepicker/dist/react-datepicker.css';

import React, { useState } from 'react';
// import ReactDatePicker from 'react-datepicker';
import { Controller } from 'react-hook-form';
import DatePicker, { Calendar } from 'react-multi-date-picker';
import TimePicker from 'react-multi-date-picker/plugins/time_picker';

export default function DateTimePicker({ control, title, name, errors, rules }) {
  const [values, setValues] = useState();

  return (
    <>
      <Calendar value={values} onChange={setValues} range numberOfMonths={2} showOtherDays />
      <label className="form-label" htmlFor={name}>
        {title}
      </label>
      <Controller
        name={name}
        control={control}
        rules={rules} // optional
        defaultValue={Date.now()}
        render={({ field: { value, onChange } }) => (
          //   <ReactDatePicker
          //     selected={value}
          //     onChange={date => onChange(date)}
          //     peekNextMonth
          //     showMonthDropdown
          //     showYearDropdown
          //     dropdownMode="select"
          //   />
          <>
            <DatePicker
              value={value}
              inputClass="form-control"
              containerClassName="d-block"
              onChange={date => {
                onChange(date.toUnix() * 1000);
              }}
              format="MM/DD/YYYY HH:mm:ss"
              plugins={[<TimePicker position="top" />]}
            />

            {errors && errors[name] && errors[name]?.type === 'required' && <span>your error message !</span>}
          </>
        )}
      />
    </>
  );
}
