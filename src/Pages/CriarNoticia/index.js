
import React, { useState } from 'react'
import NoticiaForm from '../../Components/NoticiaForm'
import { criarRecurso } from '../../Services/NoticiasServices'
import { useNavigate } from 'react-router-dom'
import { useNoticias } from '../../Context/NoticiasContexts'

export default function CriarNoticia() {
  const navigate = useNavigate()
  const [conteudo, setConteudo] = useState("")
  const [titulo, setTitulo] = useState("")
  const {updateNews} = useNoticias()
  function onClick(e){
    e.preventDefault()
    criarRecurso(titulo,conteudo).then(()=>updateNews())
    navigate("/")
  }

  return (
    <NoticiaForm onClick={onClick} conteudo={conteudo} setConteudo={setConteudo} titulo={titulo} setTitulo={setTitulo}/>
  )
}


