import React, { FC } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';

import Errors from '../../components/Errors/Errors';
import LoginForm from '../../components/LoginForm/LoginForm';

import {
	useLogInMutation,
	LogInMutationVariables
} from '../../apollo/generated/graphql';

import { useLogIn } from '../../redux/hooks/useLogin';

type AllProps = RouteComponentProps;

const Login: FC<AllProps> = ({ history }) => {
	const [logIn, { error }] = useLogInMutation();
	const { login } = useLogIn();

	const onSubmit = async (values: LogInMutationVariables) => {
		try {
			const response = await logIn({
				variables: values
			});
			const token = response.data?.login?.token;
			if (token) {
				localStorage.setItem('token', token);
				login();
				history.push('/profile');
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<LoginForm onSubmit={onSubmit} />
			<Link to="/registration">Зарегистрироваться</Link>
			{error && <Errors errors={error} />}
		</>
	);
};

export default Login;
