import React from "react";
import LoginImage from "../../assets/Admin loginn-01 1.png";
import Logo from "../../assets/logo both.png";
import CustomInput from "./custominput/Custom_input";
import UserIcon from "../../assets/name 1.png";
import KeyIcon from "../../assets/key 1.png";
import Styles from "./Login.module.css";
import { Link } from "react-router-dom";

function AdminLogin() {
  return (
    <div className={Styles.login}>
      <img className={Styles.loginImage} src={LoginImage} alt="loginImage" />
      <div className={Styles.divider}></div>
      <div className={Styles.loginDetails}>
        <div className={Styles.logoDiv}>
          <img className={Styles.logo} src={Logo} alt="logo" />
        </div>
        <h3 className={Styles.title}>Login as a Admin user</h3>
        <CustomInput iconImage={UserIcon} placeholder="Enter Username" />
        <CustomInput iconImage={KeyIcon} placeholder="Enter Password" />
        <button className={Styles.loginButton}>Login</button>
        <Link to="/forget-password" className={Styles.forgetButton}>
          Forget Password
        </Link>
        <Link to="/venue-login" className={Styles.forgetButton}>
          Login as Venue user
        </Link>
      </div>
    </div>
  );
}
export default AdminLogin;
