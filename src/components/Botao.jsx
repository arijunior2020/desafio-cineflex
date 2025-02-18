import styled from "styled-components";
import PropTypes from "prop-types";

// Função que renderiza um botão
export default function Botao({ texto, onClick }) {
    return <StyledButton onClick={onClick}>{texto}</StyledButton>;
}

// Propriedades necessárias para renderizar um botão
Botao.propTypes = {
    texto: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

// Estilização do botão
const StyledButton = styled.button`
    padding: 10px;
    background: #E8833A;
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
`;
