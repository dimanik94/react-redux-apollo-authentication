import React, { FC, useState, InputHTMLAttributes } from 'react';
import { WrappedFieldProps } from 'redux-form';

import HiddenPasswordIcon from './../../assets/icons/hidden_password_icon.svg';
import VisiblePasswordIcon from './../../assets/icons/visible_password_icon.svg';

import styles from './CustomInput.module.css';

type CustomInputProps = {
	label?: string;
	togglePassword?: boolean;
};
type AllProps = CustomInputProps &
	InputHTMLAttributes<HTMLInputElement> &
	WrappedFieldProps;

const CustomInput: FC<AllProps> = ({
	autoComplete,
	placeholder,
	type,
	label,
	togglePassword,
	input,
	meta: { touched, error }
}) => {
	const [isPasswordHidden, setIsPasswordHidden] = useState(true);
	const togglePasswordVisiblity = () => {
		setIsPasswordHidden(!isPasswordHidden);
	};
	const hasError = touched && error;

	return (
		<div className={styles.customInput + ' ' + (hasError ? styles.error : '')}>
			{label && <label htmlFor={input.name}>{label}</label>}
			<div className={styles.inputBlock}>
				<div className={styles.inputWrapper}>
					<input
						id={input.name}
						{...input}
						autoComplete={autoComplete}
						placeholder={placeholder}
						type={
							togglePassword ? (isPasswordHidden ? 'password' : 'text') : type
						}
					/>
					{togglePassword && (
						<span onClick={togglePasswordVisiblity}>
							<img
								alt="password_icon"
								src={
									isPasswordHidden ? HiddenPasswordIcon : VisiblePasswordIcon
								}
							/>
						</span>
					)}
				</div>
				{hasError && <p>{error}</p>}
			</div>
		</div>
	);
};

export default CustomInput;
