import axios from "../../APIs/config";
import { StatusCodes } from "../../utils/Enums";
// import { API } from "../actions/types";
// import { accessDenied, apiEnd, apiError, apiStart } from "../actions/api";
import { actions } from "../standard";

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
    const store = getState();
    const { api, table, AlwaysUpdated } = action.payload;
    console.log("action", action.payload);
    if (!api) return;
    // console.log(api, table, AlwaysUpdated, actions.loading().type);
    // // check is there data in store[table]
    if (!AlwaysUpdated && !isEmpty(store?.[table]) && !store?.[table].error) {
      dispatch({ type: actions.dataExist().type });
    }
    // check to prevent request dublicates
    if (!store?.ams?.[table]?.loading) {
      // show loading

      console.log(table);
      dispatch({
        type: actions.loading().type,
        payload: { ...action.payload, ...{ [table]: { loading: true, error: false } } },
      });
    }
    console.log(store);
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
      if (response?.status === StatusCodes.OK) {
        dispatch({
          type: actions.fetchSuccess().type,
          payload: { [table]: { ...response.data, loading: false } },
        });
      }
    })();
  };

export default apiMiddleware;
