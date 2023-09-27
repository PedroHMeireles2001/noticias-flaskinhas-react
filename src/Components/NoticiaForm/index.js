import React from 'react'
import MDEditor from '@uiw/react-md-editor'
import styles from './NoticiaForm.module.css'

export default function NoticiaForm({onClick,titulo,setTitulo,conteudo,setConteudo}) {
  return (
    <form className={styles.form}>
        <div>
            <label className={styles.label} htmlFor='titulo'>Titulo:</label>
            <input className={styles.titulo__input} id='titulo' onChange={(e)=>setTitulo(e.target.value)} value={titulo}/>
        </div>
        <div>
            <label className={styles.label} >Matéria:</label>
            <MDEditor style={{height:"100%"}} value={conteudo} onChange={setConteudo} />
        </div>
        <button onClick={(e)=>onClick(e)} className={styles.submit}>Salvar</button>
    </form>
  )
}
