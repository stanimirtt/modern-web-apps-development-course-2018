import { combineReducers } from 'redux';
import ItemsReducer from './reducer_items';
import ItemSelectedReducer from './reducer_item_selected';

const rootReducer = combineReducers({
  items: ItemsReducer,
  itemSelected: ItemSelectedReducer
});

export default rootReducer;
