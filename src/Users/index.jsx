/* eslint-disable no-restricted-globals */
import { Modal } from 'bootstrap';
import React, { useEffect, useRef, useState } from 'react';

import { AddUser, deleteUser, getAll, getByIndex, updateUser } from '../APIs/Users';
import Form from './Form';

function Users(props) {
  const [users, setUsers] = useState();
  const [user, setUser] = useState();
  const [modal, setModal] = useState();
  const userModal = useRef();

  const retrieveUsers = async () => {
    const result = await getAll();
    setUsers(result);
  };

  const handleDelete = async index => {
    if (confirm('Are you sure ?')) {
      await deleteUser(index);
      retrieveUsers();
    }
  };
  const handleEdit = async index => {
    const result = await getByIndex(index);
    result.id = index;
    setUser(result);
    modal.show();
  };

  const handleSubmit = async data => {
    let result;
    if (!user) result = await AddUser(data);
    else result = await updateUser(user.id, data);
    if (result.status === 200) {
      modal.hide();
      retrieveUsers();
    }
  };
  const handleAdd = () => {
    setUser({ name: '', email: '', isAdmin: false });
    modal.show();
  };

  useEffect(() => {
    retrieveUsers();
    setModal(new Modal(userModal.current));
  }, []);
  return (
    <>
      <div className="d-flex justify-content-between my-5">
        <h1 className="">Users</h1>
        <button type="button" className="btn btn-dark" onClick={handleAdd}>
          Add New User
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">IsAdmin</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            Object.keys(users).map((key, i) => (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{users[key].name}</td>
                <td>{users[key].email}</td>
                <td>{users[key].isAdmin ? 'true' : ''}</td>
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
      <Form data={user} refItem={userModal} onSubmit={handleSubmit} />
    </>
  );
}

export default Users;
