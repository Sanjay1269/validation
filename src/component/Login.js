import React from 'react'

function Login() {
    return (
        <div>
            <label>email</label>
            <input type='email' name='email' placeholder='enter email'/>
            <br/>
            <br/>
            <label>password</label>
            <input type='password' name='password' placeholder='enter password' />
        </div>
    )
}

export default Login
