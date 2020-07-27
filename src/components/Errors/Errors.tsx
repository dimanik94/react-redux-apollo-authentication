import React, { FC } from 'react';
import { ApolloError } from '@apollo/client';

import styles from './Errors.module.css';

type ErrorsProps = {
	errors: ApolloError;
};
type AllProps = ErrorsProps;

const Errors: FC<AllProps> = ({ errors: { graphQLErrors } }) => {
	const arrayOfGraphQLErrors = graphQLErrors.map((item, index) => (
		<li key={index}>{item.message}</li>
	));

	return (
		<div className={styles.errors}>
			<div className={styles.errorsBlock}>
				<ul>{arrayOfGraphQLErrors}</ul>
			</div>
		</div>
	);
};

export default Errors;
