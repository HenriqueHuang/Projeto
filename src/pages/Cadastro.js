import React from "react";
import '../Styles/Cadastro.css'
export default function Cadastro(){

    return(
        <form className="cadastro">
            <h1>Cadastro</h1>
            <div className="inputs">
                <label><input className="input" type="text" placeholder="First Name"/></label>
                <label><input className="input"type="text" placeholder="Last Name"/></label>
                <label><input className="input"type="email" placeholder="Email"/></label>
                <select className="input">
                    <option value="" placeholder="Perfil"></option>
                    <option value="Pesquisador">Pesquisador</option>
                    <option value="Respondente">Respondente</option>
                </select>
                <label><input className="input" type="password" placeholder="Password"/></label>
                <label><input className="input" type="password" placeholder="Confirm password"/></label>
                <label><input type="checkbox"/>Termos e condições</label>
            </div>
            <div className="CadastroSC">
                <input className="button" type="submit" value="Cadastrar"/>
            </div>
        </form>
        
    )
}

