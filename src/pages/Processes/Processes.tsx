import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import ProcessBlock from '../../components/ProcessBlock/ProcessBlock';
import Spinner100 from '../../components/ui/Spinner100/Spinner100';

import { useProcessListQuery } from '../../apollo/generated/graphql';

type AllProps = RouteComponentProps;

const Processes: FC<AllProps> = () => {
	const { data, loading } = useProcessListQuery({
		fetchPolicy: 'network-only'
	});

	return (
		<>
			{loading && <Spinner100 />}
			{data?.processList &&
				data.processList.map((item, index) => (
					<ProcessBlock key={index} process={item} />
				))}
		</>
	);
};

export default Processes;
