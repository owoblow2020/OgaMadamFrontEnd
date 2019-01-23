import {createStore, applyMiddleware} from 'redux';
import {allReducer} from './reducers/allReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/RootSaga';

const sagaMiddleware = createSagaMiddleware();

const Store = createStore(allReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default Store;


