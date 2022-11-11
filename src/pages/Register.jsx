import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {

  const [user, setUser] = useState({
    firstname:"",
    lastname:"",
    username:"",
    password:"",
    email:"",
    contact:"",
    dob:""
  })
  const [err, setErr] = useState(null)
  const navigate = useNavigate()

  const handleChange = (e)=>{
    setUser((prev) => ({...prev, [e.target.name]:e.target.value}))  
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    try {
       await axios.post("http://localhost:5000/register", user)
       navigate("/login")
    } catch (error) {
      setErr(error.response.data)
    }
  }

  return (
    <div className="login">
      <h1>Registration From</h1>
      <form className="form">
      <input type="text" required name="firstname" onChange={handleChange} placeholder="First Name"  />        
      <input type="text" name="lastname" onChange={handleChange} placeholder="Last Name" required/>        
      <input type="text" name="username" onChange={handleChange} placeholder="Username"  required/>        
      <input type="text" name="password" onChange={handleChange} placeholder="Password"  required/>        
      <input type="text" name="email" onChange={handleChange} placeholder="Email" required/>        
      <input type="number" name="contact" onChange={handleChange} placeholder="Contact" required/>        
      <input type="date" name="dob" onChange={handleChange}  required/>        
      { err &&  <p className='error'>{err}</p> }
      <button onClick={handleSubmit}>Register</button>
      <p>Already a user, <Link to="/login"> <u> <b>Login</b></u></Link></p>
      <p>Home page, <Link to="/"> <u> <b>Home</b></u></Link></p>
      </form>
    </div>
  )
}

export default Register
