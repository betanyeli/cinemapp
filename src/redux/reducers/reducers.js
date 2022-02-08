import { combineReducers } from 'redux'
import { reducer as movieReducer } from './index'

const reducer = combineReducers({
    movies: movieReducer,
})

export default reducer

