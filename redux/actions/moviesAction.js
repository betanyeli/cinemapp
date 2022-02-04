import * as t from '../constants/types'
import axios from 'axios'

export const fetchMovies = () => async dispatch => {
    const { data } = await axios.get('/api/movies').then(data => data).catch(e => 'not found')
    dispatch({
        type: t.GET_MOVIES,
        payload: data
    })
}