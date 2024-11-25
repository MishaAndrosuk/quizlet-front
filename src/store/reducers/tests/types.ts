export interface AnswerModel {
    id: string;
    text: string;
    isCorrect: boolean;
}

export interface Question {
    id: string;
    title: string;
    answers: AnswerModel[];
}


export interface TestModel {
    id: string;
    title: string;
    description: string;
    questions: Question[];
}

export interface ITestState {
    tests: TestModel[];
}

export interface ITestAction {
    type: string;
    payload: TestModel[] | TestModel; 
}


export enum TestActionTypes {
    GET_TESTS = "GET_TESTS",
    ADD_TEST = "ADD_TEST",
    REMOVE_TEST = "REMOVE_TEST",
    EDIT_TEST = "EDIT_TEST",
    ADD_QUESTION = "ADD_QUESTION",
    REMOVE_QUESTION = "REMOVE_QUESTION",
    EDIT_QUESTION = "EDIT_QUESTION",
    ADD_ANSWER = "ADD_ANSWER",
    REMOVE_ANSWER = "REMOVE_ANSWER",
    EDIT_ANSWER = "EDIT_ANSWER",
}