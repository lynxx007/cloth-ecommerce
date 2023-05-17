import { compose, legacy_createStore as createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { rootReducer } from './root-reducer'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const loggerMiddleware = (store) => (next) => (action) => {
    if (!action.type) {
        return next(action)
    }
    console.log('type :', action.type);
    console.log('payload :', action.payload);
    console.log('current state :', store.getState());

    next(action)

    console.log('new state :', store.getState());
}

const middleWares = [loggerMiddleware]

const composedEnhancers = composeWithDevTools(applyMiddleware(...middleWares))

export const store = createStore(rootReducer, undefined, composedEnhancers)
