import { ITestState, TestAction, TestActionTypes } from "./types";

const testState: ITestState = {
    list: null
};

const TestReducer = (state: ITestState = testState, action: TestAction) => {
    switch (action.type) {
        case TestActionTypes.LOAD_TESTS:
            return { ...state, list: action.payload };
        default:
            return state;
    }
};

export default TestReducer;