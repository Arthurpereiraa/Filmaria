import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import './favoritos.css'


export default function Favoritos() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        try {
            const minhaLista = localStorage.getItem('@primeflix')
            setFilmes(JSON.parse(minhaLista))
        } catch (error) {
            console.error('Deu erro nos livros salvos', error );
            toast.error('Deu erro nos livros salvos')
            setFilmes([])
        }
    }, [])

    function Deletar(id){
        const confirma = window.confirm('Tem certeza que deseja excluir este filme?')

        if(!confirma){
            return;
        }

        try {
            const filmeFiltrado = filmes.filter((item) => item.id !== id)
            setFilmes(filmeFiltrado);
            localStorage.setItem('@primeflix', JSON.stringify(filmeFiltrado));
            toast.success("Filme apagado com sucesso")    
        } catch (error) {
            console.error('Ocorreu algum erro ao apagar o filme', error);
            toast.error("Ocorreu algum erro ao apagar o filme");
        }
    }

    return(
        <div className="container">
            <div className="meus-filmes">
                <h1>Meus filmes favoritos</h1>
                {filmes.length === 0 && (
                    <h3 className="lista-vazia">Você não salvou nenhum filme</h3>
                )}

                <ul>
                    {filmes.map((item) => (
                        <li key={item.id}>
                            <span>{item.nome}</span>
                            <div className="acoes">
                                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                                <button onClick={() => Deletar(item.id)}>Excluir</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
    
}
