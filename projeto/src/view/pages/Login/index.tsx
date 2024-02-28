import React from 'react';
// import './LoginScreen.css'; // Estilos CSS para a tela de login

const LoginScreen: React.FC = () => {
    return (
        <div className="login-container">
            <div className="background-image" />
            <div className="login-form-container">
                <h2>Login</h2>
                <form className="login-form">
                    <input type="text" placeholder="Nome de usuário" />
                    <input type="password" placeholder="Senha" />
                    <div className="login-options">
                        <a href="#">Esqueceu a senha?</a>
                        <button type="submit">Entrar</button>
                    </div>
                </form>
                <div className="register-link">
                    <p>Ainda não tem uma conta? <a href="#">Cadastre-se</a></p>
                </div>
            </div>
        </div>
    );
}

export default LoginScreen;