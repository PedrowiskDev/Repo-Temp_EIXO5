import React from 'react';

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <header>
            <h1>{title}</h1>
            {/* Adicione outros elementos do header aqui, se necessário */}
        </header>
    );
}

export default Header;
