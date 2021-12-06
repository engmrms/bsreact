/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import { StatusCodes } from "../Enums";

export const isEmpty = obj => {
  for (const _i in obj) return false;
  return true;
};

/**
 *  Build the action behavior for Redux Store.
 *  @redux_store store redux.
 *  @promise api end-point will get the data from.
 *  @dispatch dispatch will used for the store.
 *  @schema name.
 *  @string table name of object in store.
 *  @AlwaysUpdated if true will call api Always,  if false return From Store.
 */
export const ActionFactory = (dispatch, _state, api, schema, table, AlwaysUpdated) => {
  const { [schema]: store } = _state();
  // check is there data in store[table]
  if (!AlwaysUpdated && !isEmpty(store?.[table]) && !store?.[table].error) {
    dispatch({ type: `${schema}/dataExist` });
  }
  // check to prevent request dublicates
  else if (!store?.[table]?.loading) {
    // show loading
    dispatch({
      type: `${schema}/loading`,
      payload: { [table]: { loading: true, error: false } },
    });
    (async () => {
      /* wait for http */
      const response = await api()
        /* handle Error */
        .catch(e => {
          dispatch({
            type: `${schema}/fetchError`,
            payload: { [table]: { error: true, errorRef: e, loading: false } },
          });
        });
      /* handle Success */
      if (response?.status === StatusCodes.OK) {
        dispatch({
          type: `${schema}/fetchSuccess`,
          payload: { [table]: { ...response.data, loading: false } },
        });
      }
    })();
  }
};
