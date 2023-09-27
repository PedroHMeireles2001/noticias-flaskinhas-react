
import React, { useState, useEffect } from 'react';
import NoticiaForm from '../../Components/NoticiaForm';
import { useNavigate, useParams } from 'react-router-dom';
import { atualizarRecurso, obterRecurso } from '../../Services/NoticiasServices';
import { useNoticias } from '../../Context/NoticiasContexts';

export default function EditarNoticia() {
  const navigate = useNavigate();
  const params = useParams();

  const [conteudo, setConteudo] = useState("");
  const [titulo, setTitulo] = useState("");

  const {updateNews} = useNoticias()
  useEffect(() => {
    if (params.id) {
      obterRecurso(params.id)
        .then((data) => {
          setConteudo(data.data.conteudo);
          setTitulo(data.data.titulo);
          console.log(data.data);
        })
        .catch((error) => {
          console.error('Erro ao buscar recurso:', error);
        });
    }
  }, [params.id]);

  function onClick(e) {
    e.preventDefault();
    atualizarRecurso(params.id, titulo, conteudo).then(()=>updateNews());
    navigate("/");
  }

  return (
    <NoticiaForm onClick={onClick} conteudo={conteudo} setConteudo={setConteudo} titulo={titulo} setTitulo={setTitulo} />
  );
}

