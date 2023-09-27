import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NoticiasLink.module.css'

export default function NoticiaLink({titulo,data,id,onDelete}) {
  return (
    <li className={styles.noticia}>
        <Link to={`/noticias/${id}`} ><h2 className={styles.titulo}>{titulo}</h2></Link>
        <div className={styles.spans}>
          <span className={styles.data}>{formatarData(new Date(data))}</span>
          <Link to={`/noticias/editar/${id}`} className={styles.buttons}>Editar</Link>
          <p onClick={()=>onDelete(id)} className={`${styles.buttons} ${styles.excluir}`}>Excluir</p>
        </div>
    </li>
  )
}
function formatarData(data) {
  var dia = data.getDate().toString().padStart(2, '0');
  var mes = (data.getMonth() + 1).toString().padStart(2, '0'); // O mês é baseado em zero
  var ano = data.getFullYear();
  var hora = data.getHours().toString().padStart(2, '0');
  var minutos = data.getMinutes().toString().padStart(2, '0');

  return dia + '/' + mes + '/' + ano + ' ' + hora + ':' + minutos;
}