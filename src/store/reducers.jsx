import { combineReducers } from 'redux';

import employee from './Employee/reducer';

import language from './localization/reducer';

export default combineReducers({
  language,
  employee,
});
