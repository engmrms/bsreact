import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { db } from './firebaselt';

export default function Index() {
  const [schools, setschools] = useState([]);
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
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
  const addSchool = e => {
    e.preventDefault();
    const docId = uuidv4();
    ref.doc(docId).set({ id: docId, name, desc }).catch(err=>console.log(err));
    
  };
  const onDelete =(e,schid)=>{
    e.preventDefault();
    ref.doc(schid).delete().catch(err=>console.log(err))
      
  }

  useEffect(() => {
    getschools(); 
  }, []);

  return (
    <div className="mt-5 col-md-6">
      <form onSubmit={addSchool}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" value={name} aria-describedby="name" onChange={e => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="desc">Description</label>
          <textarea className="form-control" id="desc" value={desc} onChange={e => setDesc(e.target.value)}>
            
          </textarea>
        </div>

        <button type="submit" className="btn btn-primary my-3">
          Submit
        </button>
      </form>
      {schools.map(data => (
        <div className="card col-6 mt-3" key={data.id}>
          <div className="card-body">
            <h5 className="card-title">{data.name}</h5>
            <p className="card-text">{data.desc}</p>
            <a href="/" className="card-link">
              Edit
            </a>
            <a href="/" className="card-link" onClick={(e)=>onDelete(e,data.id)}>
              Delete
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
