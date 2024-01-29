
import React, { useState } from "react"
import "../CSS/login.css";
import { useNavigate } from "react-router-dom";
export default function (props) {
  const [email,setemail]=useState("");
  const [pass,setpass]=useState("");
  const [flag,setflag]=useState(0);
  const navigate=useNavigate()
  const settingemail=(prop)=>{
    setemail(prop.target.value);
  }
  const settingpass=(prop)=>{
    setpass(prop.target.value);
  }
  const show=()=>{
    // if(email=="" && pass==""){
    //   alert("please enter the required inputs")
    //   setflag(1);
    //   alert(flag);
    // }
    // if(email=="" && flag==0){
    //     alert("please enter your email");
    // }
    // if(pass=="" && flag==0){
    //     alert("please enter your password")
    // }
    if(email !="" && pass!=""){
        navigate("/Shop")
    }
  }
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Login</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={settingemail}
              value={email}
              required
              // value={emailvalue}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={settingpass}
              value={pass}
              required
             
              // value={passvalue}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={show}> 
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Dont have acount ? <a href="/Register">Sign in</a>
          </p>
        </div>
      </form>
    </div>
  )
}