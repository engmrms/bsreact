import { Lang } from '../../utils';

export const CHANGE_LANG = 'CHANGE_LANG';

function language(lang) {
  return {
    type: CHANGE_LANG,
    lang,
  };
}

export function handleLang(lang = Lang.CurrentLanguage) {
  return dispatch => {
    document.documentElement.lang = lang; // sets html lang attribute
    localStorage.setItem('language', lang);
    dispatch(language(lang));
  };
}
