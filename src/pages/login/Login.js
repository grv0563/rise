import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase/Firebase";


function Login() {
  const [email, setemail] = useState("example@gmail.com");
  const [passwd, setPasswd] = useState("null");
  const [result, setResult] = useState(0);

  const handleSubmit=(e)=>{
    e.preventDefault();
    setResult(email)
  }
  
  
  return (
    <div className="signup-page">
      <h2>Welcome to RISE !</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label className="emial-lable">Emial</label>
          <input
            className="input-field "
            type="email"
            onInput={(e) => {
              setemail(e.target.value);
            }}
            placeholder="Enter Emial"
          />
        </div>
        <div className="form-field">
          <label className="form-lable">Password</label>
          <input
            className="input-field"
            type="password"
            onInput={(e) => {
              setPasswd(e.target.value);
            }}
            placeholder="Enter Password"
          />
        </div>
        <div className="form-field">
          <button className="submit-btn"  type="submit">
            Submit
          </button>
        </div>
      </form>
      <h1>{result}</h1>
    </div>
  );
}

export default Login;
