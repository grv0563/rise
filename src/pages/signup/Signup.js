import React, { useState } from "react";
import './Signup.css'
function Signup() {
  const [email, setemail] = useState("example@gmail.com");
  const [passwd, setPasswd] = useState("null");
  const [result, setResult] = useState(0);
  function handleSubmit(e) {
    e.preventDefault();
    setResult("Email" + "  "+email +"Password   "+passwd);
  }
  return (
    <div className="signup-page">
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-field">
        <label className="emial-lable">Emial</label>
        <input
        className="input-field email-field"
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
        <button type="submit">Submit</button>
        </div>
      </form>
      <h1>{result}</h1>
    </div>
  );
}

export default Signup;
