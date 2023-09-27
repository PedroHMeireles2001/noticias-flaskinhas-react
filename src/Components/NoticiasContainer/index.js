import React from 'react'
import NoticiaLink from '../NoticiaLInk'
import styles from './NoticiasContainer.module.css'

export default function NoticiasContainer({news,onDelete}) {

  return (
    <ol className={styles.container}>
        {news.map((nw)=><NoticiaLink onDelete={onDelete} titulo={nw.titulo} data={nw.data_publicacao} id={nw._id}/>)}
    </ol>
  )
}


