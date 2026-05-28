import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react"
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user_role,setuser_role] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        password: password,
        user_role : user_role
      })
    })
    .then((res)=> res.text())
    .then((data)=>{
      alert(data);
      if(data === "logged in successfully"){
         navigate("/home", {
          state: { email: email }
        });
      }
    })
    .catch((err)=>{
      console.log(err);
    })
  };
  return (
    <div className="container">

      <form onSubmit={handleSubmit}>
        <h2>Login</h2>

        <input type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>

        <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
         <select value={user_role} onChange={(e) => setuser_role(e.target.value)}>

          <option value="">Select your role</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select>
        <i>
          Don't have an account?
          <Link to="/signup"> Signup</Link>
        </i>

        <button type="submit">Login</button>

      </form>

    </div>
  )
}

export default Login