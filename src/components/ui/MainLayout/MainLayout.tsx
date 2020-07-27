import React, { FC } from 'react';
import Logo from './../../../assets/logos/logo.svg';
import styles from './MainLayout.module.css';

const MainLayout: FC = ({ children }) => (
	<div className={styles.mainLayout}>
		<div className={styles.wrapper}>
			<div className={styles.logo}>
				<img src={Logo} alt="Logo" />
			</div>
			<div className={styles.main}>{children}</div>
		</div>
	</div>
);

export default MainLayout;
