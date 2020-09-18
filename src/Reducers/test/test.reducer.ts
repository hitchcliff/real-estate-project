import { TestDispatchTypes, TEST_LOADING, testTodos, TEST_SUCCESS, TEST_FAIL } from "../../types/test.action.types"

// interface or types is fine
interface InitialState {
    loading: boolean,
    testTodos?: testTodos[] // '?' means optional
}

const initialState: InitialState = {
    loading: false, 
    // don't need to write initial state
    // because its '?'
}

const testReducer = (state: InitialState = initialState, action: TestDispatchTypes) => {
    switch(action.type) {
        case TEST_FAIL: {
            return {
                loading: false
            }
        }
        case TEST_LOADING : {
            return {
                loading: true
            }
        }
        case TEST_SUCCESS: {
            return {
                loading: false,
                testTodos: action.payload
            }
        }
        default: 
            return state;
    }
}

export default testReducer