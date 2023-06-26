import React from 'react'
//1) Importar una función de React que me ayuda a trabajar con el estado. (useState)
import { useState } from 'react'

const ItemCount = () => {
    //Acá en la parte superior del componente siempre voy a trabajr con los hooks: 
    const [contador, setContador] = useState(1);
    //Entre los () voy a pasarle el valor inicial del estado. 
    //2) useState me retorna un array con dos elementos. El primero es el estado y el segundo es una función que me actualiza el valor del estado. 

    //Funciones para los eventos: 

    let maximoStock = 10;

    const incrementar = () => {
        if (contador < maximoStock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    }

    return (
        <div>
            <button onClick={decrementar}> - </button>
            <p> {contador} </p>
            <button onClick={incrementar}> + </button>
        </div>
    )
}

//Incrementar y decrementar van sin parentesis porque si no se ejecutarían al momento de renderizar el componente. Y solo queremos que se ejecute cuando el visitante haga click en los botones. 

export default ItemCount