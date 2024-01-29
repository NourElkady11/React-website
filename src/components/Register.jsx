import React, {useState} from 'react';
import '../CSS/reg.css';
import { useNavigate } from 'react-router-dom';
function RegistrationForm() {
    const navigate=useNavigate();
    const[firstname,setfirst]=useState("");
    const[lname,setlname]=useState("");
    const[email,setemail]=useState("");
    const[pass,setpass]=useState("");
    const[confirmpass,setconfirmpass]=useState("");
    const f=(prop)=>{
        setfirst(prop.target.value)
    }
    const l=(prop)=>{
        setlname(prop.target.value)
    }
    const e=(prop)=>{
        setemail(prop.target.value)
    }
    const p=(prop)=>{
        setpass(prop.target.value);
    }
    const c=(prop)=>{
        setconfirmpass(prop.target.value);
    }
    function checkfeild(){
        if(firstname=="" || lname=="" || email=="" || pass=="" || confirmpass==""){
            alert("Enter the required feilds")
            
        }
        else{
            if(pass != confirmpass){
                alert("Password in not matching");
            }
            else{
                navigate("/Shop")
            }

        }
       
    }
    return(
      <div className="form">
          <div className="form-body">
          <h3 className="Auth-form-title zo2">Register</h3>
              <div className="username">
                  <label className="form__label" for="firstName" >First Name </label>
                  <input className="form__input" type="text" id="firstName" placeholder="First Name" required onChange={f}/>
              </div>
              <div className="lastname">
                  <label className="form__label" for="lastName">Last Name </label>
                  <input  type="text" name="" id="lastName" className="form__input" placeholder="LastName" required onChange={l}  />
              </div>
              <div className="email">
                  <label className="form__label" for="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email" required onChange={e} />
              </div>
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input"  type="password" id="password" placeholder="Password" required onChange={p}/>
              </div>
              <div className="confirm-password">
                  <label className="form__label" for="confirmPassword" >Confirm Password </label>
                  <input className="form__input"  type="password" id="confirmPassword" placeholder="Confirm Password" required onChange={c}/>
              </div>
              <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={checkfeild}>
              Submit
            </button>
          </div>
          </div>
        
      </div>      
    )       
}
export default RegistrationForm;