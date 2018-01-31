import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from 'redux-form'
import {configs} from './reducers/configsReducer'
import {accounts} from './reducers/accountsReducer'
import {refunds} from './reducers/refundsReducer'

const configureStore = () => {
    const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
    const reducers = combineReducers({
        form: formReducer,
        refunds,
        accounts,
        configs
    });

    return createStore(
        reducers,
        reduxDevTools,
        applyMiddleware(thunkMiddleware)
    );
};

export default configureStore;