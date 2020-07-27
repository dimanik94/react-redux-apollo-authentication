import React, { FC } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useCheckAuth } from '../../redux/hooks/useCheckAuth';

type AllProps = RouteProps;

const PrivateRoute: FC<AllProps> = ({ ...rest }) => {
	const { isAuthenticated } = useCheckAuth();

	return isAuthenticated ? <Route {...rest} /> : <Redirect to="/login" />;
};

export default PrivateRoute;
