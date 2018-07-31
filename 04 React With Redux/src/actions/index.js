import { ITEM_SELECTED } from './constants';

const selectItem = item => ({
  type: ITEM_SELECTED,
  payload: item
});

export default selectItem;
