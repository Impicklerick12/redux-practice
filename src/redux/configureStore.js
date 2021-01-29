import { combineReducers, createStore, applyMiddleware } from 'redux';

// DUCKS REDUCERS
import counterReducer from './ducks/counter'
import userReducer from './ducks/user'
import activitiesReducer from './ducks/activities'
import { asyncActionsReducer } from './ducks/asyncActions'
import postsReducer from './ducks/posts'
import bitcoinReducer from './ducks/bitcoin'

// REDUX SAGA MIDDLEWARE
import createSagaMiddleware from 'redux-saga'
import { watcherSaga } from './sagas/rootSaga'

// REDUX THUNK MIDDLEWARE
import thunk from 'redux-thunk'

// ALL REDUCERS IN ONE OBJECT, IMPORTED FROM DUCKS
const reducer = combineReducers({
    counter: counterReducer,
    user: userReducer,
    activities: activitiesReducer,
    asyncActions: asyncActionsReducer,
    posts: postsReducer,
    bitcoin: bitcoinReducer
});

// STORE - CREATE STORE THROUGH REDUX, USING ALL REDUCERS, APPLYING MIDDLEWARE
const store = createStore(reducer, applyMiddleware(thunk));

export default store