import React, { FC } from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';

import CustomInput from '../CustomInput/CustomInput';
import CustomButton from '../CustomButton/CustomButton';
import Spinner24 from '../ui/Spinner24/Spinner24';

import {
	required,
	minLength,
	email,
	passwordsMustMatch
} from '../../utils/validators';
import { SignUpMutationVariables } from '../../apollo/generated/graphql';

const minLength2 = minLength(2);
const minLength6 = minLength(6);

type InjectedProps = InjectedFormProps<SignUpMutationVariables>;
type AllProps = InjectedProps;

const RegistrationForm: FC<AllProps> = ({
	handleSubmit,
	invalid,
	submitting
}) => (
	<form onSubmit={handleSubmit}>
		<Field
			name="firstName"
			component={CustomInput}
			placeholder="Имя"
			type="text"
			validate={[required, minLength2]}
		/>
		<Field
			name="secondName"
			component={CustomInput}
			placeholder="Фамилия"
			type="text"
			validate={[required, minLength2]}
		/>
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
			placeholder="Введите пароль"
			type="password"
			validate={[required, minLength6]}
		/>
		<Field
			autoComplete="off"
			togglePassword
			name="confirmPassword"
			component={CustomInput}
			placeholder="Повторите пароль"
			type="password"
			validate={[passwordsMustMatch]}
		/>
		<CustomButton disabled={invalid || submitting}>
			{submitting ? <Spinner24 /> : 'Применить и войти'}
		</CustomButton>
	</form>
);

export default reduxForm<SignUpMutationVariables>({
	form: 'Registration'
})(RegistrationForm);
