import React from "react";
import '../Styles/Login.css'
export default function Login(){

    return(
        <div className="login">
        <form>
            <h1>Sign In</h1>
            <div className="inputs">
                <label><input className="input" type="email" placeholder="Email"/></label>
                <label><input className="input" type="password" placeholder="Password"/></label>
            </div>
                <button className="button" onClick="">Sign In</button>
        </form>
        </div>
    )
}