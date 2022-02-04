import * as t from '../constants/types'

const initialState = {
    movies: [],
    movie: {},
    loading: false,
    error: null
}

export const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case t.GET_MOVIES:
            return {
                ...state,
                movies: action.payload,
                loading: false,
                error: null
            }


        default:
            return state
    }
}