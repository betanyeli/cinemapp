import * as t from '../constants/types'

export const setMovies = (movies) => ({
    type: t.SET_MOVIES,
    movies
})

export const getMovies = (movies) => ({
    type: t.GET_MOVIES,
    movies
})

export const getMoviesFailed = (error) => ({
    type: t.GET_MOVIES_FAILED,
    error
});

