import styled from "styled-components";
import PropTypes from "prop-types";

// Função que renderiza o formulário
export default function Formulario({ nome, setNome, cpf, setCpf }) {
    return (
        <StyledForm>
            <label>Nome do comprador</label>
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Digite seu nome..." />

            <label>CPF do comprador</label>
            <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} placeholder="Digite seu CPF..." />
        </StyledForm>
    );
}

// Propriedades necessárias para renderizar o formulário
Formulario.propTypes = {
    nome: PropTypes.string.isRequired,
    setNome: PropTypes.func.isRequired,
    cpf: PropTypes.string.isRequired,
    setCpf: PropTypes.func.isRequired,
};

// Estilização do formulário
const StyledForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    label {
        font-size: 14px;
        text-align: left;
    }

    input {
        padding: 8px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
`;
