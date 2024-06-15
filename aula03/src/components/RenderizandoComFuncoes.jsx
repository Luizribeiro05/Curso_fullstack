import React from 'react'

const RenderizandoComFuncoes = () => {
    
    const escolhaDeRenderizacao = (oQueRenderizar) => {
        if ( oQueRenderizar === "PB"){
            return <h1>Paraiba</h1>
    } else {
        return <h2>João Pessoa</h2>
    }
}
  return (
    <div className='container'>
        <div className='renderizacao'>
            {escolhaDeRenderizacao("PB")}
            {escolhaDeRenderizacao("JP")}
        </div>
    </div>
  )
}

export default RenderizandoComFuncoes