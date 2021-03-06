export const Genders = {
  /**
   * @return {Number} Return 1 ذكر.
   */
  Male: 1,
  /**
   * @return {Number} Return 2 انثى.
   */
  Female: 2,
};

export const Languages = {
  /**
   * @return {Number} Return ar-sa.
   */
  Arabic: 'ar-sa',
  /**
   * @return {Number} Return en-us.
   */
  English: 'en-us',
};

export const PageDirection = {
  /**
   * @return {string} Return rtl .
   */
  RTL: 'rtl',
  /**
   * @return {string} Return ltr .
   */
  LTR: 'ltr',
};

export const StatusCodes = {
  /**
   * @return {string} Return 200.
   */
  OK: 200,
  /**
   * @return {string} Return 200.
   */
  Created: 201,
  /**
   * @return {string} Return 401.
   */
  Unauthorized: 401,
  /**
   * @return {string} Return 404.
   */
  NotFound: 404,
  /**
   * @return {string} Return 403.
   */
  Forbidden: 403,
  /**
   * @return {string} Return 500.
   */
  InternalServerError: 500,
  /**
   * @return {string} Return 307.
   */
  TemporaryRedirect: 307,
};

export const ActionMethod = {
  /**
   * @return {bool} Return true.
   */
  AlwaysUpdated: true,
  /**
   * @return {bool} Return false.
   */
  FromStore: false,
};
