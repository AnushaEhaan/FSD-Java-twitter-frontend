import { TrendsActionTypes, TrendsAction} from '../../interfaces/store/trends.types';
import axios from '../../config/axios';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { getTweetsSuccess, getTweetsStart } from './tweets.action';


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
        return data;
    } catch (error:any) {
        toast.error(error?.response.data.message);
        return false
    }
};


export const findTrends = (search: string) => async (dispatch: any) => {
    try {
        dispatch(getTweetsStart());
        const userId = Cookies.get('user_Id');
        const response = await axios.get(`/trend/find/${search}/${userId}`);
        const data = await response.data;
        dispatch(getTweetsSuccess(data.trend.tweets));
        return data;
    } catch (error:any) {
        dispatch(getTweetsSuccess([]));
        return false
    }
};