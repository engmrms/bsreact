import { Lang } from '../../utils';
import { CHANGE_LANG } from './action';

export default function language(state = Lang.CurrentLanguage, action) {
  switch (action.type) {
    case CHANGE_LANG:
      return action.lang;
    default:
      return state;
  }
}
