import React from 'react';
import '../css/LoginView.css';
import Login from '../components/Login';
import logo from '../assets/logo.png';
import loginWallpaper from '../assets/loginWallpaper.png';

const LoginView = props => {
  return (
    <div className="login-view-ctn">

      <section className="info-section">
        <div className="logo-ctn"><img src={logo} /></div>
        <h1>Welcome to Birdseye!</h1>
        <Login />
      </section>

      <div className="wallpaper">
        <img src={loginWallpaper} />
      </div>

    </div>
  )
}

export default LoginView;