/* eslint-disable no-restricted-globals */
import { Modal } from 'bootstrap';
import React, { useEffect, useRef, useState } from 'react';

import { AddDept, deleteDept, getAll, getByIndex, updateDept } from '../APIs/Department';
import Form from './Form';

function Departments(props) {
  const [depts, setdepts] = useState();
  const [dept, setdept] = useState();
  const [modal, setModal] = useState();
  const deptModal = useRef();

  const retrieveDepts = async () => {
    const result = await getAll();
    setdepts(result);
  };
  const handleDelete = async index => {
    if (confirm('Are you sure ?')) {
      await deleteDept(index);
      retrieveDepts();
    }
  };
  const handleEdit = async index => {
    const result = await getByIndex(index);
    result.id = index;
    setdept(result);
    modal.show();
  };

  const handleSubmit = async data => {
    let result;
    if (!dept) result = await AddDept(data);
    else result = await updateDept(dept.id, data);
    if (result.status === 200) {
      modal.hide();
      retrieveDepts();
    }
  };
  const handleAdd = () => {
    setdept('');
    modal.show();
  };

  useEffect(() => {
    retrieveDepts();
    setModal(new Modal(deptModal.current));
  }, []);
  return (
    <>
      <div className="d-flex justify-content-between my-5">
        <h1 className="">Departments</h1>
        <button type="button" className="btn btn-dark" onClick={handleAdd}>
          Add New Department
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Location</th>

            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {depts &&
            Object.keys(depts).map((key, i) => (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{depts[key].name}</td>
                <td>{depts[key].location}</td>

                <td>
                  <button type="button" className="btn btn-danger me-3" onClick={() => handleDelete(key)}>
                    Delete
                  </button>
                  <button type="button" className="btn btn-secondary" onClick={() => handleEdit(key)}>
                    Edit
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <Form data={dept} refItem={deptModal} onSubmit={handleSubmit} />
    </>
  );
}

export default Departments;
