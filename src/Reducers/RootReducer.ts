import { combineReducers } from 'redux';
import { FilterReducer } from './Filters.reducer';
import { ListForRentReducer } from './ListForRent.reducer';
import testReducer from './test/test.reducer';

const RootReducer = combineReducers({
    test: testReducer,
    listForRent: ListForRentReducer,
    filters: FilterReducer,
})

export default RootReducer  