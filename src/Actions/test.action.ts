import axios from 'axios'
import { Dispatch } from 'redux';
import { TestDispatchTypes, TEST_FAIL, TEST_LOADING, TEST_SUCCESS } from '../types/test.action.types';

export const TestActions = () => async (dispatch: Dispatch<TestDispatchTypes>) => {
    try {
        dispatch({
            type: TEST_LOADING
        })

        const endpoint = `https://jsonplaceholder.typicode.com/todos`
        const { data } = await axios.get(endpoint);
        
        dispatch({
            type: TEST_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type: TEST_FAIL
        })
    }
}