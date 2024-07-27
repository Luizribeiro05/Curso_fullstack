import React, { useState , useEffect } from 'react'
import axios from 'axios'

const Noticias = () => {

  const [noticias, setNoticias] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/noticias").then(response => [
      setNoticias(response.data)
    ])
    .catch(error => console.error("Ocorreu um erro: ", error))
  }, [])

  return (
    <div>
      <h1>Pagina de Noticias</h1>
      {
        noticias.map(noticia => (
          <a href={`/visualizar-noticias/${noticia.id}`}><h2 key={noticia.id}>{noticia.titulo}</h2></a>
        ))
      }
    </div>
  )
}

export default Noticias