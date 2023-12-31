import Cookies from 'js-cookie'
import { toast } from 'react-toastify'
import axios from '../../config/axios.config'
import { IUser } from '../../types/user.type'
import { setuserPeople } from './userPeopleList.action'
import { setSuggestedUsers } from './suggestedUsers.action'
import { update_notification_user_followers } from './notification.action'
import { ProfileUserAction, ProfileUserActionTypes } from '../../types/store/profileInfo.type'

const getProfileUserStart = (): ProfileUserAction => ({
   type: ProfileUserActionTypes.GET_PROFILE_USER_START,
})

const getProfileUserFailure = (error: any): ProfileUserAction => ({
   type: ProfileUserActionTypes.GET_PROFILE_USER_FAILURE,
   payload: error,
})

export const setProfileUser = (profileUser: Object): ProfileUserAction => ({
   type: ProfileUserActionTypes.SET_PROFILE_USER,
   payload: profileUser,
})

const getProfileUserSuccess = (profileUser: IUser): ProfileUserAction => ({
   type: ProfileUserActionTypes.GET_PROFILE_USER_SUCCESS,
   payload: profileUser,
})


export const findUserById = async (userId: string) => {
   try {
      const response = await axios.get(`/user/getUserById/${userId}`)
      const data = await response.data
      return data
   } catch (error: any) {
      return error
   }
}

export const getProfileUser = (userId: string) => async (dispatch: any) => {
   dispatch(getProfileUserStart())
   try {
      const data = await findUserById(userId)
      dispatch(getProfileUserSuccess(data.user))
   } catch (error: any) {
      dispatch(getProfileUserFailure(error?.response.data.message))
      toast.error(error?.response.data.message)
   }
}

export const followUser = (followingId: string) => async (dispatch: any) => {
   try {
      const userId = Cookies.get('user_Id')
      const response = await axios.put(`user/followUser/${userId}/${followingId}`)
      const data = await response.data
      dispatch(setSuggestedUsers(data.userToFollow))
      dispatch(update_notification_user_followers(data.userToFollow))
      dispatch(setProfileUser(data))
      dispatch(setuserPeople(data.userToFollow))
      return data
   } catch (error: any) {
      return error
   }
}
