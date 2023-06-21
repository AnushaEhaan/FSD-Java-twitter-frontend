import Cookies from 'js-cookie'
import { toast } from 'react-toastify'
import axios from '../../config/axios.config'
import { ITrend } from '../../types/trend.type'
import { getTweetsSuccess, getTweetsStart } from './tweets.action'
import { TrendsActionTypes, TrendsAction } from '../../types/store/trends.type'

const getTrendsType = (trends: ITrend[]): TrendsAction => {
   return {
      type: TrendsActionTypes.GET_TRENDS,
      payload: trends,
   }
}

export const getTopTrends = () => async (dispatch: any) => {
   try {
      const response = await axios.get('/trend/getTop')
      const data = await response.data
      dispatch(getTrendsType(data.trends))
      return data
   } catch (error: any) {
      toast.error(error?.response.data.message)
      return false
   }
}

export const findTrends = (search: string) => async (dispatch: any) => {
   try {
      dispatch(getTweetsStart())
      const userId = Cookies.get('user_Id')
      const response = await axios.get(`/trend/find/${search}/${userId}`)
      const data = await response.data
      dispatch(getTweetsSuccess(data.trend.tweets))
      return data
   } catch (error: any) {
      dispatch(getTweetsSuccess([]))
      return false
   }
}
