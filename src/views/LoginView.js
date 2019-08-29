import React from 'react';
import '../scss/LoginView.scss';
import Login from '../components/Login';
import logo from '../assets/logo.png';
import loginWallpaper from '../assets/loginWallpaper.png';

const LoginView = props => {
  return (
    <div className="login-view-ctn">

      <section className="info-section">
        <div className="logo-ctn">
          <img src={logo} alt="MemSQL logo" />
        </div>
        <h1>Welcome to Birdseye!</h1>
        <Login history={props.history} />
      </section>

      <div className="wallpaper">
        <img src={loginWallpaper} alt="background" />
      </div>

    </div>
  )
}

export default LoginView;