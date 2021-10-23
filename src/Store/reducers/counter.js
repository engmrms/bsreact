/* eslint-disable no-magic-numbers */
import * as toggle from '../actions/counter';

const factorial = 1;

export default function counter(state = { counter: 0 }, action) {
  let bsstate = state;

  switch (action.type) {
    case toggle.INCREMENT: {
      bsstate = { ...state, ...{ counter: state.counter + factorial } };
      localStorage.setItem('counter', bsstate.counter);
      return bsstate;
    }
    case toggle.DECREMENT: {
      bsstate = { ...state, ...{ counter: state.counter - factorial } };
      localStorage.setItem('counter', bsstate.counter);
      return bsstate;
    }
    case toggle.INITIAL: {
      return { ...state, ...{ counter: +localStorage.getItem('counter') || 0 } };
    }
    default:
      return state;
  }
}
