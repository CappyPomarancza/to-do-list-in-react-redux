import { auth as firebaseAuth } from '../firebaseConfig'


const EMAIL_CHANGE = 'auth/EMAIL_CHANGE'
const PASSWORD_CHANGE = 'auth/PASSWORD_CHANGE'
const SET_TASK = 'auth/SET_TASK'

export const onEmailChangeAction = (value) => (
    {
        type: EMAIL_CHANGE,
        value
    }
)

export const onPasswordChangeAction = (value) => (
    {
        type: PASSWORD_CHANGE,
        value
    }
)
export const setTaskAction = (task) => (
    {
        type: SET_TASK,
        task
    }
)

export const initAuthStateListening = () => (dispatchEvent, getState)
firebaseAuth.onAuthStateChanged(task => {
    dispatchEvent(setTaskAction(task))
    if(task){
        dispatchEvent(fetchTasksAction())
    }else{

    }
})

export const logOutAction = () => (dispatch, getState) => {
    firebaseAuth.signOut()
    .then(()=>console.log('SINGOUT OK'))
    .catch(()=>console.log('SIGNOUT ERROR'))
}

export const onLogInClickAction = () => (dispatch, getState) =>{
const state= getState()
firebaseAuth.signInWithEmailAndPassword(
    state.auth.email,
    state.auth.password
)
.then(()=>console.log('LOGIN OK'))
.catch(()=> console.log('LOGIN ERROR'))
}

const initialState = {
    email: '',
    password: '',
    tasks: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case EMAIL_CHANGE:
        return {
            ...state,
            email: action.value
        }
        case PASSWORD_CHANGE:
        return {
            ...state,
            password: action.value
        }
        case SET_TASK:
        return {
            ...state,
            task: action.task
        }
        default:
            return state
    }
}