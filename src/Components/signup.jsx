import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react"
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const [user_role, setuser_role] = useState("");
    const navigate = useNavigate();
    function handleSubmit(e){
        e.preventDefault();
        
        fetch("http://localhost:3000/signup",{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                email:email,
                password:password,
                confirmpassword:confirmpassword,
                user_role:user_role
            })
        })
        .then((res) =>res.text())
        .then((data) => {
            alert(data);
            if(data==="User registered successfully"){ 
                navigate("/");
            }            
        })
        .catch((err) =>{
            console.log(err)
        })
    }
  return (
    <div>

      <form onSubmit ={handleSubmit}>
        <h2>Signup</h2>

        <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />

        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <input type="password" placeholder="Confirm Password" value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)} />

        <select value={user_role} onChange={(e) => setuser_role(e.target.value)}>

          <option value="">Select your role</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>

        </select>

        <i>
          Already have an account?
          <Link to="/"> Login</Link>
        </i>

        <button type="submit">Signup</button>
      </form>

    </div>
  )
}

export default Signup