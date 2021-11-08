/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-else-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable prefer-const */

export class Globals {
  static get DEFAULT_LANGUAGE() {
    return import.meta.env.VITE_DEFAULT_LANGUAGE || null;
  }

  static get LANGUAGES() {
    return import.meta.env.VITE_LANGUAGES || null;
  }

  static get DEBUG_MODE() {
    return import.meta.env.VITE_DEBUG_MODE || null;
  }

  static get BASE_URL() {
    return import.meta.env.VITE_BASE_URL || null;
  }

  static get LOG_URL() {
    return import.meta.env.VITE_LOG_URL || null;
  }
}
