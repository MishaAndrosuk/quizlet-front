export interface IAuthState {
    isAuth: boolean,
    user: IUserModel | null
    role: string | null,
};

export interface IUserModel {
    id: string,
    email: string,
    role: string,
    firstName: string,
    lastName: string
};

export interface ILoginValues {
    email: string;
    password: string;
};

export enum AuthActionTypes {
    SIGN_IN = "SIGN_IN",
    LOGOUT = "LOGOUT",
    SIGN_UP = "SIGN_UP"
};

export interface ILoginResponse {
    accessToken: string,
    refreshToken: string
};

export interface IAuthAction {
    type: AuthActionTypes,
    payload: any
};

export interface IRegisterValues {
    email: string,
    username: string,
    password: string,
    confirmedPassword: string,
    firstName: string,
    lastName: string
};


export interface IRegisterResponse {
    accessToken: string,
    refreshToken: string
};