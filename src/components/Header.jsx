import styled from "styled-components";
import { TituloH1 } from "./Titulo";
import logo from "../assets/clapperboard.png";

// Função que renderiza o cabeçalho
export default function Header() {
    return (
        <Topo>
            <Container>
                <Logo src={logo} alt="Cineflex" />
                <TituloH1>Cineflex</TituloH1>
            </Container>
        </Topo>
    );
}

// Estilização do cabeçalho
const Topo = styled.header`
    width: 100%;
    height: 65px;
    background: #ee897f;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const Logo = styled.img`
    width: 40px;
    height: 40px;
`;
