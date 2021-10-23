/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { UPDATEACTION } from '../../Store/actions/wizered';
// import { useStateMachine } from 'little-state-machine';
// import updateAction from './updateAction';

const Step2 = props => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  // const { state, actions } = useStateMachine({ updateAction });
  const onSubmit = data => {
    // actions.updateAction(data);
    dispatch({ type: UPDATEACTION, payload: data });
    props.history.push('./result');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Step 2</h2>
      <label>
        Age:
        {/* <input {...register('age')} defaultValue={state.age} /> */}
        <input {...register('age')} />
      </label>
      <label>
        Years of experience:
        {/* <input {...register('yearsOfExp')} defaultValue={state.yearsOfExp} /> */}
        <input {...register('yearsOfExp')} />
      </label>
      <input type="submit" />
    </form>
  );
};

export default withRouter(Step2);
