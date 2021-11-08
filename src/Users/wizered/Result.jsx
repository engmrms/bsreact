/* eslint-disable no-magic-numbers */
import { useStateMachine } from 'little-state-machine';
import React from 'react';

// import { useSelector } from 'react-redux';
import updateAction from './updateAction';

const Result = () => {
  const { state } = useStateMachine(updateAction);
  // const state = useSelector(state => state?.wizered);
  console.log(state);

  return (
    <>
      <h2>Result:</h2>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
    </>
  );
};

export default Result;
