import { combineReducers } from 'redux';
import { ListForRentReducer } from './ListForRent.reducer';
import testReducer from './test/test.reducer';

const RootReducer = combineReducers({
    test: testReducer,
    listForRent: ListForRentReducer
})

export default RootReducer  