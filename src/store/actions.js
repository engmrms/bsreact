/* eslint-disable import/no-cycle */
// This file groups and out source actions
// eslint-disable-next-line import/no-cycle
import * as employee from './Employee/actions';
import * as localization from './localization/action';

export const actions = {
  ...localization,
  employee: { ...employee },
};
