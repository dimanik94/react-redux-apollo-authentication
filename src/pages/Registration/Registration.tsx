import React, { FC } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';

import Errors from '../../components/Errors/Errors';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

import {
	useSignUpMutation,
	SignUpMutationVariables
} from '../../apollo/generated/graphql';

import { useLogIn } from '../../redux/hooks/useLogin';

type AllProps = RouteComponentProps;

const Registration: FC<AllProps> = ({ history }) => {
	const [signUp, { error }] = useSignUpMutation();
	const { login } = useLogIn();

	const onSubmit = async (values: SignUpMutationVariables) => {
		try {
			const response = await signUp({
				variables: values
			});
			const token = response.data?.signup;
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
			<h3>Регистрация</h3>
			<RegistrationForm onSubmit={onSubmit} />
			<span>Уже зарегистрированы?</span>&nbsp;<Link to="/login">Вход</Link>
			{error && <Errors errors={error} />}
		</>
	);
};

export default Registration;
