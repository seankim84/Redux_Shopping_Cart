import  { createStore, combineReducers } from 'redux';

const rootReducer = combineReducers({

})

const Store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default  Store;
