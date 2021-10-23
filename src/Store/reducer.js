import { combineReducers } from 'redux';

import counter from './reducers/counter';
import wizered from './reducers/wizered';

const reducer = combineReducers({ counter, wizered });

export default reducer;
