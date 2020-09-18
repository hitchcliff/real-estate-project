export const TEST_LOADING = "TEST_LOADING";
export const TEST_FAIL = "TEST_FAIL";
export const TEST_SUCCESS = "TEST_SUCCESS";


// use interface "whenever possible"
interface Test_Loading { 
    type: typeof TEST_LOADING // types for constant variables
}
interface Test_Fail {
    type: typeof TEST_FAIL // types for constant variables
}
interface Test_Success {
    type: typeof TEST_SUCCESS, // types for constant variables
    payload: testTodos[]
}


export type testTodos = { // types for the results
    userId: number,
    id: number,
    title: string,
    completed: boolean
}


// merge all dispatch types
export type TestDispatchTypes = Test_Loading | Test_Fail | Test_Success