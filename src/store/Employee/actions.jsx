/* eslint-disable import/no-unresolved */

// import * as ApiEmployee from '../../APIs/Employee';
import { ActionFactory } from '../../utils';
import { ActionMethod } from '../../utils/Enums';

export const LOADING = 'LOADING';
export const FETCH_SUCSSES = 'FETCH_SUCSSES';
export const FETCH_ERORR = 'FETCH_ERORR';
export const DATA_EXIST = 'DATA_EXIST';

/**
 -1 empolyee[DETAILS]  getEmployeeDetailsAsync
 */
// export const getEmployeeDetailsAsync = () => (dispatch, getState) => {
//   const { employee } = getState();
//   const api = ApiEmployee.getDetails;
//   ActionFactory(employee, api, dispatch, 'EMPLOYEE', 'DETAILS', ActionMethod.FromStore);
// };

/**
 -2 empolyee[EMPLOYEE]  getEmployeeAsync
 */
// export const getEmployeeAsync = () => (dispatch, getState) => {
//   const { employee } = getState();
//   const api = ApiEmployee.getProfile;
//   ActionFactory(employee, api, dispatch, 'EMPLOYEE', 'EMPLOYEE', ActionMethod.FromStore);
// };
