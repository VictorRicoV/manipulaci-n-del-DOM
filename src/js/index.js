// El styles lo importamos aquí para que se encargue Vite de compilar todo
import '../scss/styles.scss';

const campoEntrada = document.getElementById('entrada');
const campoSalida = document.getElementById('salida');

campoEntrada.addEventListener('keyup', function (event) {
  console.log(event);
  const valoresAceptados = /^[0-9]+$/;
  if (!campoEntrada.value.match(valoresAceptados)) {
    campoEntrada.value = '';
  }
});

//Elabore un programa con javascript que en el navegador permita a través de un input en el que se introduce un número y del click de un botón actualizar un contador en pantalla que reduzca en 1 unidad con cada click el número introducido.

const totalNumber = document.getElementById('number');

const 

