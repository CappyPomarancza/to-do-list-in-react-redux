import React from 'react'
import {connect} from 'react-redux'

const Tasks = () => (
    <div>

    </div>
)



const mapStateToProps = state => ({
    _tasks: state.fetchTasks.users,
    _isTasksAreLoading: state.fetchTasks.isTasksAreLoading
})

const mapDispatchToProps = dispatch => ({

})

export default connect(
    mapStateToProps, mapDispatchToProps
)(Tasks)