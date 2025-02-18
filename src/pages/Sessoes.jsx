import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getSessoes } from "../services/api";
import styled from "styled-components";
import { TituloH2 } from "../components/Titulo";

// Função que renderiza a página de seleção de sessões
export default function Sessoes() {
    const { idFilme } = useParams();
    const [sessoes, setSessoes] = useState(null);

    useEffect(() => {
        getSessoes(idFilme)
            .then((res) => setSessoes(res.data))
            .catch((err) => console.error("Erro ao carregar sessões:", err));
    }, [idFilme]);

    return (
        <Container>
            <TituloH2>Selecione o horário</TituloH2>
            {sessoes ? (
                sessoes.days.map((dia) => (
                    <Dia key={dia.id}>
                        <Data>{dia.weekday}, {dia.date}</Data>
                        <Linha />
                        <Horarios>
                            {dia.showtimes.map((horario) => (
                                <EstilizadoLink to={`/assentos/${horario.id}`} key={horario.id}>
                                    <BotaoHorario>{horario.name}</BotaoHorario>
                                </EstilizadoLink>
                            ))}
                        </Horarios>
                    </Dia>
                ))
            ) : (
                <p>Carregando sessões...</p>
            )}
        </Container>
    );
}

// Estilização da página de seleção de sessões
const Container = styled.div`
    padding-top: 80px;
    background-color: #212226;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
`;

const Dia = styled.div`
    background-color: #2B2D36;
    padding: 15px;
    border-radius: 8px;
    width: 338px;
    min-height: 149px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 15px;
`;

const Data = styled.p`
    color: white;
    font-family: "Sarala", sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 32.61px;
    margin-bottom: 10px;
`;

const Linha = styled.div`
    width: 302px;  
    height: 1px;  
    background-color: #4E5A65;  
    margin-bottom: 20px; 
`;

const Horarios = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
`;

const BotaoHorario = styled.button`
    width: 84px;  
    height: 41px; 
    border-radius: 4px;
    border: 2px solid #EE897F; 
    background: transparent; 
    color: #EE897F; 
    font-family: 'Sarala', sans-serif; 
    font-size: 16px;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background: #EE897F;
        color: white;
    }
`;

const EstilizadoLink = styled(Link)`
    text-decoration: none;
`;