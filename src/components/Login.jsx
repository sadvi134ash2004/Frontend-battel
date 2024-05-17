import { useState } from "react";
// import {Link} from "react-router-dom"; 
import axios from 'axios';
import { useNavigate } from "react-router-dom";
function Login() { 
  const[email,setEmail]=useState()
  const[password,setPassword]=useState()
  const [validate, setValidate] = useState("")
  const navigate= useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:8080/login',{email,password})
    .then(result=>{console.log(result)
      if(result.data==="Success"){
        setValidate("Login Sucessfully")
        navigate("/")
      }
      else{
        setValidate("Password Incorrect 🤬🤬")
      }
    })
    .catch(err=> console.log(err))
  }
  return ( 
    <div>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#6c757d', height: '100vh' }}>
      <div style={{ background: '#fff', padding: '1.25rem', borderRadius: '0.25rem', width: '25%',marginBottom:'2.3rem' }}>
        <h2 style={{color: 'black',marginBottom:'0.5rem'}}>Login</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginTop: '0.5rem' }}>
            <label htmlFor="email"><strong style={{color: 'black'}}>Email</strong></label>
            <input style={{padding:'0.25rem',width:'100%',color:'black'}}
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div style={{ marginBottom: '0.75rem' }}>
            <label htmlFor="password"><strong style={{color: 'black'}}>Password</strong></label>
            <input style={{padding:'0.25rem',width:'100%',color:'black'}}
              type="password"
              placeholder="Enter Password"
              autoComplete="off"
              name="password"
              className="form-control rounded-0"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" style={{ background: '#28a745', width: '100%', borderRadius: '0.25rem', border: 'none', color: '#fff',padding:'0.25rem',marginTop:'0.5rem' }}>Login</button>
          <span style={{color: "red"}}>{validate}</span>
        </form>
        {/* <p style={{color: 'black',marginBottom:'0.5rem',marginTop:'0.5rem'}}>Already Have An Account</p>
        <Link to='/login' className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"> Login</Link>
        <a href="/login" style={{ background: '#f8f9fa', width: '100%', border: '1px solid #dee2e6', borderRadius: '0.25rem', textDecoration: 'none', textAlign: 'center', display: 'block', color: '#000',marginTop:'0.5rem' }}>Login</a> */}
       
      </div>
    </div>
  </div>
    // </div>
  );
}
export default Login;
