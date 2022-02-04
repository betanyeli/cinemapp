import { combineReducers } from 'redux'
import { movieReducer } from './moviesReducer'

const reducer = combineReducers({
    movies: movieReducer
})

export default reducer