import React, { FC } from 'react';
import { Redirect } from 'react-router-dom';
import { useCheckAuth } from '../../redux/hooks/useCheckAuth';

const RedirectRoute: FC = () => {
	const { isAuthenticated } = useCheckAuth();

	return isAuthenticated ? (
		<Redirect to="/profile" />
	) : (
		<Redirect to="/login" />
	);
};

export default RedirectRoute;
