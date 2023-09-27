import React, { useEffect, useState } from 'react'
import { excluirRecurso, obterRecursos } from '../../Services/NoticiasServices'
import NoticiasContainer from '../../Components/NoticiasContainer'
import { useNoticias } from '../../Context/NoticiasContexts'

export default function Home() {
  const {setNews,news,excluirNoticia,updateNews} = useNoticias()
  useEffect(()=>updateNews(),[])

  function excluir(id){
    if(window.confirm("Tem certeza??")){
      excluirRecurso(id)
      excluirNoticia(id)
    }
  }

  return (
    <NoticiasContainer news={news} onDelete={excluir}/>
  )
}


