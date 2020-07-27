export const AUTH_LOGIN = 'AUTH_LOGIN';
type AuthLoginAction = {
	type: typeof AUTH_LOGIN;
};

export const AUTH_LOGOUT = 'AUTH_LOGOUT';
type AuthLogoutAction = {
	type: typeof AUTH_LOGOUT;
};

export type AuthActionTypes = AuthLoginAction | AuthLogoutAction;
