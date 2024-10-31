import React, { useState } from 'react'

export default function Calculadora() {
    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");
    const [resultado, setResultado] = useState("");

    const calcularIMC = () => {
        const alturaMetros = altura / 100;
        const imc = peso / (alturaMetros * alturaMetros);
        let classificacao = "";

        if (imc < 18.5) {
            classificacao = "abaixo do peso. Você precisa comer mais e melhor!";
            } else if (imc >= 18.5 && imc <= 24.9) {
                classificacao = "com o peso adequado (eutrofia). Parabéns!!!";
            } else if (imc >= 25 && imc <= 29.9) {
                classificacao = "com sobrepeso. Busque um peso mais saudável!";
            } else if (imc >= 30 && imc <= 34.9) {
                classificacao = "com Obesidade Grau 1. Procure um nutricionista!";
            } else if (imc >= 35 && imc <= 39.9) {
                classificacao = "com obesidade Grau 2. Sua saúde está em risco!";
            } else {
                classificacao = "com obesidade Extrema. Você já desistiu de viver!";
            }
            setResultado(`Seu IMC é: ${imc.toFixed(2)} - Você está ${classificacao}`);
        }
    
        

        
    return (
    <div className='calculadora'>
        <div className='peso'>
            <label>Peso em kg:</label>
            <input 
            type="number" 
            value={peso} 
            onChange={(e) => 
            setPeso(e.target.value)} 
            required
            />
        </div>
        
        <div className='altura'>
            <label>Altura em cm:</label>
            <input 
            type="number" 
            value={altura} 
            onChange={(e) => 
            setAltura(e.target.value)} 
            required
            />
        </div>
        <button onClick={calcularIMC}>Calcular IMC</button>
        <div className='calculadora-resultado'>
            {resultado && <p>{resultado}</p>}
        </div>
        
    </div>
    );
}


