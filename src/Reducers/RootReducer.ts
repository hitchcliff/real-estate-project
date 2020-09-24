import { combineReducers } from 'redux';
import { FilterReducer } from './Filters.reducer';
import { ListForRentReducer } from './ListForRent.reducer';
import testReducer from './test/test.reducer';
import { ViewReducer } from './View.reducer';

const RootReducer = combineReducers({
    test: testReducer,
    view: ViewReducer,
    listForRent: ListForRentReducer,
    filters: FilterReducer,
})

export default RootReducer  