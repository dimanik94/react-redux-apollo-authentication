import React, { FC } from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';

import CustomInput from '../CustomInput/CustomInput';
import CustomButton from '../CustomButton/CustomButton';
import Spinner24 from '../ui/Spinner24/Spinner24';

import { LogInMutationVariables } from '../../apollo/generated/graphql';
import { required, minLength, email } from '../../utils/validators';

const minLength6 = minLength(6);

type InjectedProps = InjectedFormProps<LogInMutationVariables>;
type AllProps = InjectedProps;

const LoginForm: FC<AllProps> = ({ handleSubmit, invalid, submitting }) => (
	<form onSubmit={handleSubmit}>
		<Field
			name="email"
			component={CustomInput}
			placeholder="Электронная почта"
			type="email"
			validate={[required, email]}
		/>
		<Field
			autoComplete="off"
			togglePassword
			name="password"
			component={CustomInput}
			placeholder="Пароль"
			type="password"
			validate={[required, minLength6]}
		/>
		<CustomButton disabled={invalid || submitting}>
			{submitting ? <Spinner24 /> : 'Войти в систему'}
		</CustomButton>
	</form>
);

export default reduxForm<LogInMutationVariables>({ form: 'login' })(LoginForm);
