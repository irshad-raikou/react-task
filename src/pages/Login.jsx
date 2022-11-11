import axios from "axios";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { add, remove } from "../redux/userSlice";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  let storedName = useSelector((state) => state.user.username);
 
  const handleLogin =  async(e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/login",{username, password })
      dispatch(add({ username, password }));
      setUsername("")
      setPassword("")
      setError(null)
    } catch (error) {
      console.log(error)
      setError(error.response.data)
    }
  };

  const handleLogout = (e) => {
    e.preventDefault();
    setUsername("")
    setPassword("")
    setSuccess("");
    setError('');
    dispatch(remove());
  };

  return (
    <div className="login">
      {storedName ? <h1>Hello {storedName} </h1> : <h1>Login</h1>}
      <form className="form">
        <input type="text" placeholder="UserName" required name="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <input  type="text" placeholder="Password" required name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        { error &&  <p className='error'>{error}</p> }
        {storedName ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <button onClick={handleLogin}>Login</button>
        )}
        
        <p>Don't have an account, click here <Link to="/register"> <u> <b>Register</b></u></Link></p>
      <p>Home page, <Link to="/"> <u> <b>Home</b></u></Link></p>
      </form>
    </div>
  );
};

export default Login;
