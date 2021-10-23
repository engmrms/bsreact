/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

// import { useStateMachine } from 'little-state-machine';
// import updateAction from './updateAction';
import { UPDATEACTION } from '../../Store/actions/wizered';

const Step1 = props => {
  const { register, handleSubmit } = useForm();
  // const { actions } = useStateMachine({ updateAction });
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch({ type: UPDATEACTION, payload: data });
    //  actions.updateAction(data);
    props.history.push('./step2');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('firstName')} />
      <input {...register('lastName')} />
      <input type="submit" />
    </form>
  );
};

export default withRouter(Step1);
