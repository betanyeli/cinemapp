// import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
// import reducers from './reducers/reducers'
// import { composeWithDevTools } from 'redux-devtools-extension'

// const initialState = {}
// const middleware = [thunk]
// const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)))

// export default store

import { createStore, applyMiddleware } from 'redux';
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers/reducers'

const bindMiddlware = (middlware) => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension')
        return composeWithDevTools(applyMiddleware(...middlware))
    }

    return applyMiddleware(...middlware)
}

const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload
        }
        return nextState
    } else {
        return reducers(state, action)
    }
}

const initStore = (initialState = {}) => {
    return createStore(reducer, initialState, bindMiddlware([thunkMiddleware]))
}

export const wrapper = createWrapper(initStore)