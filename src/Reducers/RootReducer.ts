import { combineReducers } from 'redux';
import { FilterReducer } from './Filters.reducer';
import { PropertiesReducer } from './Properties.reducer';
import { ViewReducer } from './View.reducer';

const RootReducer = combineReducers({
  view: ViewReducer,
  filters: FilterReducer,
  properties: PropertiesReducer,
});

export default RootReducer;
