import { ITrend } from '../trend.type'

export interface TrendsState {
	loading: boolean
	error: null | string
	topTrends: ITrend[]
}

export interface TrendsAction {
	type: string
	payload?: any
}

export const initialState: TrendsState = {
	loading: false,
	error: null,
	topTrends: [],
}

export enum TrendsActionTypes {
	GET_TRENDS = 'GET_TRENDS',
}
