/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
// import { UPDATEACTION } from '../../Store/actions/wizered';
import { useStateMachine } from 'little-state-machine';
import React from 'react';
import { useForm } from 'react-hook-form';
// import { useDispatch } from 'react-redux';
import { useHistory, withRouter } from 'react-router-dom';

import updateAction from './updateAction';

const Step2 = props => {
  // const dispatch = useDispatch();
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const { state, actions } = useStateMachine({ updateAction });
  const onSubmit = data => {
    actions.updateAction(data);
    // dispatch({ type: UPDATEACTION, payload: data });
    history.push('./Result');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Step 2</h2>
      <label>
        Age:
        <input {...register('age')} defaultValue={state.age} />
        {/* <input {...register('age')} /> */}
      </label>
      <label>
        Years of experience:
        <input {...register('yearsOfExp')} defaultValue={state.yearsOfExp} />
        {/* <input {...register('yearsOfExp')} /> */}
      </label>
      <input type="submit" />
      <button type="button" onClick={history.goBack}>
        Back
      </button>
    </form>
  );
};

export default withRouter(Step2);
