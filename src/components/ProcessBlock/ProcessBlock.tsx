import React, { FC } from 'react';
import { Process, Maybe } from '../../apollo/generated/graphql';
import { thousandsSeparator } from '../../utils/helpers';
import moment from 'moment';
import 'moment/locale/ru';

import styles from './ProcessBlock.module.css';

type ProcessBlockProps = {
	process: Maybe<Process>;
};
type AllProps = ProcessBlockProps;

const ProcessBlock: FC<AllProps> = ({ process }) => {
	const numberOfExecutions =
		process?.numberOfExecutions &&
		thousandsSeparator(process.numberOfExecutions);
	const averageLeadTime =
		process?.averageLeadTime &&
		moment.utc(+process.averageLeadTime).format('HH ч mm мин');
	const averageActiveTime =
		process?.averageActiveTime &&
		moment.utc(+process.averageActiveTime).format('HH ч mm мин');
	const percentEfficiency =
		process?.averageActiveTime &&
		process?.averageLeadTime &&
		((+process.averageActiveTime / +process.averageLeadTime) * 100).toFixed(1);
	const start =
		process?.start && moment.unix(+process.start).format('DD MMMM YYYY');
	const end = process?.end && moment.unix(+process.end).format('DD MMMM YYYY');
	const loading =
		process?.loading && moment.unix(+process.loading).format('DD MMMM YYYY');

	return (
		<div className={styles.process}>
			<div className={styles.processHeader}>
				<h3>{process?.name}</h3>
				<h5>На карту процесса</h5>
			</div>
			<div className={styles.processBody}>
				<div className={styles.processFlexOuter}>
					<div className={styles.processItems}>
						<div className={styles.numberOfExecutions}>
							<h1>{numberOfExecutions}</h1>
							<h5>выполнено раз</h5>
						</div>
					</div>
					<div className={styles.processItems}>
						<div className={styles.averageLeadTime}>
							<h3>{averageLeadTime}</h3>
							<h5>среднее время выполнения</h5>
						</div>
						<div className={styles.averageActiveTime}>
							<h3>
								{averageActiveTime} ({percentEfficiency}%)
							</h3>
							<h5>среднее активное время</h5>
						</div>
					</div>
					<div className={styles.processItems}>
						<div className={styles.employeesInvolvedProcess}>
							<h3>{process?.employeesInvolvedProcess} сотрудников</h3>
							<h5>участвует в процессе</h5>
						</div>
						<div className={styles.numberOfScenarios}>
							<h3>{process?.numberOfScenarios} сценариев</h3>
							<h5>в процессе</h5>
						</div>
					</div>
					<div className={styles.processItems}>
						<div className={styles.processItemsFlexOuter}>
							<div className={styles.start}>
								<h5>Начало</h5>
								<h5>{start}</h5>
							</div>
							<div className={styles.end}>
								<h5>Окончание</h5>
								<h5>{end}</h5>
							</div>
							<div className={styles.loading}>
								<h5>Загрузка</h5>
								<h5>{loading}</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProcessBlock;
