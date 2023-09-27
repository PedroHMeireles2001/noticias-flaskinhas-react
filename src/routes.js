import React from 'react'
import Base from './Pages/Base';
import Home from './Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Noticia from './Pages/Noticia';
import CriarNoticia from './Pages/CriarNoticia';
import EditarNoticia from './Pages/EditarNoticia';
import NoticiasProvider from './Context/NoticiasContexts';

export default function App() {
  return (
    <BrowserRouter>
    <NoticiasProvider>
      <Routes>
          <Route path='/' element={<Base />}>
            <Route index element={<Home />}/>
            <Route path='/noticias/criar' element={<CriarNoticia/>} />
            <Route path='/noticias/editar/:id' element={<EditarNoticia/>} />
            <Route path='/noticias/:id' element={<Noticia />}/>
          </Route>
      </Routes>
      </NoticiasProvider>
    </BrowserRouter>
  )
}
