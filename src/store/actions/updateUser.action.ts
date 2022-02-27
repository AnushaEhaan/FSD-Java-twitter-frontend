import {
	UpdateUserActionTypes,
	UpdateUserAction,
} from '../../interfaces/store/updateUser.types';
import axios from '../../common/axios';
import { toast } from 'react-toastify';
import store from '../store';

export const updateUserStart = (): UpdateUserAction => ({
	type: UpdateUserActionTypes.UPDATE_USER_START,
});

const updateUserSuccess = (): UpdateUserAction => ({
	type: UpdateUserActionTypes.UPDATE_USER_SUCCESS,
});

const updateUserFailure = (error: string): UpdateUserAction => ({
	type: UpdateUserActionTypes.UPDATE_USER_FAILURE,
	payload: error,
});

export const uploadAvatar = async (image: any) => {
	try {
		const formData = new FormData();
		formData.append('image', image);
		const response = await axios.post('/user/uploadAvatar', formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		});

		const data = await response.data;
		return data;
	} catch (error) {
		return error;
	}
};

export const updateUser = (form: any) => async (dispatch: any) => {
	dispatch(updateUserStart());
	try {
		let { user } = store.getState().auth;
		user = JSON.parse(user);

		const formData: any = {};
		Object.keys(form).forEach((key) => {
			if (form[key]) {
				formData[key] = form[key];
			}
		});
		
		const response = await axios.put(`/user/updateUser/${user._id}`, formData);
		const data = await response.data;
		data.status === 200 && dispatch(updateUserSuccess());
        data.status === 200 && toast.success(data.message);
	} catch (error: any) {
		const message = error?.response?.data?.message;
		dispatch(updateUserFailure(message));
        toast.error(message);
	}
};
