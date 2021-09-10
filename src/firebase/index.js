import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { db } from './firebaselt';

export default function Index() {
  const [schools, setschools] = useState([]);
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [id, setId] = useState('');
  const ref = db.collection('schools');

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
    setDesc('');
    setName('');
    setId('');
  };

  const addSchool = e => {
    e.preventDefault();
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
      setName(school.name);
      setDesc(school.desc);
      setId(school.id);
    });
  };

  useEffect(() => {
    getschools();
  }, []);

  return (
    <>
      <div className="mt-5 col-md-6">
        <form onSubmit={addSchool}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" value={name} aria-describedby="name" onChange={e => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="desc">Description</label>
            <textarea className="form-control" id="desc" value={desc} onChange={e => setDesc(e.target.value)} />
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
