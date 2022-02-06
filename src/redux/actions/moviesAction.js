import * as t from '../constants/types'
import axios from 'axios'
import absoluteUrl from 'next-absolute-url'

export const fetchMovies = (req) => async dispatch => {
    console.log('TRIGGERED')
    try {
        const { origin } = absoluteUrl(req)
        const { data } = await axios.get(`${origin}/api/movies`)
        dispatch({
            type: t.GET_MOVIES,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: t.GET_MOVIES_FAILED,
            payload: error
        })
    }


}

export const getMovies = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/api/movies')
        dispatch({
            type: t.GET_MOVIES,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: t.GET_MOVIES_FAILED,
            payload: error
        })
    }
}