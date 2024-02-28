import React from 'react';
import './css/cadastro.css';
import { Link } from 'react-router-dom';

const Cadastro = () => {
    return (
        <div>
            <Link to="/">
                <button>Voltar</button>
            </Link>
            <header>
                <h1>Cadaste-se</h1>
                <p>Preencha o formulário abaixo para realizar seu cadastro</p>
            </header>

        </div>
    );
}

export default Cadastro;
