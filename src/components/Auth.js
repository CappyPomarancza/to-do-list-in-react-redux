import React from 'react'
import { connect } from 'react-redux'
import LogInByEmailAndPassword from './LogInByEmailAndPassword'
import { 
    onEmailChangeAction,
    onPasswordChangeAction,
    onLogInClickAction,
    logOutAction
} from '../state/auth'

const Auth = (props) => (
    <div>


    </div>
)

const mapStateToProps= state => ({
    _task: state.auth.user,
    _emailValue: state.auth.email,
    _passwordValue: state.auth._password
})

const mapDispatchToProps = dispatch=> ({
    _onEmailChange: event => dispatch(onEmailChangeAction()),
    _onPasswordChange: event => dispatch(onPasswordChangeAction()),
    _onLogInClick: () => dispatch(onLogInClickAction()),
    _onLogOutClick : () => dispatch(logOutAction())
})

export default connect(
    mapStateToProps, mapDispatchToProps
)(Auth)