import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { ITestAction, TestModel, ITestState, Question, AnswerModel, TestActionTypes } from "./types";
import ServiceResponse from "../../../serviceResponse";

export interface ActionResult {
    success: boolean;
    message: string;
};

export const fetchTests = () => async (dispatch: Dispatch<ITestAction>): Promise<ActionResult> => {
    try {
        const response = await axios.get<ServiceResponse<TestModel[]>>(
            "https://misha884-c7g6h4arbpb9dccs.northeurope-01.azurewebsites.net/api/tests",
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        const { data } = response;

        dispatch({
            type: TestActionTypes.GET_TESTS,
            payload: data.payload,
        });

        const result: ActionResult = {
            success: true,
            message: "Тести успішно завантажені з newTests",
        };

        return result;

    } catch (error) {
        console.error("Error fetching tests:", error);

        const result: ActionResult = {
            success: false,
            message: "Не вдалося завантажити тести",
        };

        return result;
    }
};
