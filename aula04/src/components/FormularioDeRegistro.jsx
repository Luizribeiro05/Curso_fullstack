import React, { useState } from 'react';

const FormularioDeRegistro = () => {
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmeSenha, setConfirmeSenha] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');

  const validarSenha = () => {
    if (senha === confirmeSenha) {
      return true;
    } else {
      setMensagemErro('As senhas não coincidem');
      return false;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault()

    if (validarSenha()) {
      const dadosDoForm = {
        usuario: usuario,
        email: email,
        senha: senha,
        endereco: endereco,
        telefone: telefone,
      };

      const jsonParaEnviarParaOBack = JSON.stringify(dadosDoForm);

      console.log(`O seguinte JSON será enviado via HTTP POST para o back-end: ${jsonParaEnviarParaOBack}`);
      setMensagemErro('');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='usuario'>Usuário: </label>
          <input
            type='text'
            id='usuario'
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='email'>Email: </label>
          <input
            type='text'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='senha'>Senha: </label>
          <input
            type='password'
            id='senha'
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='confirmeSenha'>Confirme a senha: </label>
          <input
            type='password'
            id='confirmeSenha'
            value={confirmeSenha}
            onChange={(e) => setConfirmeSenha(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='endereco'>Endereço: </label>
          <input
            type='text'
            id='endereco'
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='telefone'>Telefone: </label>
          <input
            type='text'
            id='telefone'
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </div>
        {mensagemErro && <p style={{ color: 'red' }}>{mensagemErro}</p>}
        <button type='submit'>Enviar</button>
      </form>
    </>
  );
};

export default FormularioDeRegistro;
