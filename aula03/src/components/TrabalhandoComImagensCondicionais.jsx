import React from 'react';
import Imagem from '../assets/imagem2.jpg';

const TrabalhandoComImagensCondicionais = ({ tipo }) => {

    const renderizacaoCondicional = (tipo) => {
        if (tipo === 'PUBLIC') {
            return <img src='gear4.jpg' alt='Imagem pública' />;
        } else if (tipo === 'ASSET') {
            return <img src={Imagem} alt='Imagem de asset' />;
        } else {
            return null;
        }
    }

    return (
        <div>{renderizacaoCondicional(tipo)}</div>
    );
}

export default TrabalhandoComImagensCondicionais;