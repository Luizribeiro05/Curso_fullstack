import React from 'react'
import styles from './EstacaoAno.module.css'

const EstacaoAno = (props) => {

    function defineTexto(estacao){
        if ( estacao === 'verão'){
            return "Tempo de praia e sol!"
        } else if ( estacao === 'outono'){
            return "Folhas caindo, outono chegando!"
        } else if ( estacao === 'inverno'){
            return "Época de frio e aconchego!"
        } else {
            return "Flores e cores, é primavera!"
        }
    }
    function defineCorDeFundo(estacao){
        if ( estacao === 'verão'){
            return styles.verao
        } else if ( estacao === 'outono'){
            return styles.outono
        } else if ( estacao === 'inverno'){
            return styles.inverno
        } else {
            return styles.primavera
        }
    }

  return (
    <div className={defineCorDeFundo(props.estacao)}>
        <p>{defineTexto(props.estacao)}</p>
    </div>
  )
}

export default EstacaoAno