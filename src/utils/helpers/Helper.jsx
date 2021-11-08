/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-magic-numbers */
// import { runInContext } from 'lodash';

import { StatusCodes } from '../Enums';

export class Format {
  static displayDate = (date, calendarType, split = '-') => {
    const MonthName = {
      gregorian: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'اكتوبر', 'نوفمبر', 'ديسمبر'],
      hijri: ['المحرّم', 'صفر', 'ربيع الأول', 'ربيع الثاني', 'جمادى الاول', 'جمادى الآخر', 'رجب', 'شعبان', 'رمضان', 'شوّال', 'ذو القعدة', 'ذو الحجة'],
    };

    const year = date.split(split, 3).pop();
    const month = parseInt(date.split(split, 2).pop()) - 1;
    const day = date
      .split(split, 1)
      .pop()
      .replace(/(T\d{2}:\d{2}:\d{2})Z$/, '');
    return {
      day,
      year,
      month: MonthName[calendarType][month],
    };
  };
}

export const isEmpty = obj => {
  for (const _i in obj) return false;
  return true;
};

/**
 *  Build the action behavior for Redux Store.
 *  @redux_store store redux.
 *  @promise api end-point will get the data from.
 *  @dispatch dispatch will used for the store.
 *  @reduce name.
 *  @string name of object in store.
 *  @AlwaysUpdated if true will call api Always,  if false return From Store.
 */
export const ActionFactory = (store, api, dispatch, reduce, name, AlwaysUpdated) => {
  // check is there data in store[name]
  if (!AlwaysUpdated && !isEmpty(store?.[name]?.[name])) {
    dispatch({ type: 'DATA_EXIST', store: reduce });
  }
  // check to prevent request dublicates
  else if (!store?.[name]?.loading) {
    // show loading
    dispatch({
      type: 'LOADING',
      payload: { [name]: { loading: true, error: false } },
      store: reduce,
    });
    (async () => {
      window.setTimeout(async () => {
        /* wait for http */
        const response = await api()
          /* handle Error */
          .catch(e => {
            dispatch({
              type: 'FETCH_ERORR',
              payload: { [name]: { error: true, errorRef: e, loading: false } },
              store: reduce,
            });
          });
        /* handle Success */
        if (response?.status === StatusCodes.OK) {
          dispatch({
            type: 'FETCH_SUCSSES',
            payload: { [name]: { ...response.data, loading: false } },
            store: reduce,
          });
        }
      }, Math.floor(Math.random() * 8000 + 1000));
    })();
  }
};

/**
 *  Build image valiadtion depened on react hook from and enviroment varaible.
 *  @target event target.
 *  @useForm useForm function from react hook form plugin .
 *  @rules custom rules validation {value,message}
 */
export const fileValidation = (element, useForm, rules) => {
  const { files, name } = element.target;
  useForm.clearErrors(name);

  if (files.length) {
    for (const rule in rules) {
      const ruleObj = rules[rule];

      switch (rule) {
        case 'size':
          if (ruleObj.value <= files[0]?.size) {
            useForm.setError(name, {
              type: 'manual',
              message: !ruleObj.message ? `The image size (${ruleObj.value / 1000} kB) exceed the maximum limited` : ruleObj.message,
            });
            return false;
          }
          break;

        case 'fileType':
          if (!ruleObj.value.includes(files[0]?.type)) {
            useForm.setError(name, {
              type: 'manual',
              message: !ruleObj.message ? `Only ${ruleObj.value} allowed` : ruleObj.message,
            });
            return false;
          }
          break;

        default:
          break;
      }
    }
  }

  return true;
};

/**
 *  Convert image to Base64 using FileReader .
 *  @file file value from file input.
 *  @return base64 value only
 */
export const convertToBase64 = file =>
  new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result.replace('data:', '').replace(/^.+,/, ''));
    };
    fileReader.onerror = error => {
      reject(error);
    };
  });

/**
 *  Strip HTML Tags from string text .
 *  @htmlContent html script .
 *
 */
export const stripHTML = htmlContent => {
  if (typeof htmlContent === 'string') return htmlContent?.replace(/<\/?[^>]+(>|$)/g, '');
  return htmlContent;
};
