import axios from "axios";

// URL base da API
const BASE_URL = "https://mock-api.driven.com.br/api/v5/cineflex";

// Funções que fazem requisições à API
export const getFilmes = () => axios.get(`${BASE_URL}/movies`);
export const getSessoes = (idFilme) => axios.get(`${BASE_URL}/movies/${idFilme}/showtimes`);
export const getAssentos = (idSessao) => axios.get(`${BASE_URL}/showtimes/${idSessao}/seats`);
export const reservarAssentos = (data) => axios.post(`${BASE_URL}/seats/book-many`, data);
