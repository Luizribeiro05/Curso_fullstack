import React from 'react'

const TrabalhandoComImagens = () => {
  return (
    <div className='container'>
        <h1>Trabalhando com Imagens</h1>
        <div className='imagens'>
            <h2>Imagem da parata publica</h2>
            <img src='gear4.jpg' alt='imagem publica'/>
            <h2>Imagem assets</h2>
            <img src={Imagem} alt='Imagem de asset' />;
        </div>
    </div>
  )
}

export default TrabalhandoComImagens