import { Dispatch } from "@reduxjs/toolkit";
import { AuthActionTypes, IAuthAction, ILoginValues, IUserModel, ILoginResponse, IRegisterResponse, IRegisterValues } from "./types";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import ServiceResponse from "../../../serviceResponse";

export interface ActionResult {
    success: boolean;
    message: string;
};

export const login =
    (values: ILoginValues) => async (dispatch: Dispatch<IAuthAction>): Promise<ActionResult> => {
        try {
            const response = await axios.post<ServiceResponse<ILoginResponse>>(
                "https://misha884-c7g6h4arbpb9dccs.northeurope-01.azurewebsites.net/api/account/signin",
                values,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            const { data } = response;

            localStorage.setItem("aut", data.payload.accessToken);
            localStorage.setItem("rut", data.payload.refreshToken);

            const jwt = jwtDecode<IUserModel>(data.payload.accessToken);

            const user: IUserModel = {
                id: jwt.id,
                email: jwt.email,
                firstName: jwt.firstName,
                lastName: jwt.lastName,
                role: jwt.role,
            };

            dispatch({ type: AuthActionTypes.SIGN_IN, payload: user });

            const result: ActionResult = {
                success: true,
                message: "Успішний вхід"
            };

            return result;
        } catch (error) {
            console.log("login error", error);

            const result: ActionResult = {
                success: false,
                message: "Не вдалося увійти"
            };

            return result;
        }
    };

    export const register =
    (values: IRegisterValues) => async (dispatch: Dispatch<IAuthAction>): Promise<ActionResult> => {
        try {
            const response = await axios.post<ServiceResponse<IRegisterResponse>>(
                "https://misha884-c7g6h4arbpb9dccs.northeurope-01.azurewebsites.net/api/account/signup",
                values,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            console.log("Response data:", response.data); 
            const { data } = response;

            localStorage.setItem("aut", data.payload.accessToken);
            localStorage.setItem("rut", data.payload.refreshToken);

            const jwt = jwtDecode<IUserModel>(data.payload.accessToken);

            const user: IUserModel = {
                id: jwt.id,
                email: jwt.email,
                firstName: jwt.firstName,
                lastName: jwt.lastName,
                role: jwt.role,
            };

            dispatch({ type: AuthActionTypes.SIGN_UP, payload: user });

            const result: ActionResult = {
                success: true,
                message: "Успішна реєстрація",
            };

            console.log("Register result:", result);
            return result;
        } catch (error: any) {
            console.error("Register error:", error);

            const errorMessage = error.response?.data?.message || "Не вдалося зареєструватися";

            const result: ActionResult = {
                success: false,
                message: errorMessage,
            };

            return result;
        }
    };
