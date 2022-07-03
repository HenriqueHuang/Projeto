import React from "react";

export default function NovasPesquizas(props){
    return(
        <div className="NovasPesquisas">
            <a href={props.link}>
            <img src={props.imagem} alt={props.titulo}/>
            </a>
            <p>{props.descricao}</p>
        </div>
    )
}


/*export default function NovasPesquizas({link,imagem,titulo,descrisao}){
    return(
        <div className="NovasPesquisas">
            <a href={link}>
            <img src={imagem} alt={titulo}/>
            </a>
            <p>{descricao}</p>
        </div>
    )
}*/