import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'

// DUCKS REDUCERS
import counterReducer from './ducks/counter'
import userReducer from './ducks/user'
import activitiesReducer from './ducks/activities'

// REDUX SAGA
import createSagaMiddleware from 'redux-saga'
import { watcherSaga } from './sagas/rootSaga'

const reducer = combineReducers({
    counter: counterReducer,
    user: userReducer,
    activities: activitiesReducer
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware]

const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga)

export default store