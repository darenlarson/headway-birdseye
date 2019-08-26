import React from "react";
import { Link } from "react-router-dom";
import '../css/Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  // Handler for entering form data to state
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // Submits form and invokes loginUser()
  handleSubmit = e => {
  };

  render() {
    return (
      <div className="login-wrapper">



        <form className="login-form" onSubmit={this.handleSubmit}>

          <label for="email">Email Address</label>
          <input required type="text" id="email" name="username" onChange={this.handleChange} value={this.state.username} placeholder="Email Address" />

          <label for="password">Password</label>
          <input required type="password" id="password" name="password" onChange={this.handleChange} value={this.state.password} placeholder="Password" />

          <Link to="/task-manager"><button type="submit">SIGN IN</button></Link>

        </form>

        <button className="create-account-btn">CREATE AN ACCOUNT</button>
        
        <p>FORGOT PASSWORD</p>




      </div>
    );
  }
}

export default Login;
