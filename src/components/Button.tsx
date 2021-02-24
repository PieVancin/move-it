import { useState } from 'react'; //Hook usado para mudar o estado, usando um contador

// Definindo uma interface
interface ButtonProps {
    color: string;
    children: string;
}

export function Button(props: ButtonProps){ //A função deve receber as propriedades da interface como parâmetro
    const [counter, setCounter] = useState(1)

    function increment() { //Não podemos mudar o valor da const counter por causa do conceito de imutabilidade, temos que usar a função setCounter que cria um novo valor para o counter
        setCounter(counter + 1);
    }
    return (
        <button type="button" style={{ backgroundColor: props.color }} onClick={increment}>
            {props.children} <strong>{counter}</strong>
        </button>
    );
}

//Usamos a chave dupla, uma é para dizer que queremos mostrar uma variável ou código JS, e a outra para indicar que é um objeto JS