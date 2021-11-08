/* eslint-disable import/no-unresolved */
import { getDetails } from '../../APIs/Employee';
import { FirebaseSingleton } from '../../APIs/Firebase';
import { StatusCodes } from '../../utils/Enums';

export const FETCH_USERS = 'FETCH_USERS';

export const fetchUsersSuccessed = users => ({
  type: FETCH_USERS,
  payload: users,
});

export const fetchUsersAsync = () => dispatch => {
  (async () => {
    const response = await getDetails();
    if (response.status === StatusCodes.OK) {
      dispatch(fetchUsersSuccessed(response.data));
    }
  })();
};

// export const FetchChallengesStartAsync = (name, password) => dispatch => {
//   FirebaseSingleton.getInstance()
//     .firebaseInstance.FirebaseAuth.SignIn(name, password)
//     .then(user => {
//       console.log(user);

//       if (user.user && process.env.REACT_APP_ADMIN_EMAILS.includes(user.user.email)) {
//         localStorage.setItem('token', user.user.accessToken);
//         return history.push(`/${Lang.CurrentLanguage}/Dashboard`);
//       }
//       alert('You don\'t have permission to access this app ');
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };
