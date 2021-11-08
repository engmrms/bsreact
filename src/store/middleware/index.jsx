// logger is customed to log data in the browser console
// import logger from "./logger";
// For Dev Tools -todo =remove for production bundle
import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default composeEnhancers(applyMiddleware(thunk));

// Note: Use Chrome Redux dev tools extenstion to trace redux
// Note: You can remove the middlewares to stop console logging data or the dev tools.
