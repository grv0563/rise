import React, { useState } from "react";
import "./Signup.css";
// import { useSignup } from "../../hooks/useSignup";

function Signup() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [displayname, setdispalyname] = useState("");
  // const [thumbnail, setthumbnail] = useState(null);
  // const { signup, isPending, error } = useSignup();
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(email, password, displayname);
    setemail("");
    setpassword("");
    setdispalyname("");
  };
  return (
    <div className="auth-form">
      <form onSubmit={handlesubmit}>
        <h2>Sign up</h2>
        <label>
          <span>Email:</span>
          <input
            required
            type="email"
            onChange={(e) => {
              setemail(e.target.value);
            }}
            value={email}
          />
        </label>
        <label>
          <span>Password:</span>
          <input
            required
            type="password"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            value={password}
          />
        </label>
        <label>
          <span>Display Name :</span>
          <input
            required
            type="text"
            onChange={(e) => {
              setdispalyname(e.target.value);
            }}
            value={displayname}
          />
        </label>
        {/* <label>
        <span>Profile thumbnail:</span>
        <input required type="file" />
      </label> */}

        <button className="btn">Sign up</button>
      </form>
      <hr></hr>
      <div className="login-btn">
        <p>Already Registred ?</p>
      <button className="btn"><a href="/login">Login</a></button>
      </div>
    </div>
  );
}

export default Signup;
