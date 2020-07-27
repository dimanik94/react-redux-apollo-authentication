import { useSelector } from 'react-redux';
import { AppState } from '../reducers/rootReducer';
import { AuthState } from '../reducers/authReducer';

export const useCheckAuth = (): AuthState => {
	const { isAuthenticated } = useSelector(
		(state: AppState): AuthState => state.auth
	);

	return {
		isAuthenticated
	};
};
