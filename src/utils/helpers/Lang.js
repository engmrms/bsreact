/* eslint-disable no-restricted-globals */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-else-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable prefer-const */

import { Languages } from '../Enums';
import { Globals } from './Globals';

export class Lang {
  /**
   * @return {string} Get Current Language.
   */
  static get CurrentLanguage() {
    return localStorage.getItem('language') || Globals.DEFAULT_LANGUAGE;
  }

  /**
   * @return {bool} if Language has changed from last request return true Based on Redux .
   */
  static get LanguageHasChanged() {
    const currentPath = location.pathname;
    const urlsRegx = new RegExp(Globals.LANGUAGES, 'g');
    return currentPath.match(urlsRegx)?.[0] !== localStorage.getItem('language');
  }

  /**
   * @return {text} get new language from url path .
   */
  static get GetNewLanguage() {
    const currentPath = location.pathname;
    const urlsRegx = new RegExp(Globals.LANGUAGES, 'g');
    const newLang = currentPath.match(urlsRegx)?.[0];
    return newLang || Lang.CurrentLanguage;
  }

  /**
   * @return {string} change language to diffrent locals .
   */
  static ChangeLanguageTo = lang => {
    const currentPath = location.pathname;
    const urlsRegx = new RegExp(Lang.CurrentLanguage, 'g');
    window.location = currentPath.replace(urlsRegx, lang);
  };
}
