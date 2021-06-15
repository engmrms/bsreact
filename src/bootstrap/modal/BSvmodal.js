import React,{useState,useEffect,useRef} from 'react'
import { Modal } from 'bootstrap';
 


export default  function BSvmodal() {

  const [modal,setModal] = useState();
  const exampleModal = useRef();

  useEffect(()=>{
    setModal(new Modal(exampleModal.current))
  },[])
  return (
    <>

      {/* show btn Modal */}
      <button type="button" className="btn btn-primary"  onClick={()=>modal.show()}>
        Launch demo modal
</button>

      {/* Modal */}
      <div className="modal fade" ref={exampleModal} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="btn-close" onClick={()=>modal.hide()} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              ...
      </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={()=>modal.hide()}>Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
 
