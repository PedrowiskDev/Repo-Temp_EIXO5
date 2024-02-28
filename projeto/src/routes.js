import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./Home";
import Cadastro from "./cadastro";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" exact />
                <Route element={<Cadastro />} path="/cadastro" />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;