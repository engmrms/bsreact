/* eslint-disable no-new */
import database from './RealTimeDataBase';

const endPointApiUrl = 'departments';

export const getAll = () => database.get(endPointApiUrl);
export const getByIndex = index => database.get(endPointApiUrl, index);
export const updateDept = (index, user) => database.patch(endPointApiUrl, index, user);
export const deleteDept = index => database.delete(endPointApiUrl, index);
export const AddDept = user => database.post(endPointApiUrl, user);
