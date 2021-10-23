// /* eslint-disable no-new */
// import { getDatabase, onValue, ref, remove, set } from 'firebase/database';
// import { v4 as uuid } from 'uuid';

// import { FirebaseSingleton } from './Firebase';

// const db = getDatabase(FirebaseSingleton.getInstance());

// /**
//  * return Promise All json object from specific endpoint or only one by object index
//  * @param {string} endPointApiUrl name of the parent of json data under
//  * @param {string | number} index object index -- optioanl
//  * @returns {Promise} Promise object
//  */
// const get = (endPointApiUrl, index) =>
//   new Promise(resolve => {
//     const path = index ? `${endPointApiUrl}/${index}` : endPointApiUrl;
//     const JsonRef = ref(db, path);
//     onValue(JsonRef, snapshot => {
//       const data = snapshot.val();

//       resolve(data);
//     });
//   });

// /**
//  * Send json object to specific endpoint
//  * @param {string} endPointApiUrl name of the parent of json data
//  * @param {object} json object data send to firebase realtime database
//  * @returns {status}  return status of sending operation
//  */
// const post = (endPointApiUrl, json) =>
//   new Promise((resolve, reject) => {
//     set(ref(db, `${endPointApiUrl}/${uuid()}`), json)
//       .then(() => resolve({ status: 200 }))
//       .catch(error => reject(error));
//   });

// /**
//  * Update pieces of json object
//  * @param {string} endPointApiUrl name of the parent of json data
//  * @param {string | number} index object index
//  * @param {object} json object data that need to be updated
//  * @returns {status}  return status of update operation
//  */
// const update = (endPointApiUrl, index, json) =>
//   new Promise((resolve, reject) => {
//     set(ref(db, `${endPointApiUrl}/${index}`), json)
//       .then(() => resolve({ status: 200 }))
//       .catch(error => reject(error));
//   });

// /**
//  * Delete pieces of json object
//  * @param {string} endPointApiUrl name of the parent of json data
//  * @param {string | number} index object index
//  * @returns {status}  return status of delete operation
//  */
// const deleteJson = (endPointApiUrl, index) =>
//   new Promise((resolve, reject) => {
//     remove(ref(db, `${endPointApiUrl}/${index}`))
//       .then(() => resolve({ status: 200 }))
//       .catch(error => {
//         reject(error);
//       });
//   });

// export default {
//   get,
//   post,
//   delete: deleteJson,
//   patch: update,
// };
