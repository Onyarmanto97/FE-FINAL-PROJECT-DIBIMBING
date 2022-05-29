import "./register.css";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label className="registerLabel">Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter Your Username..."
        />
        <label className="registerLabel">Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter Your Email..."
        />
        <label className="registerLabel">Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter Your Password..."
        />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">Login</Link>
      </button>
    </div>
  );
}
