import React,{Component} from "react";
import '../Styles/Home.css'
import NovasPesquizas from "./NovasPesquizas.js"
import listPesquizas from "../data/ListPesquizas.js"
//import Header from "../Componente Básico/Header";

class Home extends React.Component{
    constructor(){
        super()
        this.state={
            pesquizas: listPesquizas
        }
    }

    render(){
        const Pesquizas = this.state.pesquizas.map(element =>
            //<NovasPesquizas key={element.id} element={element}/>
            <NovasPesquizas key={element.id} {...element}/>
        )
        //{...element} --- link = {props.link} imagem = {props.imagem} titulo = {props.titulo} ...
    return(
        <div className="Home">
            <div className="Introducao">
                <h1>Observatório Online</h1>
            </div>
            <div className="Subscribe">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper condimentum ultrices. Cras euismod ornare laoreet. </p>
                <div id="subscribe">
                    <input className="input" type="email" placeholder="Enter your email"></input>
                    <button className="button">S U B S C R I B E</button>
                </div>
            </div>
            <div className="Pesquizas">
                {Pesquizas}
            </div>
            <div className="Contato">
                <div id="contato">
                    <h1>Contato</h1>
                    <label><input className="input"  type="email" placeholder="Email"></input></label>
                    <label><textarea placeholder="Write your message here"></textarea></label>
                    <button className="button">Enviar</button>
                </div>
                <h3>Instituto mackenzie</h3>
            </div>
        </div>
    )
    }
}

export default Home