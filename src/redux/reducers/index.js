const reducers = (state, action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return {
                ...state,
                movies: [...state.movies, action.movies]
            };
        case 'GET_MOVIES':
            return {
                ...state,
                movies: action.movies
            };

        default:
            return state
    }
}
export default reducers;
