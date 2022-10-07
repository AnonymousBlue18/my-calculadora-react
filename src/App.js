/* eslint-disable no-eval */
import './App.css';
import { useState } from "react";
//rafce
function App() {

  //Modificar el estado
  const [calc, setCalc] = useState('');
  //operadores
  const ops = ['/', '*', '+', '-', '.'];
  //id historial.
  const history = document.getElementById('historial');

  //metodos
  const updateCalc = value => {

    //impide que se repitan los operators.
    //cuando el calc es vacio no permite ingresar ningun operador.
    //slice me devuelve una copia de una parte del array.
    if ((ops.includes(value) && calc === '') || (ops.includes(value) && ops.includes(calc.slice(-1)))) {
      return;
    }

    setCalc(calc + value);

  }

  const calcular = () => {

    //imprimir historial.
    var p = document.createElement('li');

    p.textContent = calc + "=" + (eval(calc).toString());

    //Agrega un nuevo nodo al final de la lista de un elemento hijo de un elemento padre especificado.
    history.appendChild(p);

    //resultado del calculo.
    setCalc(eval(calc)).toString();


  }

  //borrar todos los elementos del display.
  const borrar = () => {
    const valor = calc.slice(0, 0);
    setCalc(valor);
  }

  //borrar todos los elementos del historial.
  const borrar_hist = () => {

    history.innerHTML = "";
  }




  //retorno de la funcion App.
  return (
    //contenedor de toda la calculadora.

    <div>
      <h1 className="titulo">React App_Calculadora_Digital</h1>

      <div className="App-calculadora">

        <div className="calculadora">

          <div className="display">
            {calc || "0"}
          </div>

          <div className="operators">
            <button onClick={() => updateCalc('/')}>/</button>
            <button onClick={() => updateCalc('*')}>*</button>
            <button onClick={() => updateCalc('+')}>+</button>
            <button onClick={() => updateCalc('-')}>-</button>


            <button onClick={borrar}>AC</button>
            <button onClick={borrar_hist}>AC_hist</button>
          </div>

          <div className="digits">

            <button onClick={() => updateCalc('1')}>1</button>
            <button onClick={() => updateCalc('2')}>2</button>
            <button onClick={() => updateCalc('3')}>3</button>
            <button onClick={() => updateCalc('4')}>4</button>
            <button onClick={() => updateCalc('5')}>5</button>
            <button onClick={() => updateCalc('6')}>6</button>
            <button onClick={() => updateCalc('7')}>7</button>
            <button onClick={() => updateCalc('8')}>8</button>
            <button onClick={() => updateCalc('9')}>9</button>
            <button onClick={() => updateCalc('0')}>0</button>
            <button onClick={() => updateCalc('.')}>.</button>

            <button onClick={calcular}>=</button>

          </div>

        </div>

        <div className="display-history">
          <span className="design"><h1>historial</h1></span>
          <p id="historial"></p>
        </div>


      </div>
    </div>

  );
}

export default App;