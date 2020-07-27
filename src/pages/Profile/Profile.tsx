import React, { FC, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import EditUserForm from '../../components/EditUserForm/EditUserForm';
import Spinner100 from '../../components/ui/Spinner100/Spinner100';
import Errors from '../../components/Errors/Errors';

import {
	useCurrentUserQuery,
	useEditUserMutation,
	EditUserMutationVariables
} from '../../apollo/generated/graphql';

import { sleep } from '../../utils/helpers';
import { useResetEditForm } from '../../redux/hooks/useResetEditForm';

type AllProps = RouteComponentProps;

const Profile: FC<AllProps> = () => {
	const [isSaved, setIsSaved] = useState(false);
	const { data, loading: queryLoading } = useCurrentUserQuery({
		fetchPolicy: 'network-only'
	});
	const [editUser, { error: mutationError }] = useEditUserMutation();
	const { resetEditForm } = useResetEditForm();

	const onSubmit = async (values: EditUserMutationVariables) => {
		try {
			await editUser({
				variables: values
			});
			setIsSaved(true);
			await sleep(3000);
			setIsSaved(false);
			resetEditForm();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			{queryLoading && <Spinner100 />}
			{data?.currentUser && (
				<EditUserForm
					isSaved={isSaved}
					firstName={data.currentUser.firstName}
					secondName={data.currentUser.secondName}
					initialValues={data.currentUser}
					onSubmit={onSubmit}
				/>
			)}
			{mutationError && <Errors errors={mutationError} />}
		</>
	);
};

export default Profile;
