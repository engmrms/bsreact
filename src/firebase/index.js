/* eslint-disable react/jsx-props-no-spreading */
// import 'react-datepicker/dist/react-datepicker.css';

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

import DateTimePicker from '../DateTimePicker';
import { db } from './firebaselt';

export default function Index() {
  const [schools, setschools] = useState([]);

  const ref = db.collection('schools');

  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const getschools = () => {
    ref.onSnapshot(snapshot => {
      const items = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));

      setschools(items);
    });
  };
  const OnReset = () => {
    console.log('DDDDDDDD');
    // setDesc('');
    // setName('');
    // setId('');
  };

  const addSchool = data => {
    console.log(data);

    const { name, id, desc } = data;
    const docId = uuidv4();
    if (!id) {
      ref
        .doc(docId)
        .set({ id: docId, name, desc })
        .catch(err => console.log(err));
    } else {
      ref
        .doc(id)
        .update({ name, desc })
        .catch(err => console.log(err));
    }

    OnReset();
  };
  const onDelete = (e, schid) => {
    e.preventDefault();
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Are you sure you want delete school ?')) {
      ref
        .doc(schid)
        .delete()
        .catch(err => console.log(err));
    }
  };

  const onEdit = (e, schId) => {
    e.preventDefault();
    ref.doc(schId).onSnapshot(snapshot => {
      const school = snapshot.data();
      // setName(school.name);
      // setDesc(school.desc);
      // setId(school.id);
    });
  };

  useEffect(() => {
    getschools();
  }, []);

  return (
    <>
      <div className="mt-5 col-md-6">
        <form onSubmit={handleSubmit(addSchool)}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" {...register('name', { required: true })} className="form-control" aria-describedby="name" />
            {errors.name && <div className="text-danger">Please select a valid Name.</div>}
          </div>
          <div className="form-group">
            <label htmlFor="desc">Description</label>
            <textarea className="form-control" {...register('desc', { required: true })} />
            {errors.desc && <div className="text-danger">Please select a valid Description.</div>}
          </div>

          <div className="form-group">
            <DateTimePicker title="Start at" name="startAt" control={control} errors={errors} rules={{ required: true }} />
          </div>
          <div className="form-group">
            <DateTimePicker title="End At" name="endAt" control={control} errors={errors} rules={{ required: true }} />
          </div>

          <button type="submit" className="btn btn-primary my-3">
            Submit
          </button>
          <button type="button" className=" ms-3 btn btn-outline-secondary my-3" onClick={OnReset}>
            Clear
          </button>
        </form>
      </div>

      <div className="row">
        {schools &&
          schools.map(data => (
            <div className="col-6 mt-3" key={data.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{data.name}</h5>
                  <p className="card-text">{data.desc}</p>
                  <a href="/" className="card-link" onClick={e => onEdit(e, data.id)}>
                    Edit
                  </a>
                  <a href="/" className="card-link" onClick={e => onDelete(e, data.id)}>
                    Delete
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
