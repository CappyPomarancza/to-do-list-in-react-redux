import React from 'react'
import {connect} from 'react-redux'

const Tasks =(props) =>(
    <div>
        {
            props._isTasksAreLoading ? 
            'LOADING TASKS.....'
            :
            props._tasks ? Object.entries(props._tasks).map(e => Object.assign(e,{ 0: + e[0]}))
            :
            'NO TASKS!'

        }
    </div>
)


const mapStateToProps = state => ({
    _tasks: state.auth.task,
    _isTasksAreLoading: state.tasks.isTasksAreLoading
})

const mapDispatchToProps = dispatch => ({

})

export default connect(
    mapStateToProps, mapDispatchToProps
)(Tasks)