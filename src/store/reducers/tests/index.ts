import { AnswerModel, TestModel, Question, ITestState, ITestAction, TestActionTypes } from "./types";

const initialState: ITestState = {
    tests: [],
};

const TestReducer = (state: ITestState = initialState, action: ITestAction) => {
    switch (action.type) {
        case TestActionTypes.GET_TESTS:
            return { ...state, tests: action.payload as TestModel[] };
        case TestActionTypes.ADD_TEST:
            return { ...state, tests: [...state.tests, action.payload as TestModel] };
        default:
            return state;
    }
}

export default TestReducer;
