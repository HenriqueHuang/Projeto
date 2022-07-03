import React from "react";
import { Outlet, Link } from "react-router-dom";
import '../Styles/Header.css'
function Header(){

    return(
        <>
        <header>
            <a className="links"><Link to="/">Observatorio  Online</Link></a>
            <div className="HbarraPesquiza">
            <input type="text"/>
            </div>
            <a className="links"><Link to="/">Sobre</Link></a>
            <a className="links"><Link to="cadastro">Cadastrar</Link></a>
            <a className="links"><Link to="login">Login</Link></a>
            
        </header>
        
        <Outlet/>
        </>
    )
}

export default Header