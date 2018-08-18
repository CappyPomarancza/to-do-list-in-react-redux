import React from 'react'
//import { connect } from 'react-redux'



const LogInByEmailAndPassword = (props) => (
    <div>
        <div>
            <input
                type='email'
                value={props.emailValue}
                onChange={props.onEmailChange}
            />
        </div>
        <div>
            <input
                type='password'
                value={props.passwordValue}
                onChange={props.onPasswordChange}
            />
        </div>
        <div>
            <button
                onClick={props.onLogInClick}
            >
                LOGIN!
            </button>
        </div>
    </div>
)

export default LogInByEmailAndPassword