import React, { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";
import './filme.css';

export default function Filme() {
  const { id } = useParams();
  const [filme, setFilme] = useState(null);

  useEffect(() => {
    async function carregarFilme() {
      try {
        const response = await api.get(`r-api/?api=filmes/${id}`);
        setFilme(response.data);
      } catch (error) {
        console.error("Filme não Encontrado", error);
      }
    }

    carregarFilme();
  }, [id]);

  function salvarFilme() {
    if (!filme) return;

    const minhaLista = localStorage.getItem('@primeflix');
    let filmesSalvos = JSON.parse(minhaLista) || [];

    const hasFilme = filmesSalvos.some((item) => item.id === filme.id);

    if (hasFilme) {
      toast.warn("Esse filme já está na sua lista!");
      return;
    }

    filmesSalvos.push(filme);
    localStorage.setItem('@primeflix', JSON.stringify(filmesSalvos));
    toast.success("Filme salvo com sucesso!");
  }

  if (!filme) {
    return <div>Carregando informações do filme...</div>;
  }

  return (
    <div className="container">
      <div className="filme-info">
        <article>
          <h1>{filme.nome}</h1>
          <img src={filme.foto} alt={filme.nome} />
          <h3>Sinopse</h3>
          <p>{filme.sinopse}</p>

          <div className="botoes">
            <button onClick={salvarFilme}>Salvar</button>
            <a
             className="botao-link" 
              href={`https://youtube.com/results?search_query=${filme.nome} trailer`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Trailer
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}
