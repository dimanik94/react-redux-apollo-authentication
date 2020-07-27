import React, { FC, ButtonHTMLAttributes } from 'react';

import styles from './CustomButton.module.css';

type AllProps = ButtonHTMLAttributes<HTMLButtonElement>;

const CustomButton: FC<AllProps> = ({ children, ...rest }) => (
	<button className={styles.customButton} {...rest}>
		{children}
	</button>
);

export default CustomButton;
