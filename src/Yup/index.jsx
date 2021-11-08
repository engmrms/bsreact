/* eslint-disable no-param-reassign */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/jsx-props-no-spreading */
import moment from 'moment';
import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

function Yup(props) {
  const useYupValidationResolver = validationSchema =>
    useCallback(
      async data => {
        try {
          const values = await validationSchema.validate(data, {
            abortEarly: false,
          });

          return {
            values,
            errors: {},
          };
        } catch (errors) {
          return {
            values: {},
            errors: errors.inner.reduce(
              (allErrors, currentError) => ({
                ...allErrors,
                [currentError.path]: {
                  type: currentError.type ?? 'validation',
                  message: currentError.message,
                },
              }),
              {}
            ),
          };
        }
      },
      [validationSchema]
    );
  yup.setLocale({
    number: {
      min: ({ min }) => `field_too_short ${min}`,
      max: ({ max }) => `field_too_big ${max}`,
    },
  });

  yup.addMethod(yup.date, 'format', function (formats, parseStrict) {
    return this.transform(function (value, originalValue) {
      console.log('value', value);
      console.log('originalValue', value);
      if (this.isType(value)) return value;

      value = moment(originalValue, formats, parseStrict);

      return value.isValid() ? value.toDate() : new Date('');
    });
  });

  const validationSchema = yup.object({
    text: yup.string().min(3).max(50).required(),
    numb: yup.number().positive().min(1).max(100),
    email: yup.string().email(),
    url: yup.string().url(),
    date: yup
      .date()
      .default(() => new Date())
      .format('dd/mm/yyyy'),
  });
  const resolver = useYupValidationResolver(validationSchema);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver });

  const formSubmit = data => {
    console.log(data);
  };
  console.log(errors);
  return (
    <form onSubmit={handleSubmit(formSubmit)} className="my-3">
      <div className="form-group">
        <label htmlFor="text">String</label>
        <input type="text" {...register('text')} className="form-control" aria-describedby="name" />
        {errors.text && <div className="text-danger">Please select a valid String.</div>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="text" {...register('email')} className="form-control" aria-describedby="name" />
        {errors.email && <div className="text-danger">Please select a valid Email.</div>}
      </div>

      <div className="form-group">
        <label htmlFor="numb">Number</label>
        <input type="text" {...register('numb')} className="form-control" aria-describedby="name" />
        {errors.numb && <div className="text-danger">{errors.numb.message}</div>}
      </div>

      <div className="form-group">
        <label htmlFor="date">Date</label>
        <input type="text" {...register('date')} className="form-control" aria-describedby="name" />
        {errors.date && <div className="text-danger">{errors.date.message}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="url">URL</label>
        <input type="text" {...register('url')} className="form-control" aria-describedby="name" />
        {errors.url && <div className="text-danger">Please select a valid URL.</div>}
      </div>

      <div className="form-group pt-3">
        <button type="submit" className="btn btn-dark">
          Submit
        </button>
      </div>
    </form>
  );
}

export default Yup;
