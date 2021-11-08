import './App.css';

import { useState } from 'react';

import BSCollapse from './bootstrap/Collapse';
import BSdropdown from './bootstrap/dropdown';
import BSToast from './bootstrap/Toast';

function App() {
  const [showtoast, setShowtoast] = useState(false);
  return (
    <div className="container">
      <BSdropdown>
        <BSdropdown.Toggle variant="success" id="BSdropdown-basic">
          BSdropdown Button
        </BSdropdown.Toggle>

        <BSdropdown.Menu>
          <BSdropdown.Item href="#/action-1">Action</BSdropdown.Item>
          <BSdropdown.Item href="#/action-2">Another action</BSdropdown.Item>
          <BSdropdown.Item href="#/action-3">Something else</BSdropdown.Item>
        </BSdropdown.Menu>
      </BSdropdown>
      <button type="button" onClick={() => setShowtoast(!showtoast)} className="mb-2">
        Toggle Toast <strong>with</strong> Animation
      </button>
      <BSToast toast={showtoast}>
        <BSToast.Body>
          Hello, world! This is a BSToast message.
          <button type="button" className="btn-close" onClick={() => setShowtoast(false)} aria-label="Close" />
        </BSToast.Body>
      </BSToast>
      <BSCollapse />
    </div>
  );
}

export default App;
