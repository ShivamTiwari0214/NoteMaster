import React,{useState}from 'react'
// import  useHistory  from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
 const Login = (props) => {

    const [credentials , setCredentials] = useState({email:"",password:""});
    let navigate = useNavigate()
    const onSumbitHandler = async (e) =>{
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
            },
            body:JSON.stringify({email:credentials.email , password:credentials.password})
          });

        const json = await response.json();
        if(json.flag){
            // redirect
            localStorage.setItem('token',json.authtoken)
            props.showAlert("Sucess","success")
            navigate('/home')
        }
        else {
          props.showAlert("Invalid Credentials","danger")
        }
    }

    const onChangeHandler = (e)=>{
        setCredentials({
            ...credentials,
            [e.target.name]: String(e.target.value).trim()
        })
    }

  return (
    <div className='container my-3'>

    <form onSubmit={onSumbitHandler}>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email address</label>
      <input type="email" className="form-control" id="email" name='email' onChange={onChangeHandler} value={credentials.email} aria-describedby="emailHelp"/>
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label htmlFor="password" className="form-label">Password</label>
      <input type="password" className="form-control" name='password' onChange={onChangeHandler} value={credentials.password} id="password"/>
    </div>
    <button type="submit" className="btn btn-primary" >Login</button>
  </form>

  </div>
  )
}

export default Login ;