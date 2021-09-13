/* eslint-disable react/jsx-props-no-spreading */
import 'react-datepicker/dist/react-datepicker.css';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import React, { useEffect, useState } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import { useForm } from 'react-hook-form';
import { Calendar } from 'react-multi-date-picker';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import DateTimePicker from '../DateTimePicker';
import * as actions from '../Store/actions';
import { db } from './firebaselt';

export default function Index() {
  const [schools, setschools] = useState([]);
  const dispatch = useDispatch();
  const counter = useSelector(state => state?.counter || 0);
  const ref = db.collection('schools');

  const {
    register,
    control,
    setValue,
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

  const deleteSchool = schId => {
    ref
      .doc(schId)
      .delete()
      .catch(err => console.log(err));
  };
  const onDelete = (e, schid) => {
    e.preventDefault();
    // eslint-disable-next-line no-restricted-globals

    confirmAlert({
      title: '',
      message: 'Are you sure you want delete school',
      overlayClassName: 'custom',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            deleteSchool(schid);
          },
        },
        {
          label: 'No',
          // onClick: () => alert("Click No")
        },
      ],
    });

    // confirmAlert({
    //   customUI: ({ onClose }) => (
    //     <div className="custom-ui">
    //       <h1>Are you sure?</h1>
    //       <p>You want to delete this file?</p>
    //       <button type="button" onClick={onClose}>
    //         No
    //       </button>
    //       <button
    //         type="button"
    //         onClick={() => {
    //           deleteSchool(schid);
    //           onClose();
    //         }}>
    //         Yes, Delete it!
    //       </button>
    //     </div>
    //   ),
    // });
  };
  const onSchedual = e => {
    e.preventDefault();
    confirmAlert({
      customUI: ({ onClose }) => <Calendar range numberOfMonths={1} showOtherDays />,
    });
  };

  const onEdit = (e, schId) => {
    e.preventDefault();
    ref.doc(schId).onSnapshot(snapshot => {
      const school = snapshot.data();
      Object.keys(school).forEach(key => {
        setValue(key, school[key], {
          shouldValidate: true,
          shouldDirty: true,
        });
      });
    });
  };

  useEffect(() => {
    getschools();
    dispatch({ type: actions.INITIAL });
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
          <button type="button" className="btn btn-primary my-3 mx-5" onClick={onSchedual}>
            Schedual
          </button>

          <button type="button" className=" ms-3 btn btn-outline-secondary my-3" onClick={OnReset}>
            Clear
          </button>
        </form>
      </div>
      <div className="mt-5 col-md-6">
        <div className="card">
          <div className="card-body">
            <h1>{counter}</h1>
          </div>
          <div className="card-footer">
            <button type="button" className="btn btn-primary-outline" onClick={() => dispatch({ type: actions.INCREMENT })}>
              Increment
            </button>
            <button type="button" className="btn btn-primary-outline" onClick={() => dispatch({ type: actions.DECREMENT })}>
              Decrement
            </button>
          </div>
        </div>
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
