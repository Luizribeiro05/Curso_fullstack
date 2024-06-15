import React from 'react'
import './App.css'
import Imagem from './assets/imagem2.jpg'
import TrabalhandoComImagensCondicionais from './components/TrabalhandoComImagensCondicionais';


const App = () => {
    return (
        <div>
            <TrabalhandoComImagensCondicionais tipo="PUBLIC" />
            <TrabalhandoComImagensCondicionais tipo="ASSET" />
        </div>
    );
}

export default App