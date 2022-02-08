import axios from 'axios'
import absoluteUrl from 'next-absolute-url'
import { getMovies, getMoviesFailed } from '../actions/actions'

export const fetchMovies = (req) => async dispatch => {
    try {
        const { origin } = absoluteUrl(req)
        await axios.get(`${origin}/api/movies`).then(data => {
            return dispatch(getMovies(data.data))
        })

    } catch (error) {
        dispatch(getMoviesFailed(error))
    }

}