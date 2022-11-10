import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "../redux/userSlice";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  let storedName = useSelector((state) => state.user.name);
  let storedPassword = useSelector((state) => state.user.password);

  const handleLogin = (e) => {
    e.preventDefault();
    setName("")
    setPassword("")
    dispatch(add({ name, password }));
  };

  const handleVerify = (e) => {
    e.preventDefault();
    if (storedName === name && storedPassword === password) {
      setSuccess(true);
      setError(false);
    } else {
      setError(true);
      setSuccess(false);
    }
  };

  const handleLogout = (e) => {
    e.preventDefault();
    setName("")
    setPassword("")
    setSuccess("");
    setError('');
    dispatch(remove());
  };

  return (
    <div className="login">
      {storedName ? <h1>Hello {storedName} </h1> : <h1>Login</h1>}
      <form className="form">
        <input
          type="text"
          placeholder="Enter Your Name"
          required
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Your Password"
          required
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {storedName && <button onClick={handleVerify}>Verify</button>}

        {storedName ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <button onClick={handleLogin}>Login</button>
        )}
        
        {success ? <p>Credentials are Correct</p> : <p></p>}
        {error ? <p>Credentials Incorrect</p> : <p></p>}
     
      </form>
    </div>
  );
};

export default Login;
