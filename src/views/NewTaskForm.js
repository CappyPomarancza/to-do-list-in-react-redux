import React from 'react'
import { connect } from 'react-redux'

const NewTaskForm = (props) => (
    <div>
        <input
        type='text'
        value={props.textValue}
        />
        <button
        onClick={props.onAddNewTaskClick}
        >
            Add New Task
        </button>
        </div>
)


const mapStateToProps = state =>({
_text: state.tasks.text
})

const mapDispatchToProps = dispatch =>({
    
})

export default connect(
    mapStateToProps, mapDispatchToProps
)(NewTaskForm)