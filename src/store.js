import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import tasks from './state/tasks'
import auth, { initAuthStateListening } from './state/auth'
import {fetchTasksAction} from './state/tasks'



const reducer = combineReducers({
  tasks: tasks,
  auth: auth

})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

store.dispatch(fetchTasksAction())
store.dispatch(initAuthStateListening())