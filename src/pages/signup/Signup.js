import React, { useState } from "react";
import "./Signup.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase/config";

// import { useSignup } from "../../hooks/useSignup";

function Signup() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [displayname, setdispalyname] = useState("");
  // const [thumbnail, setthumbnail] = useState(null);
  // const { signup, isPending, error } = useSignup();
  function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(email, password, displayname);
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    const message = document.getElementById("successfull-message");
    message.innerText = "Hey, " + displayname + " Registration got succesfull";
    sleep(4000);
    message.innerText = "";
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

        <button className="btn">Register</button>
      </form>
      <hr></hr>
      <div className="login-btn">
        <p>Already Registred ?</p>
        <button className="btn">
          <a href="/login">Login</a>
        </button>
      </div>
      <p id="successfull-message" className="successfull-message-calss"></p>
    </div>
  );
}

export default Signup;
