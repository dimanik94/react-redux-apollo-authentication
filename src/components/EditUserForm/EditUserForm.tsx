import React, { FC } from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import CustomInput from '../CustomInput/CustomInput';
import CustomButton from '../CustomButton/CustomButton';
import Spinner24 from '../ui/Spinner24/Spinner24';

import {
	minLength,
	email,
	passwordsMustMatch,
	required
} from '../../utils/validators';

import { EditUserMutationVariables } from '../../apollo/generated/graphql';

import styles from './EditUserForm.module.css';

const minLength2 = minLength(2);
const minLength6 = minLength(6);

type EditUserFormProps = {
	firstName?: string;
	secondName?: string;
	isSaved?: boolean;
};
type InjectedProps = InjectedFormProps<
	EditUserMutationVariables,
	EditUserFormProps
>;
type AllProps = InjectedProps & EditUserFormProps;

const EditUserForm: FC<AllProps> = ({
	handleSubmit,
	pristine,
	invalid,
	submitting,
	firstName,
	secondName,
	isSaved
}) => (
	<form className={styles.editFormContainer} onSubmit={handleSubmit}>
		<div className={styles.editFormHeader}>
			<h1 className={styles.editFormCurrentUserName}>
				{`${firstName} ${secondName}. Редактирование`}
			</h1>
			<CustomButton disabled={pristine || invalid || submitting || isSaved}>
				{submitting ? <Spinner24 /> : isSaved ? 'Сохранено' : 'Сохранить'}
			</CustomButton>
		</div>
		<div className={styles.editFormBody}>
			<div className={styles.editFromFlexOuter}>
				<Field
					label="Имя"
					name="firstName"
					component={CustomInput}
					placeholder="Имя"
					type="text"
					validate={[required, minLength2]}
				/>
				<Field
					label="Фамилия"
					name="secondName"
					component={CustomInput}
					placeholder="Фамилия"
					type="text"
					validate={[required, minLength2]}
				/>
				<Field
					label="Электронная почта"
					name="email"
					component={CustomInput}
					placeholder="Электронная почта"
					type="email"
					validate={[required, email]}
				/>
				<Field
					label="Новый пароль"
					togglePassword
					name="password"
					component={CustomInput}
					placeholder="Введите пароль"
					type="password"
					validate={[minLength6]}
				/>
				<Field
					label="Повторите пароль"
					togglePassword
					name="confirmPassword"
					component={CustomInput}
					placeholder="Повторите пароль"
					type="password"
					validate={[passwordsMustMatch]}
				/>
			</div>
		</div>
	</form>
);

export default reduxForm<EditUserMutationVariables, EditUserFormProps>({
	form: 'Edit',
	enableReinitialize: true
})(EditUserForm);
