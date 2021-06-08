import React,{useState} from "react";
import LoginImage from "../../assets/venu login.png";
import Logo from "../../assets/logo both.png";
import CustomInput from "./custominput/Custom_input";
import UserIcon from "../../assets/name 1.png";
import KeyIcon from "../../assets/key 1.png";
import { Link } from "react-router-dom";
import Styles from "./Login.module.css";
import {signin,authenticate} from  "../../auth/index.js"
import { fromString } from "uuidv4";


 

function Venuelogin() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false
  });

  const { email, password } = values;
  

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values });
    signin({ email, password })
      .then(data => {
        if (data) {
          setValues({ ...values });
        } else {
          authenticate(data, () => {
            setValues({
              ...values
            });
          });
        }
      })
      .catch(console.log("signin request failed"));
  };

  return (
    <div className={Styles.login}>
      <img className={Styles.loginImage} src={LoginImage} alt="loginImage" />
      <div className={Styles.divider}></div>
      <div className={Styles.loginDetails}>
        <div className={Styles.logoDiv}>
          <img className={Styles.logo} src={Logo} alt="logo" />
        </div>
        <h3 className={Styles.title}>Login as a Venue user</h3>
        <input
          className = { Styles.input }
          iconImage={UserIcon}
            onChange={handleChange("email")}
              value={email}
          placeholder="Enter Username" />
        <input iconImage={KeyIcon}
            onChange={handleChange("password")}
          value={password}
           className = { Styles.input }
          placeholder="Enter Password" />
        <button className={Styles.loginButton} onClick={onSubmit}>Login</button>
        <Link to="/forget-password" className={Styles.forgetButton}>
          Forget Password
        </Link>
        <Link to="/admin-login" className={Styles.forgetButton}>
          Login as Admin user
        </Link>
      </div>
    </div>
  );
}

export default Venuelogin;
