import { UPDATEACTION } from '../actions/wizered';

const wizered = (state = {}, action) => {
  switch (action.type) {
    case UPDATEACTION:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default wizered;
