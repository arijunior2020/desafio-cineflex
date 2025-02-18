import { useEffect, useState } from "react";
import { getFilmes } from "../services/api";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { TituloH2 } from "../components/Titulo";

// Função que renderiza a página inicial
export default function Home() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        getFilmes()
            .then((res) => setFilmes(res.data))
            .catch((err) => console.error("Erro ao carregar filmes:", err));
    }, []);

    return (
        <Container>
            <TituloH2>Em Cartaz</TituloH2>
            {filmes.length > 0 ? (
                <ListaFilmes>
                    {filmes.map((filme) => (
                        <Filme key={filme.id} to={`/sessoes/${filme.id}`}>
                            <img src={filme.posterURL} alt={filme.title} />
                        </Filme>
                    ))}
                </ListaFilmes>
            ) : (
                <Paragrafo>Nenhum filme disponível no momento.</Paragrafo>
            )}
        </Container>
    );
}

// Estilização da página inicial
const Container = styled.div`
    background-color: #212226; 
    min-height: 100vh; 
    width: 100vw; 
    padding: 80px 20px 20px; 
    display: flex;
    flex-direction: column;
    align-items: center; 
    box-sizing: border-box; 
    margin: 0; 
    overflow-x: hidden; 
`;

const ListaFilmes = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`;

const Filme = styled(Link)`
    img {
        width: 150px;
        height: 220px;
        border-radius: 8px;
        transition: transform 0.3s;

        &:hover {
            transform: scale(1.05);
        }
    }
`;

const Paragrafo = styled.p`
    color: white;
    font-size: 16px;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
    margin-top: 20px;
    text-align: center;
`;
