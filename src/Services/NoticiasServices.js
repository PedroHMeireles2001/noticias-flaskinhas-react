import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/noticias', // Substitua pela URL da sua API
});

export const criarRecurso = async (titulo,conteudo) => {
  const formData = new FormData();
  formData.append('titulo', titulo);
  formData.append('conteudo', conteudo);
  return await api.post('/criar', formData);
};

export const obterRecursos = async () => {
  return await api.get('');
};
export const obterRecursoSync = (id) => {
  return api.get(`/${id}`);
};
export const obterRecurso = async (id) => {
  return await api.get(`/${id}`);
};
export const atualizarRecurso = async (id, titulo,conteudo) => {
  const formData = new FormData();
  formData.append('titulo', titulo);
  formData.append('conteudo', conteudo);
  return await api.put(`/${id}`, formData);
};

export const excluirRecurso = async (id) => {
  return await api.delete(`/${id}`);
};