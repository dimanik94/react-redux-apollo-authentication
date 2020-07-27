import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { logIn } from '../actions/authActions';
import { AuthActionTypes } from '../actions/actionTypes';

export const useLogIn = (): { login: () => AuthActionTypes } => {
	const dispatch = useDispatch();
	const login = useCallback(() => dispatch(logIn()), [dispatch]);

	return {
		login
	};
};
