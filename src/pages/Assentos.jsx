import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getAssentos, reservarAssentos } from "../services/api";
import styled from "styled-components";
import { TituloH2 } from "../components/Titulo";
import Assento from "../components/Assento";

// Função que renderiza a página de seleção de assentos
export default function Assentos() {
    const { idSessao } = useParams();
    const navigate = useNavigate();
    const [sessao, setSessao] = useState(null);
    const [assentosSelecionados, setAssentosSelecionados] = useState([]);
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");

    useEffect(() => {
        getAssentos(idSessao)
            .then((res) => setSessao(res.data))
            .catch((err) => console.error("Erro ao carregar assentos:", err));
    }, [idSessao]);

    const selecionarAssento = (assento) => {
        if (!assento.isAvailable) {
            alert("Esse assento não está disponível");
            return;
        }
        setAssentosSelecionados((prev) =>
            prev.includes(assento.id)
                ? prev.filter((id) => id !== assento.id)
                : [...prev, assento.id]
        );
    };

    const reservar = () => {
        if (assentosSelecionados.length === 0) {
            alert("Selecione pelo menos um assento!");
            return;
        }

        const dadosReserva = {
            ids: assentosSelecionados,
            name: nome,
            cpf: cpf
        };

        console.log("📢 Enviando reserva para API:", dadosReserva);

        reservarAssentos(dadosReserva)
            .then((res) => {
                console.log("✅ Assentos reservados com sucesso!", res);

                // Enviar dados para a tela de sucesso
                navigate("/sucesso", {
                    state: {
                        nome,
                        cpf,
                        assentos: assentosSelecionados,
                        filme: sessao.movie.title,
                        data: sessao.day.date,
                        horario: sessao.name
                    }
                });
            })
            .catch((err) => {
                console.error("❌ Erro ao reservar assentos:", err);
                alert("Erro ao processar a reserva. Verifique os dados e tente novamente.");
            });
    };

    return (
        <Container>
            <TituloH2>Selecione o(s) assento(s)</TituloH2>
            <GridAssentos>
                {sessao && sessao.seats ? (
                    sessao.seats.map((assento) => (
                        <Assento
                            key={assento.id}
                            id={assento.id}
                            name={assento.name}
                            isAvailable={assento.isAvailable}  // 🔥 Agora passando booleano real
                            selecionado={assentosSelecionados.includes(assento.id)}  // 🔥 Agora booleano real
                            onClick={() => selecionarAssento(assento)}
                        />
                    ))
                ) : (
                    <Paragrafo>Carregando assentos...</Paragrafo>
                )}
            </GridAssentos>

            <LinhaSeparadora />

            <Formulario>
                <Label>Nome do comprador(a)</Label>
                <Input
                    type="text"
                    placeholder="Digite seu nome..."
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />

                <Label>CPF do comprador</Label>
                <Input
                    type="text"
                    placeholder="Digite seu CPF..."
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                />

                <BotaoReservar onClick={reservar}>Reservar assento(s)</BotaoReservar>
            </Formulario>
        </Container>
    );
}

// Estilização da página de seleção de assentos
const Container = styled.div`
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #212226;
    min-height: 100vh;
`;

const GridAssentos = styled.div`
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    gap: 10px;
    justify-content: center;
    margin-top: 20px;
`;


const LinhaSeparadora = styled.div`
    width: 100%;
    max-width: 338px;
    height: 1px;
    background-color: #4e5a65;
    margin: 20px 0;
`;

const Formulario = styled.div`
    width: 100%;
    max-width: 338px;
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
    font-family: "Sarala", sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #ffffff;
    margin-bottom: 5px;
`;

const Input = styled.input`
    width: 100%;
    height: 40px;
    border: 1px solid #d4d4d4;
    border-radius: 8px;
    background: #ffffff;
    padding-left: 10px;
    font-family: "Roboto", sans-serif;
    font-style: italic;
    color: #AFAFAF;
    line-height: 18.75px;
    font-size: 16px;
    margin-bottom: 15px;
`;

const BotaoReservar = styled.button`
    width: 338px;
    height: 42px;
    border-radius: 8px;
    font-size: 18px;
    font-weight: 700;
    line-height: 29.35px;
    color: #2B2D36;
    background-color: #EE897F;
    border: none;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background-color: #f57272;
    }
`;

const Paragrafo = styled.p`
    color: white;
    font-size: 16px;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
    margin-top: 20px;
`;
