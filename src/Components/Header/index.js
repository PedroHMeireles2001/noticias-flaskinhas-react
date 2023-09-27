import React from 'react'
import styles from './Header.module.css'; // Importe o módulo CSS
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className={styles.header}> {/* Aplicar a classe CSS com a notação de objeto */}
      <h1 className={styles.logo}>Notícias flaskinhas</h1>
      <nav className={styles.menu}>
        <ul>
          <li><Link to="/">Página Inicial</Link></li>
          <li><Link to="/noticias/criar">Novo</Link></li>
        </ul>
      </nav>
    </header>
  )
}
