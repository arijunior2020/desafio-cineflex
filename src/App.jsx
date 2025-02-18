import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sessoes from "./pages/Sessoes";
import Assentos from "./pages/Assentos";
import Sucesso from "./pages/Sucesso";
import Header from "./components/Header";
import { createGlobalStyle } from "styled-components";

// Estilização global da aplicação
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body {
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;  
    background-color: #212226; 
  }
`;

// Função que renderiza a aplicação
function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sessoes/:idFilme" element={<Sessoes />} />
          <Route path="/assentos/:idSessao" element={<Assentos />} />
          <Route path="/sucesso" element={<Sucesso />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
