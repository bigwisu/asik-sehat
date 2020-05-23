import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducers/index'

import comments from './data/comments'
import posts from './data/posts'

const initialState = {
    posts,
    comments
};

export const initializeStore = (preloadedState = initialState) => {
    return createStore(
        rootReducer,
        preloadedState,
        composeWithDevTools(applyMiddleware())
    )
}