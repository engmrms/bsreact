import axios from '../../APIs/config';
import { StatusCodes } from '../../utils/Enums';
// import { API } from "../actions/types";
// import { accessDenied, apiEnd, apiError, apiStart } from "../actions/api";
import { actions } from '../standard';

export const isEmpty = obj => {
  for (const _i in obj) return false;
  return true;
};

const apiMiddleware =
  ({ getState, dispatch }) =>
  next =>
  action => {
    // console.log(getState(), action);

    next(action);
    const { ams } = getState();
    const { api, table, AlwaysUpdated } = action.payload || {};
    if (!api) return;
    // // check is there data in store[table]
    if (!AlwaysUpdated && !isEmpty(ams?.[table]) && !ams?.[table].error) {
      dispatch({ type: actions.dataExist().type });
    }
    // check to prevent request dublicates
    if (!ams?.[table]?.loading) {
      // show loading
      dispatch({
        type: actions.loading().type,
        payload: { [table]: { loading: true, error: false } },
      });
    }
    (async () => {
      /* wait for http */
      const response = await api()
        /* handle Error */
        .catch(e => {
          dispatch({
            type: actions.fetchError().type,
            payload: { [table]: { error: true, errorRef: e, loading: false } },
          });
        });
      /* handle Success */
      if (response?.status === StatusCodes.OK || response?.status === StatusCodes.Created) {
        dispatch({
          type: actions.fetchSuccess().type,
          payload: { [table]: { ...response.data, loading: false } },
        });
      }
    })();
  };

export default apiMiddleware;
