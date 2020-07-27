import { logOut } from '../actions/authActions';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { AuthActionTypes } from '../actions/actionTypes';

export const useLogOut = (): { logout: () => AuthActionTypes } => {
	const dispatch = useDispatch();
	const logout = useCallback(() => dispatch(logOut()), [dispatch]);

	return {
		logout
	};
};
