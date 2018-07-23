import { createStore, applyMiddleware, compose } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/rootReducer'

const crashReporter = store => next => action => {
    try {
        return next(action)
    } catch (err) {
        console.error('Caught an exception!', err)
        throw err
    }
}

const initialState = {}
const enhancers = []
const middleware = [
    promiseMiddleware(),
    thunk,
    crashReporter
]

if (window.devToolsExtension) {
    enhancers.push(window.devToolsExtension())
}


const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
)

const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers
)

export default store