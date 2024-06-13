// El styles lo importamos aquí para que se encargue Vite de compilar todo
import '../scss/styles.scss';

// const campoEntrada = document.getElementById('entrada');
// const campoSalida = document.getElementById('salida');

// // campoEntrada.addEventListener('keyup', function (event) {
// //   console.log(event);
// //   const valoresAceptados = /^[0-9]+$/;
// //   if (!campoEntrada.value.match(valoresAceptados)) {
// //     campoEntrada.value = '';
// //   }
// // });

// //Elabore un programa con javascript que en el navegador permita a través la lectura de un número x que se escriba en el html y el click de un botón que permita generar la tabla de multiplicar de ese número (x del 1 al 10)

// // const totalNumber = document.getElementById('number');
// // const clickButton = document.getElementById('button');

// // clickButton.addEventListener('click', function (evt) {
// //   console.log(evt);
// //   const totalNumberValue = totalNumber.value;
// //   for (let i = 1; i <= 10; i++) {
// //     const parrafo = document.createElement('p');
// //     const multiplicacion = totalNumberValue * i;
// //     const texto = document.createTextNode(`${i} x ${totalNumberValue} = ${multiplicacion}`);
// //     parrafo.appendChild(texto);
// //     document.body.appendChild(parrafo);
// //   }
// // });

// //Elabore un programa con javascript que en el navegador permita a través de un input en el que se hace una entrada de una frase de texto y el click de un botón que permita contar todas las vocales de la frase escrita, imprima una lista con cada vocal y la cantidad de veces que fue encontrada en la frase, no tenga en cuenta distinción entre mayúsculas y minúsculas.

// // button.addEventListener('click', function (evento) {
//   //   let countA = 0;
//   //   let countE = 0;
//   //   let countI = 0;
//   //   let countO = 0;
//   //   let countU = 0;
//   //   for (let vowel of inputText.value.toLowerCase()) {
//     //     if (vowel === 'a') {
//       //       countA++;
//       //     } else if (vowel === 'e') {
//         //       countE++;
//         //     } else if (vowel === 'i') {
//           //       countI++;
//           //     } else if (vowel === 'o') {
//             //       countO++;
//             //     } else if (vowel === 'u') {
//               //       countU++;
//               //     }
//               //   }
//               //   console.log(`A: ${countA}, E: ${countE}, I: ${countI}, O: ${countO}, U: ${countU}`);
//               // });

// //Elabore un programa con javascript que en el navegador permita a través de un input en el que se hace una entrada de teclado detectar si es un número o una letra, si es letra determine si es consonante o una vocal y la borre el carácter del input en cualquier caso, luego un botón que permite ver la lista de letras que han sido introducidas anteriormente y la cantidad de veces que fueron introducidas, no tenga en cuenta distinción entre mayúsculas y minúsculas.

// const inputText = document.getElementById('textInput');
// const button = document.getElementById('button');

// function dectetorDeLetras (){

// }

// const fraseRandom =
//   'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus debitis ad doloribus dolor ullam. Quam libero eligendi fuga? Sint quisquam provident modi debitis! Quo, placeat ut molestias in inventore natus.';

// const arrayFrase = fraseRandom.split(' ');

// const diccionario = [];

// for (let palabra of arrayFrase) {
//   // console.log(palabra)
//   if (palabra.includes('e')) {
//     // console.log(palabra);
//     diccionario.push(palabra);
//     if (palabra.includes('.') || palabra.includes('!' || palabra.includes(','))) {
//       console.log(palabra.substring(0, palabra.length - 1));
//     } else {
//       console.log(palabra);
//     }
//   }
// }
// for (let palabrasE of fraseRandom) {
//   console.log(palabrasE);
// }

const objeto = {
  prop: 'valor1',
  propiedad: 'valor2',
  caracteristica: 'valor3',
  algomas: 'valor4',
  otraPropiedadMasLarga: 'valor5',
  sol: 'valor6',
  nombreLargoPropiedad: 'valor7',
};

for (let propiedad in objeto) {
  if (propiedad.length > 9) {
    console.log(propiedad);
  }
}

//Dada la siguiente coleccion de hoteles, ordene por cantidad de habitaciones de menor a mayor, e imprima los nombres de los hoteles.

const hotelLaLuz = {
  nombre: 'La Luz',
  fechaFundacion: '2024-01-01',
  pisos: 10,
  habitacionPorPiso: 5,
  habitaciones: 51,
  suites: 1,
};

const hotelLaSombra = {
  nombre: 'La Sombra',
  fechaFundacion: '1924-01-01',
  pisos: 3,
  habitacionPorPiso: 10,
  habitaciones: 31,
  suites: 1,
};

const hotelElSol = {
  nombre: 'El Sol',
  fechaFundacion: '2000-05-15',
  pisos: 5,
  habitacionPorPiso: 8,
  habitaciones: 41,
  suites: 1,
};

const hotelLaEstrella = {
  nombre: 'La Estrella',
  fechaFundacion: '1980-10-10',
  pisos: 7,
  habitacionPorPiso: 6,
  habitaciones: 43,
  suites: 1,
};

const hotelElCielo = {
  nombre: 'El Cielo',
  fechaFundacion: '1990-07-21',
  pisos: 12,
  habitacionPorPiso: 4,
  habitaciones: 49,
  suites: 1,
};

const hotelLaLuna = {
  nombre: 'La Luna',
  fechaFundacion: '1975-12-25',
  pisos: 8,
  habitacionPorPiso: 7,
  habitaciones: 57,
  suites: 1,
};

const hotelElOceano = {
  nombre: 'El Oceano',
  fechaFundacion: '2010-03-18',
  pisos: 6,
  habitacionPorPiso: 9,
  habitaciones: 55,
  suites: 1,
};

const hotelElJardin = {
  nombre: 'El Jardin',
  fechaFundacion: '2005-09-30',
  pisos: 4,
  habitacionPorPiso: 7,
  habitaciones: 29,
  suites: 1,
};

const hotelLaMontaña = {
  nombre: 'La Montaña',
  fechaFundacion: '2015-06-06',
  pisos: 9,
  habitacionPorPiso: 5,
  habitaciones: 46,
  suites: 1,
};

const hotelElRio = {
  nombre: 'El Rio',
  fechaFundacion: '1995-11-11',
  pisos: 3,
  habitacionPorPiso: 12,
  habitaciones: 37,
  suites: 1,
};

const hoteles = [
  hotelLaLuz,
  hotelLaSombra,
  hotelElSol,
  hotelLaEstrella,
  hotelElCielo,
  hotelLaLuna,
  hotelElOceano,
  hotelElJardin,
  hotelLaMontaña,
  hotelElRio,
];

const hotelesOrdenados = hoteles.toSorted(function (a, b) {
  return a.habitaciones - b.habitaciones;
});

for (let i = 0; i < hotelesOrdenados.length; i++) {
  console.log(hotelesOrdenados[i].nombre);
}

const persona = {
  nombre: 'Juan',
  edad: 25,
  saludar() {
    console.log(`Hola, soy ${this.nombre}`);
  },
  incrementarEdad() {
    let cumplirEdad = this.edad;

    return function obtenerEdad() {
      return cumplirEdad++;
    };
  },
};

const edadIncrementada = persona.incrementarEdad()
persona.saludar();


window.persona = persona;
