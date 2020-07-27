import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { reset, FormAction } from 'redux-form';

export const useResetEditForm = (): { resetEditForm: () => FormAction } => {
	const dispatch = useDispatch();
	const resetEditForm = useCallback(() => dispatch(reset('Edit')), [dispatch]);

	return {
		resetEditForm
	};
};
