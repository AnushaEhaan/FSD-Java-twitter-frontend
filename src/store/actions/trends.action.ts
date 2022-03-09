import {
	TrendsState,
	TrendsActionTypes,
	TrendsAction,
	initialState,
} from '../../interfaces/store/trends.types';
import axios from '../../config/axios';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';


const getTrendsType = (data = []): TrendsAction => {
	return {
		type: TrendsActionTypes.GET_TRENDS,
		payload: data,
	};
};



export const getTopTrends = () => async (dispatch: any) => {
    try {
        const response = await axios.get('/trend/getTop');
        const data = await response.data;
        dispatch(getTrendsType(data.trends));
    } catch (error:any) {
        toast.error(error?.response.data.message);
        return false
    }
};