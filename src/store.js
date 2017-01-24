import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from "redux-logger";
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

const logger = createLogger();

// import comments from './data/comments';
// const comments = [];
// import posts from './data/posts';

// create an object for the default data
const defaultState = {
  posts : [],
  comments : {}
};

// const store = createStore(rootReducer, defaultState);

const store = createStore(rootReducer,
    {},
    applyMiddleware(thunk, logger)
);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
