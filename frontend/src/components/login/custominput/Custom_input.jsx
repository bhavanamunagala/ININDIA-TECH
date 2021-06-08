import React from "react";
import Styles from "./Custom_input.module.css";

export default function Custom_input(props) {
    return ( <div className = { Styles.custominput } >
        <input className = { Styles.input }
        placeholder = { props.placeholder }
        /> {
            props.iconImage != null ? (
                <img className={Styles.logo}
                src = { props.iconImage }
                alt = "icon" / >
            ) : null
        } </div>
    );
}