// El styles lo importamos aquí para que se encargue Vite de compilar todo
import '../scss/styles.scss';

const campoEntrada = document.getElementById('entrada');
const campoSalida = document.getElementById('salida');

// campoEntrada.addEventListener('keyup', function (event) {
//   console.log(event);
//   const valoresAceptados = /^[0-9]+$/;
//   if (!campoEntrada.value.match(valoresAceptados)) {
//     campoEntrada.value = '';
//   }
// });

//Elabore un programa con javascript que en el navegador permita a través la lectura de un número x que se escriba en el html y el click de un botón que permita generar la tabla de multiplicar de ese número (x del 1 al 10)

// const totalNumber = document.getElementById('number');
// const clickButton = document.getElementById('button');

// clickButton.addEventListener('click', function (evt) {
//   console.log(evt);
//   const totalNumberValue = totalNumber.value;
//   for (let i = 1; i <= 10; i++) {
//     const parrafo = document.createElement('p');
//     const multiplicacion = totalNumberValue * i;
//     const texto = document.createTextNode(`${i} x ${totalNumberValue} = ${multiplicacion}`);
//     parrafo.appendChild(texto);
//     document.body.appendChild(parrafo);
//   }
// });

//Elabore un programa con javascript que en el navegador permita a través de un input en el que se hace una entrada de una frase de texto y el click de un botón que permita contar todas las vocales de la frase escrita, imprima una lista con cada vocal y la cantidad de veces que fue encontrada en la frase, no tenga en cuenta distinción entre mayúsculas y minúsculas.


// button.addEventListener('click', function (evento) {
  //   let countA = 0;
  //   let countE = 0;
  //   let countI = 0;
  //   let countO = 0;
  //   let countU = 0;
  //   for (let vowel of inputText.value.toLowerCase()) {
    //     if (vowel === 'a') {
      //       countA++;
      //     } else if (vowel === 'e') {
        //       countE++;
        //     } else if (vowel === 'i') {
          //       countI++;
          //     } else if (vowel === 'o') {
            //       countO++;
            //     } else if (vowel === 'u') {
              //       countU++;
              //     }
              //   }
              //   console.log(`A: ${countA}, E: ${countE}, I: ${countI}, O: ${countO}, U: ${countU}`);
              // });
              
              
//Elabore un programa con javascript que en el navegador permita a través de un input en el que se hace una entrada de teclado detectar si es un número o una letra, si es letra determine si es consonante o una vocal y la borre el carácter del input en cualquier caso, luego un botón que permite ver la lista de letras que han sido introducidas anteriormente y la cantidad de veces que fueron introducidas, no tenga en cuenta distinción entre mayúsculas y minúsculas.
              
              
              
const inputText = document.getElementById('textInput');
const button = document.getElementById('button');

function dectetorDeLetras (){
  
}