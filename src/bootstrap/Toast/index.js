/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-expressions */
import { Toast } from 'bootstrap';
import React, { useEffect, useRef } from 'react';

// export default function BSToast() {
//   const [toast, setToast] = useState(false);
//   const toastRef = useRef();

//   useEffect(() => {
//     const myToast = toastRef.current;
//     let bsToast = Toast.getInstance(myToast);

//     if (!bsToast) {
//       // initialize Toast
//       bsToast = new Toast(myToast, { autohide: false });
//       // hide after init
//       bsToast.hide();
//       setToast(false);
//     } else {
//       // toggle
//       toast ? bsToast.show() : bsToast.hide();
//     }
//   });

//   return (
//     <div className="py-2">
//       <button type="button" className="btn btn-success" onClick={() => setToast(toast => !toast)}>
//         Toast {toast ? 'hide' : 'show'}
//       </button>
//       <div
//         className="toast-container position-absolute p-3 top-0 start-50 translate-middle-x"
//         id="toastPlacement"
//         data-original-class="toast-container position-absolute p-3">
//         <div className="toast" role="alert" ref={toastRef}>
//           <div className="toast-header">
//             <strong className="me-auto">Bootstrap 5</strong>
//             <small>4 mins ago</small>
//             <button type="button" className="btn-close" onClick={() => setToast(false)} aria-label="Close" />
//           </div>
//           <div className="toast-body">Hello, world! This is a toast message.</div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function BSToast({ toast, children }) {
  const toastRef = useRef();
  const subComponentList = Object.keys(BSToast);
  const subComponents = subComponentList.map(key => React.Children.map(children, child => (child.type.name === key ? child : null)));
  useEffect(() => {
    const elToast = toastRef.current;
    let bsToast = Toast.getInstance(elToast);

    if (!bsToast) {
      // initialize Toast
      bsToast = new Toast(elToast);
      // hide after init
      bsToast.hide();
    } else {
      // toggle
      toast ? bsToast.show() : bsToast.hide();
    }
  }, [toast]);

  return (
    <div
      className="toast-container position-absolute p-3 top-0 start-50 translate-middle-x"
      id="toastPlacement"
      data-original-class="toast-container position-absolute p-3">
      {' '}
      <div className="toast" role="alert" ref={toastRef}>
        {subComponents.map(component => component)}
      </div>
    </div>
  );
}

const Header = ({ children, className, ...rest }) => (
  <div className={`toast-header ${className}`} {...rest}>
    {children}
  </div>
);
BSToast.Header = Header;

const Body = ({ children, className, ...rest }) => <div className={`toast-body ${className}`}>{children}</div>;
BSToast.Body = Body;
