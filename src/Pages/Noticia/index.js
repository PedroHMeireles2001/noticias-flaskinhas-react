import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { obterRecurso } from '../../Services/NoticiasServices'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import styles from './noticia.module.css'

export default function Noticia() {
  const [noticia, setNoticia] = useState({titulo:"",conteudo:""})
  const params = useParams()
  useEffect(()=>{obterRecurso(params.id).then((data)=>setNoticia(data.data))},[])
  return (
    <article className={styles.noticia}>
      <h1 className={styles.titulo} >{noticia.titulo}</h1>
      <ReactMarkdown>{noticia.conteudo}</ReactMarkdown>
    </article>
  )
}
