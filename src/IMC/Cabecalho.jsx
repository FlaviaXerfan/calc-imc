import React from 'react'
import imagem from '../IMC/assets/foto.jpg'
import './App.css'


export default function Cabeçalho({titulo}) {
    
    return (
        <header>
            <h1>{titulo}</h1>
            <p></p>
            <img src={imagem} alt='foto' className='header-imagem' />
            <p></p>
        </header>
    )
}


