import { combineReducers } from 'redux';
import { DetailsReducer } from './Details.reducer';
import { FilterReducer } from './Filters.reducer';
import { PropertiesReducer } from './Properties.reducer';
import { ViewReducer } from './View.reducer';

const RootReducer = combineReducers({
  view: ViewReducer,
  filters: FilterReducer,
  properties: PropertiesReducer,
  details: DetailsReducer,
});

export default RootReducer;
