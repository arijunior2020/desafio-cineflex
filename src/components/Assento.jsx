import styled from "styled-components";
import PropTypes from "prop-types";

// Função que renderiza um assento
export default function Assento({ id, name, isAvailable, selecionado, onClick }) {
    return (
        <StyledAssento
            onClick={isAvailable ? onClick : null}  
            isAvailable={isAvailable}
            selecionado={selecionado}
        >
            {isAvailable ? name : ""}
        </StyledAssento>
    );
}

// Propriedades necessárias para renderizar um assento
Assento.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired, 
    isAvailable: PropTypes.bool.isRequired,
    selecionado: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};

//`shouldForwardProp` impede `isAvailable` e `selecionado` de irem ao DOM
// Estilização do assento
const StyledAssento = styled.button.withConfig({
    shouldForwardProp: (prop) => !["isAvailable", "selecionado"].includes(prop)
})`
    width: 26px;
    height: 26px;
    border-radius: 50%;
    font-family: "Roboto", sans-serif;
    font-size: 11px;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: ${({ isAvailable }) => (isAvailable ? "pointer" : "not-allowed")};
    border: none;

    background-color: ${({ isAvailable, selecionado }) =>
        selecionado ? "#FADBC5" : isAvailable ? "#9DB899" : "#2B2D36"};

    border: ${({ selecionado }) => (selecionado ? "2px solid #EE897F" : "none")};

    color: ${({ isAvailable }) => (isAvailable ? "#2B2D36" : "transparent")};
`;
