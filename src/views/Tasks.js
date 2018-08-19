import React from 'react'
import { connect } from 'react-redux'
import NewTaskForm from './NewTaskForm'
import {addNewTasksAction} from '../state/tasks'


const Tasks = (props) => (
    <div>
        {
            props._isTasksAreLoading ?
                'LOADING TASKS.....'
                :
              
                    props._tasks ? Array.from(props._tasks).map(el => (
                        <div>
                           {el}
                        </div>
                    ))
                    &&   <NewTaskForm
                    onAddNewTaskClick={props._onAddNewTaskClick}
                    textValue={props._textValue}
                />
                    :
                    'NO TASKS!'

        }
    </div>
)


const mapStateToProps = state => ({
    _tasks: state.auth.user,
    _isTasksAreLoading: state.tasks.isTasksAreLoading,
    _textValue: state.tasks.text
})

const mapDispatchToProps = dispatch => ({
    _onAddNewTaskClick: () => dispatch(addNewTasksAction())
})

export default connect(
    mapStateToProps, mapDispatchToProps
)(Tasks)