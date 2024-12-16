export interface ITestState {
    list: TestsList | null
};

export interface Answer {
    id: string;
    text: string;
    isCorrect: boolean;
};

export interface Question {
    id: string;
    title: string;
    answers: Answer[];
};

export interface TestsList {
    page: number;
    pageSize: number;
    pageCount: number;
    totalSize: number;
    tests: Test[];
};

export interface Test {
    id: string;
    title: string;
    description: string;
    questions: Question[];
};

export enum TestActionTypes {
    LOAD_TESTS = "LOAD_TESTS"
};  


export interface TestAction {
    type: TestActionTypes;
    payload: any;
};

export interface ILoadTestsRespopnse {
    data: TestsList;
};