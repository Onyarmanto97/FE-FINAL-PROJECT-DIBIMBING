import "./login.css"
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm">
            <label className="loginLabel">Email</label>
            <input type="text" className="loginInput" placeholder="Enter Your Email..." />
            <label className="loginLabel">Password</label>
            <input type="password" className="loginInput" placeholder="Enter Your Password..." />
            <button className="loginButton">Login</button> 
        </form>
            <button className="loginRegisterButton"><Link className="link" to="/register">Register</Link></button> 
            
    </div>
  )
}
