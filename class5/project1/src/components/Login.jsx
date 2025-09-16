import React from "react";

function Login() {

  function handleSubmit(event) {
    event.preventDefault(); // stop page reload

    const email = event.target.email.value;       // using event.target
    const password = event.target.password.value; // using event.target

    console.log("Email:", email);
    console.log("Password:", password);

   
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Welcome Back</h2>

        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" placeholder="Enter your email" required />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" placeholder="Enter your password" required />
        </div>

        <button type="submit" className="login-btn">Login</button>

        <p className="login-footer">
          Don't have an account? <a href="#">Sign Up</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
