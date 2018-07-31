import axios from 'axios';

import { ITEM_SELECTED, SEARCH_BY_TITLE, API_URL } from './constants';

export const selectItem = item => ({
  type: ITEM_SELECTED,
  payload: item
});

export const searchByTitle = term => {
  const url = `${API_URL}&t=${term}`;
  const request = axios.get(url);

  console.log('Request: ', request);

  return {
    type: SEARCH_BY_TITLE,
    payload: request
  };
};
