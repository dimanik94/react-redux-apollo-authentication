import { AUTH_LOGOUT, AUTH_LOGIN, AuthActionTypes } from './actionTypes';

export const logOut = (): AuthActionTypes => ({
	type: AUTH_LOGOUT
});

export const logIn = (): AuthActionTypes => ({
	type: AUTH_LOGIN
});
