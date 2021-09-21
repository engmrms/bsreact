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
    reset(data);
  }, [data]);
  return (
    <div className="modal fade" ref={refItem} id="deptModal" tabIndex="-1" aria-labelledby="deptModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="deptModalLabel">
              {!data ? 'New' : 'Edit'} Department
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
                <label htmlFor="location">Location</label>
                <input type="text" {...register('location', { required: true })} className="form-control" aria-describedby="location" />
                {errors.name && <div className="text-danger">Please select a valid Location.</div>}
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
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
