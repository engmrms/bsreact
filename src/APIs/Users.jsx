/* eslint-disable no-new */
import database from './RealTimeDataBase';

const endPointApiUrl = 'users';

export const getAll = () => database.get(endPointApiUrl);
export const getByIndex = index => database.get(endPointApiUrl, index);
export const updateUser = (index, user) => database.patch(endPointApiUrl, index, user);
export const deleteUser = index => database.delete(endPointApiUrl, index);
export const AddUser = user => database.post(endPointApiUrl, user);
