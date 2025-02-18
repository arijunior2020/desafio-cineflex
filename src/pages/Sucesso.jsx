import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

// Função que renderiza a página de sucesso
export default function Sucesso() {
    const location = useLocation();
    const navigate = useNavigate();

    if (!location.state) return null;

    const { filme, sessao, assentos, nome, cpf } = location.state;

    return (
        <Container>
            <TituloH2>Pedido finalizado!</TituloH2>

            <Card>
                <Secao>
                    <TituloSecao>Filme e sessão</TituloSecao>
                    <Texto>{filme} </Texto>
                    <Texto>{sessao}</Texto>
                </Secao>

                <LinhaSeparadora />

                <Secao>
                    <TituloSecao>Ingressos</TituloSecao>
                    {assentos.map((assento, index) => (
                        <Texto key={index}>Assento {assento}</Texto>
                    ))}
                </Secao>

                <LinhaSeparadora />

                <Secao>
                    <TituloSecao>Comprador(a)</TituloSecao>
                    <Texto>Nome: {nome}</Texto>
                    <Texto>CPF: {cpf}</Texto>
                </Secao>
            </Card>

            <BotaoHome onClick={() => navigate("/")}>
                Voltar para tela inicial
            </BotaoHome>
        </Container>
    );
}

// Estilização da página de sucesso
const Container = styled.div`
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #212226;
    min-height: 100vh;
`;

const TituloH2 = styled.h2`
    font-family: "Sarala", sans-serif;
    font-size: 22px;
    font-weight: 700;
    color: #67A072;
    text-align: center;
    margin-bottom: 20px;
`;

const Card = styled.div`
    width: 338px;
    background-color: #2B2D36;
    padding: 20px;
    border-radius: 8px;
`;

const Secao = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const TituloSecao = styled.h3`
    font-family: "Sarala", sans-serif;
    font-size: 22px;
    font-weight: 700;
    color: #EE897F;
`;

const Texto = styled.p`
    font-family: "Sarala", sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: #FFFFFF;
`;

const LinhaSeparadora = styled.div`
    width: 100%;
    height: 1px;
    background-color: #4E5A65;
    margin: 10px 0;
`;

const BotaoHome = styled.button`
    width: 338px;
    height: 42px;
    border-radius: 8px;
    font-family: "Sarala", sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: #2b2d36;
    background-color: #ee897f;
    border: none;
    cursor: pointer;
    transition: 0.3s;
    margin-top: 20px;

    &:hover {
        background-color: #f57272;
    }
`;
