import { FETCH_USERS } from './actions';

export default function Users(state = [], action) {
  switch (action.type) {
    case FETCH_USERS:
      return [...action.payload];
    default:
      return state;
  }
}
