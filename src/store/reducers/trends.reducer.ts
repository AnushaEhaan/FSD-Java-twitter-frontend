import {
	TrendsState,
	TrendsActionTypes,
	TrendsAction,
	initialState,
} from '../../types/store/trends.types'

const trendReducer = (
	state: TrendsState = initialState,
	action: TrendsAction
): TrendsState => {
	switch (action.type) {
		case TrendsActionTypes.GET_TRENDS:
			return {
				...state,
				loading: true,
				error: null,
				topTrends: action.payload,
			}
		default:
			return state
	}
}

export default trendReducer
