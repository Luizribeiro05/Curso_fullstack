import React from 'react'
import axios from 'axios'

const AdicionarAluno = () => {

    const urlBase = "http://localhost:3000"

    const addAluno = async () => {
        const response = await axios.post(`${urlBase}/alunos`, {
            nome: "Sicrano",
            email: "sicrano@gmail.com"
        })
        console.log("Aluno Adicinado com sucesso!")
        alert("Aluno cadastrado com sucesso!")
    }

  return (
    <div>
        <button onClick={addAluno}>Adcionar Sicrano</button>
    </div>
  )
}

export default AdicionarAluno