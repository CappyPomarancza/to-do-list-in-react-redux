import { database } from '../firebaseConfig'
import { setTaskAction } from './auth';

const SET_TASKS = 'tasks/SET_USERS'
const TASKS_STARTED_LOADING = 'tasks/TASKS_STARTED_LOADING'
const TASKS_STOPPED_LOADING = 'tasks/TASKS_STOPPED_LOADING'
const ADD_NEW_TASK = ' tasks/ADD_NEW_TASK'


export const tasksStartedLoadingAction = () => (
    {
        type: TASKS_STARTED_LOADING
    }
)

export const tasksStoppedLoadingAction = () => (
    {
        type: TASKS_STOPPED_LOADING
    }
)

export const setTasksAction = (data) => (
    {
        type: SET_TASKS,
        data
    }
)

export const addNewTasksAction = (value) => (
    {
        type: ADD_NEW_TASK,
        value
    }
)
export const fetchTasksAction = () => (dispatch, getState) =>{
    dispatch(tasksStartedLoadingAction())
    database.ref('/to-do-list')
        .on(
            'value',
            snapshot => {
                const data = snapshot.val()
                dispatch(setTaskAction(data))
                dispatch(tasksStoppedLoadingAction())
            })
}


const initialState = {
    tasks: null,
    isTasksAreLoading: false,
    text: ''
}



export default (state = initialState, action) => {
    switch (action.type) {
        case SET_TASKS:
            return {
                ...state,
                tasks: action.data
            }
        case ADD_NEW_TASK:
            return {
                ...state,
                text: action.value
            }
        case TASKS_STARTED_LOADING:
            return {
                ...state,
                isTasksAreLoading: true
            }
        case TASKS_STOPPED_LOADING:
            return {
                ...state,
                isTasksAreLoading: false
            }
        default:
            return state
    }
}