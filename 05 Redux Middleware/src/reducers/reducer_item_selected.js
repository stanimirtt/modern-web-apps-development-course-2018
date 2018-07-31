import * as actionType from '../actions/constants';

export default (state = null, action) => {
  console.log(action);

  switch (action.type) {
    case actionType.ITEM_SELECTED:
      return action.payload;
    case actionType.SEARCH_BY_TITLE:
      return console.log(action.payload.data) || action.payload.data;
    default:
      return state;
  }
};
