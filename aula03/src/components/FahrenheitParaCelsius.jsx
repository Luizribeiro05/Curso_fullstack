import React from 'react';

const FahrenheitParaCelsius = (props) => {
    let valorFahr = props.fahr;
    const resultado = (valorFahr - 32) * 5/9;

    return (
        <div>
            <h1>A temperatura em Fahrenheit é: {props.valorFahr}°F, e em Celsius é: {resultado.toFixed(2)}°C</h1>
        </div>
    );
}

export default FahrenheitParaCelsius;