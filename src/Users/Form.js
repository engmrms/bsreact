/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

function Form({ data, onSubmit, refItem }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm({});
  const formSubmit = data => {
    onSubmit(data);
  };

  useEffect(() => {
    console.log(data);
    reset(data);
  }, [data]);
  return (
    <div className="modal fade" ref={refItem} id="userModal" tabIndex="-1" aria-labelledby="userModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="userModalLabel">
              {!data ? 'New' : 'Edit'} User
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <form onSubmit={handleSubmit(formSubmit)}>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" {...register('name', { required: true })} className="form-control" aria-describedby="name" />
                {errors.name && <div className="text-danger">Please select a valid Name.</div>}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" {...register('email', { required: true })} className="form-control" aria-describedby="email" />
                {errors.name && <div className="text-danger">Please select a valid Email.</div>}
              </div>

              <div className="form-check">
                <input className="form-check-input" {...register('isAdmin')} type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Is Admin
                </label>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <input type="reset" />
              <button type="submit" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
