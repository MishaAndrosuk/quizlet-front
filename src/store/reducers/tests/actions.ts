import { Dispatch } from "@reduxjs/toolkit";
import { ILoadTestsRespopnse, TestAction, TestActionTypes } from "./types";
import axios from "axios";
import { APP_ENV } from "../../../env";
import ServiceResponse from "../../../serviceResponse";

export const loadTests = (page: string, pageSize: string) => async (dispatch: Dispatch<TestAction>) => {
    try {
        const response = await axios.get<ServiceResponse<ILoadTestsRespopnse>>(
            APP_ENV.API_URL + `tests/list?page=${page}&pageSize=${pageSize}`
        );
        const { data } = response;        
        
        dispatch({ type: TestActionTypes.LOAD_TESTS, payload: data.payload });
    } catch (error) {
        console.log(error);
    }
};
