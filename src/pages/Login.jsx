import React, { useState } from 'react'
import useLogin from '../hooks/useLogin'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const{ error, login } = useLogin()
  
  const handleForm = (e) => {
    e.preventDefault()

    login(email, password);

  }
  return (
    <div>
      <form onSubmit={handleForm}>
        <label>
            <span>email:</span>
            <input
              required
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
          <label>
            <span>password:</span>
            <input
              required
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </label>
          <button>log in</button>
          { error && <p>{error}</p> }
      </form>
    </div>
  )
}

export default Login