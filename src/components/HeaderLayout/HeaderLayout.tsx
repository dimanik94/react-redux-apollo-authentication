import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';

import DrawerLogo from './../../assets/logos/drawer_logo.svg';
import CustomButton from '../CustomButton/CustomButton';
import { useLogOut } from '../../redux/hooks/useLogout';

import styles from './HeaderLayout.module.css';

const HeaderLayout: FC = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const { logout } = useLogOut();

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	const closeMenu = () => {
		setIsOpen(false);
	};
	const logOut = () => {
		localStorage.removeItem('token');
		logout();
		closeMenu();
	};

	return (
		<div className={styles.headerLayout}>
			<header>
				<div className={styles.wrapper}>
					<div className={styles.menuButton} onClick={toggleMenu}>
						Меню
					</div>
				</div>
				<nav
					className={
						styles.navigationDrawer + ' ' + (isOpen ? styles.opened : '')
					}
				>
					<div className={styles.logo}>
						<div className={styles.logoWrapper}>
							<img src={DrawerLogo} alt="DrawerLogo" />
						</div>
					</div>
					<ul>
						<li onClick={closeMenu}>
							<NavLink activeClassName={styles.active} to="/profile">
								Профиль
							</NavLink>
						</li>
						<li onClick={closeMenu}>
							<NavLink activeClassName={styles.active} to="/processes">
								Список процессов
							</NavLink>
						</li>
						<CustomButton onClick={logOut}>Выйти</CustomButton>
					</ul>
				</nav>
				<div
					onClick={closeMenu}
					className={styles.backDrop + ' ' + (isOpen ? styles.opened : '')}
				></div>
			</header>
			<div className={styles.main}>
				<div className={styles.mainWrapper}>{children}</div>
			</div>
		</div>
	);
};

export default HeaderLayout;
