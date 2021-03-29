import {combineReducers,createStore , applyMiddleware} from 'redux';
import { PhimReducer } from './PhimReducer';
import reduxthunk from 'redux-thunk'
import {LoadingReducer} from './LoadingReducer';
// State tổng của ứng dụng
const rootReducer = combineReducers({
    PhimReducer : PhimReducer, 
    LoadingReducer : LoadingReducer
});

// Apply thunk để xử lý dispatch API
export const store = createStore(rootReducer,applyMiddleware(reduxthunk));
