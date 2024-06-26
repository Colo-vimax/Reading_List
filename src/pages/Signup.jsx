import React, { useState } from 'react'
import  useSignup from "../hooks/useSignup";

const Signup = () => {
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")
  const { error, signup } = useSignup()


  const handleForm = (e) => {
    e.preventDefault()
    signup(email,password);    
  }
  return (
    <div>
      <h2>Signup</h2>
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
        <button>sign up</button>
        { error && <p>{error}</p> }
      </form>
    </div>
  )
}

export default Signup