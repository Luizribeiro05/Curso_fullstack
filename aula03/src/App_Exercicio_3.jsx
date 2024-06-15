import React from 'react';
import './App.css';
import ListaDeLivros from './components/ListaDeLivros';

const App = () => {

  const livros = [
    { titulo : '1984' , autor: 'George Orwell' ,ano : 1949},
    { titulo : 'Código Lipo' , autor: 'Uncle Bob' , ano :2012 },
    { titulo : 'To Kill a Mockingbird' , autor: 'Harper Leee' , ano :1960 }
  ]
  return (
    <div className='container'>
      <h1>Lista de Livros</h1>
      <ListaDeLivros livros = {livros} />
    </div>
  )
}

export default App