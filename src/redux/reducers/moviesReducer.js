import * as t from '../constants/types'

const initialState = {
    movies: [],
}

export const movieReducer = (state = initialState, action) => {
    console.log('state', state)
    console.log('action', action)
    switch (action.type) {
        case t.GET_MOVIES:
            return {
                movies: action.payload,
            }
        default:
            return state
    }
}
