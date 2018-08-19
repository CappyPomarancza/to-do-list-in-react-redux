import React from 'react'
import { connect } from 'react-redux'
import { addTaskClickAction } from '../state/tasks'

const NewTaskForm = (props) => (
    <div>
        <input
            type='text'
            value={props._textValue}
        />
        <button
            onClick={props._onAddNewTaskClick}
        >
            Add New Task
        </button>
    </div>
)


const mapStateToProps = state => ({
    _textValue: state.tasks.text
})

const mapDispatchToProps = dispatch => ({
    _onAddNewTaskClick: () => dispatch(addTaskClickAction())
})

export default connect(
    mapStateToProps, mapDispatchToProps
)(NewTaskForm)