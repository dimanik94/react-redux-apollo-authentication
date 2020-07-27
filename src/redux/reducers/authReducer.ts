import {
	AUTH_LOGIN,
	AUTH_LOGOUT,
	AuthActionTypes
} from './../actions/actionTypes';

export type AuthState = {
	isAuthenticated: boolean;
};

const initialState: AuthState = {
	isAuthenticated: false
};

const authReducer = (
	state = initialState,
	action: AuthActionTypes
): AuthState => {
	switch (action.type) {
		case AUTH_LOGIN:
			return {
				...state,
				isAuthenticated: true
			};
		case AUTH_LOGOUT:
			return {
				...state,
				isAuthenticated: false
			};
		default:
			return state;
	}
};

export default authReducer;
