import React, { createContext, useContext, useEffect, useState } from 'react'
import { obterRecursos } from '../Services/NoticiasServices'

export const NoticiasContext = createContext()
NoticiasContext.displayName = "Noticias"

export default function NoticiasProvider({children}) {
    const [news, setNews] = useState([])
    
    return (
        <NoticiasContext.Provider
            value={{ news, setNews }}>
            {children}
        </NoticiasContext.Provider>
    )
}

export function useNoticias(){
    const { news, setNews } = useContext(NoticiasContext);
    function excluirNoticia(id){
        setNews(news.filter((nw)=> nw._id != id))
    }
    function inserirNoticia(id,titulo,conteudo){
        setNews([...news,{id:id,titulo:titulo,conteudo:conteudo}])
    }
    function updateNews(){
        obterRecursos().then((data)=>setNews(data.data))
    }
    return{
        setNews,
        news,
        updateNews,
        excluirNoticia,
        inserirNoticia
    }
}