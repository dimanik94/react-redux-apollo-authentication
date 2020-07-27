import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import Profile from './pages/Profile/Profile';
import Processes from './pages/Processes/Processes';

import MainLayout from './components/ui/MainLayout/MainLayout';
import HeaderLayout from './components/HeaderLayout/HeaderLayout';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RedirectRoute from './components/RedirectRoute/RedirectRoute';

const App: FC = () => (
	<BrowserRouter>
		<Switch>
			<Route
				path="/login"
				render={(props) => (
					<MainLayout>
						<Login {...props} />
					</MainLayout>
				)}
			/>
			<Route
				path="/registration"
				render={(props) => (
					<MainLayout>
						<Registration {...props} />
					</MainLayout>
				)}
			/>
			<PrivateRoute
				path="/profile"
				render={(props) => (
					<HeaderLayout>
						<Profile {...props} />
					</HeaderLayout>
				)}
			/>
			<PrivateRoute
				path="/processes"
				render={(props) => (
					<HeaderLayout>
						<Processes {...props} />
					</HeaderLayout>
				)}
			/>
			<RedirectRoute />
		</Switch>
	</BrowserRouter>
);

export default App;
