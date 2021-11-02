/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-else-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable prefer-const */

export class Auth {
  /**
   * @return {string} Get User Token Id.
   */
  static get Token() {
    // for test
    return localStorage.getItem('token');
    // return '1032024372';
  }

  /**
   * @return {boolean} Get Is User Authenticated.
   */
  static get IsAuthenticated() {
    return !!Auth.Token;
  }
}

/**
 * @return {JSX} Render Only If User Authenticated.
 */
export function Authenticated(props) {
  if (Auth.IsAuthenticated) return props.children;
  return <></>;
}

/**
 * @return {JSX} Render Only If User Not Authenticated.
 */
export function Anonymous(props) {
  if (!Auth.IsAuthenticated) return props.children;
  return <></>;
}
