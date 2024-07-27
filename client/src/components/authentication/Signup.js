import React, { useState  } from "react";

import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
  const [credentials , setCredentials] = useState({name:"",userName:"",confirmpassword:"",email:"",password:""});
  let navigate = useNavigate()
  const onSumbitHandler = async (e) =>{
      e.preventDefault();
      const response = await fetch('http://localhost:5000/api/auth/', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body:JSON.stringify({name:credentials.name, email:credentials.email,userName:credentials.userName, password:credentials.password})
        });
      
      const json = await response.json();

      if(json.flag){
      localStorage.setItem('token',json.authtoken)
      props.showAlert("Created Sucessfully","success")
      navigate("/home")}
      else {
        props.showAlert("Error","danger")
      }
  }

  const onChangeHandler = (e)=>{
      setCredentials({
          ...credentials,
          [e.target.name]: String(e.target.value).trim()
      })
  }

  return (
  <div className="container ">
<form onSubmit={onSumbitHandler}>
<div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" name="name" id="name" aria-describedby="emailHelp" onChange={onChangeHandler}/>
  </div>
  <div className="mb-3">
    <label htmlFor="uerName" className="form-label">UserName</label>
    <input type="text" className="form-control" name="userName" id="uerName" aria-describedby="emailHelp" onChange={onChangeHandler}/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">email</label>
    <input type="email" className="form-control" name="email" id="email" onChange={onChangeHandler}/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" name="password" id="password" onChange={onChangeHandler}/>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  </div>
  );
};

export default Signup