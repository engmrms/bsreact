import './App.css';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAll, getComments, newPost } from './APIs/Placeholder';
import img from './Assets/images/call.svg';
// import Accordion from "./Accordion";
import BSCollapse from './bootstrap/Collapse';
import BSdropdown from './bootstrap/dropdown';
import useToastContext from './context';
import Avatar from './package/avatar';
import Alert from './package/bootstrap/Alert';
import BSToast from './package/bootstrap/Toast';

function App() {
  const [showtoast, setShowtoast] = useState(false);
  const showToast = useToastContext();
  const dispatch = useDispatch();
  const { post } = useSelector(state => state?.ams) || {};

  useEffect(() => {
    dispatch(getAll());
    dispatch(getComments());
    dispatch(newPost());
    // Alert?.close();
    // console.log(toast);
    showToast({ type: 'danger', message: 'SDFsdf' });
  }, []);
  useEffect(() => {
    console.log('state', post);
  }, [post]);

  return (
    <div className="container">
      <Alert severity="success" dismissible>
        <Alert.Heading>Hello</Alert.Heading>
        This is an info alert — check it out!
      </Alert>

      <Avatar size="xxs" alt="tetst" className="test" width="50" src={img} />
      <Avatar size="xxs" className="test" width="50">
        M
      </Avatar>

      <BSdropdown id="BSdropdown-basic">
        <BSdropdown.Toggle link>BSdropdown Button</BSdropdown.Toggle>

        <BSdropdown.Menu>
          <BSdropdown.Item href="#/action-1">Action</BSdropdown.Item>
          <BSdropdown.Item href="#/action-2">Another action</BSdropdown.Item>
          <BSdropdown.Item href="#/action-3">Something else</BSdropdown.Item>
        </BSdropdown.Menu>
      </BSdropdown>
      <button type="button" onClick={() => setShowtoast(!showtoast)} className="mb-2">
        Toggle Toast <strong>with</strong> Animation
      </button>
      <BSToast toast={showtoast} position="middle-start" bg="danger">
        <BSToast.Body>
          Hello, world! This is a BSToast message.
          <button type="button" className="btn-close" onClick={() => setShowtoast(false)} aria-label="Close" />
        </BSToast.Body>
      </BSToast>

      <div id="accordionExample">
        <BSCollapse show parent="#accordionExample">
          <BSCollapse.Toggle>Toggle collapse</BSCollapse.Toggle>

          <BSCollapse.Body>
            <div id="example-collapse-text">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft
              beer labore wes anderson cred nesciunt sapiente ea proident.
            </div>
          </BSCollapse.Body>
        </BSCollapse>
        <BSCollapse parent="#accordionExample">
          <BSCollapse.Toggle>Toggle collapse2</BSCollapse.Toggle>

          <BSCollapse.Body>
            <div id="example-collapse-text">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft
              beer labore wes anderson cred nesciunt sapiente ea proident.
            </div>
          </BSCollapse.Body>
        </BSCollapse>
      </div>

      {/*
      <Accordion>
        <Accordion.Item>
          <Accordion.Heading>Accordion Item #1</Accordion.Heading>
          <Accordion.Body>
            <>
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes
              that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
              You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
              within the <code>.accordion-body</code>, though the transition does limit overflow.
            </>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Heading>Accordion Item #2</Accordion.Heading>
          <Accordion.Body>
            <>
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes
              that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
              You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
              within the <code>.accordion-body</code>, though the transition does limit overflow.
            </>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion> */}
    </div>
  );
}

export default App;
