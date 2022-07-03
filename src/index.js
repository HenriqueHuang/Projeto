import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  ReactDOM  from "react-dom";
import Home from "./pages/Home.js";
import Header from "./Componente Básico/Header";
import Cadastro from "./pages/Cadastro.js";
import Login from "./pages/Login.js";

export default function App(){
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<Home />} />
              <Route path="cadastro" element={<Cadastro />} />
              <Route path="login" element={<Login />} />
            </Route>
          </Routes>
        </BrowserRouter>
      );
/*    return(
        <div>
          <Home/>
        </div>
    )*/
}

ReactDOM.render(
    <App/>,document.getElementById("root")
)

/*const root = ReactDOM.cratRoot(document.getElementById('root'));
root.render(<App/>);*/