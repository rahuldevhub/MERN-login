import React from 'react'
import { Link } from 'react-router-dom';

const Firstscreen = () => {
  return (
    <div>
        <h1>Welcome to the website</h1>
      <h3>New user</h3>
      <Link to={'/register'}>
      <button>Register</button></Link>
<br/>
<br/>
<br/>
<br/>
      <h3>Already have an account</h3>
      <Link to={'/login'}>
      <button>Login</button></Link>
    </div>
  )
}

export default Firstscreen