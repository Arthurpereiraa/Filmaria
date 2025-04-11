import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import './home.css';

export default function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function carregarFilmes() {

        try {
            const response = await api.get("r-api/?api=filmes"); // ajuste a rota conforme sua API
            setFilmes(response.data);
        } catch (error) {
            console.error('Deu erro na api', error)
        }
     
    }
    carregarFilmes();
  }, []);

  return (
    <div className="container">
      <h1>Filmes em Cartaz 🎬</h1>
      <div className="lista-filmes">
        {filmes.map((filme) => (
          <article key={filme.id}>
            <h1>{filme.nome}</h1>
            <img src={filme.foto} alt={filme.nome} />
            <Link to={`/filme/${filme.id}`}>Acessar</Link>
          </article>
        ))}
      </div>
    </div>
  );
}
