/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-else-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable prefer-const */

export class Globals {
  static get DEFAULT_LANGUAGE() {
    return process.env.REACT_APP_DEFAULT_LANGUAGE || null;
  }

  static get LANGUAGES() {
    return process.env.REACT_APP_LANGUAGES || null;
  }

  static get DEBUG_MODE() {
    return process.env.REACT_APP_DEBUG_MODE || null;
  }

  static get BASE_URL() {
    return process.env.REACT_APP_BASE_URL || null;
  }

  static get LOG_URL() {
    return process.env.REACT_APP_LOG_URL || null;
  }
}
