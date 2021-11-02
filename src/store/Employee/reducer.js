import { DATA_EXIST, FETCH_ERORR, FETCH_SUCSSES, LOADING } from './actions';

export default function Employee(state = {}, action) {
  if (action.store?.toLowerCase() === Employee.name.toLowerCase()) {
    switch (action.type) {
      case DATA_EXIST:
        return state;
      case LOADING:
        return {
          ...state,
          ...action.payload,
        };
      case FETCH_SUCSSES:
        return {
          ...state,
          ...action.payload,
        };
      case FETCH_ERORR:
        return {
          ...state,
          ...action.payload,
        };
      default:
        return state;
    }
  } else return state;
}
