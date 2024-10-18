//Ejercicio 1 Devuelve la fecha actual en formato dd/mm/yyyy
function obtenerFechaActual() {
  const fechaActual = new Date();
  
  let dia = fechaActual.getDate();
  let mes = fechaActual.getMonth() + 1; // con esto enero empieza en 1 y no en 0
  const anno = fechaActual.getFullYear();

  if (dia < 10) {
      dia = '0' + dia;
  }
  if (mes < 10) {
      mes = '0' + mes;
  }

  return `${dia}/${mes}/${anno}`; 

              //para las pruebas
  function mostrarFecha() {
    const fecha = obtenerFechaActual(); 
    document.getElementById("resultadoFecha").textContent = fecha; 
  }
}


//Ejercicio 2 Calcula el área de un círculo a partir de su radio con dos decimales
function calcularAreaCirculo(radio) {
 if (typeof radio != 'number' || isNaN(radio) || radio < 0) {
  return null;
 }

 const area = Math.PI * Math.pow(radio, 2); //Math.PI nos da el numero PI y Math.pow nos deja elevar un número
 return Number(area.toFixed(2)); //toFixed devuelve con decimales, en este caso le pedimos 2
}


//Ejercicio 3 Cuenta el número de vocales en una cadena de texto
function contarVocales(cadena) {
  if (typeof cadena !== 'string') {
    return -1; 
  }

  const minusculas = cadena.toLowerCase();

  const vocales = 'aeiouáéíóú';

  let contador = 0;

  for (let caracter of minusculas) {
    if (vocales.includes(caracter)) {
      contador++;
    }
  }

  return contador;
}
  
  
//Ejercicio 4 Convierte una temperatura de grados Celsius a Fahrenheit
celsiusAFahrenheit = (celsius) => {
  if (isNaN(celsius)) {
    return null;
  }

  const fahrenheit = (celsius * 9/5 + 32);

  return Number(fahrenheit.toFixed(2));
}

//Ejercicio 5 Crea una función que formatee un número agregando comas como separadores de miles.
function formatearNumero(numero) {
  // verifica si no es un número o si no es de tipo 'number'
  if (isNaN(numero) || typeof numero !== 'number') {
    return null;
  }

  // convertir a string y divide en 2, por un lado el entero y por otro el decimal
  const partesNumero = numero.toString().split('.');

  // Formatearla con puntos, hace referencia a la parte entera [0] y luego busca coincidencias con una cadena y lo reemplaza
  // \B hace que no se pueda poner un . al inicio, no pondrá números si este tiene menos de 4 cifras
  // (?=(\d{3}) busca 3 dígitos
  // (?!\d) asegura que despues de los 3 dígitos no hay más, así no se pone un punto al final   
  // g modificador global que permite encontrar coincidencias en toda la cadena
  const numeroEntero = partesNumero[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  // Si hay decimal entonces ....
  if (partesNumero.length > 1) {
    return `${numeroEntero},${partesNumero[1]}`;
  }

  // Si no hay decimales solo devolverá el numero entero
  return numeroEntero;



    // return numero.toLocaleString('es-ES', { minimumFractionDigits: 0 }); esta es otra manera de hacerlo

}

//Ejercicio 6 Función que recibe un string en formato dd/mm/yyyy y devuelve el número de días que faltan para el 6 de Enero del año siguiente
function reyesMagos(fecha) {
 const regexFecha = /^\d{2}\/\d{2}\/\d{4}$/;
 if (!regexFecha.test(fecha)){
  return null;
 }

 const partesFecha = fecha.split(`/`);
 const dia = parseInt(partesFecha[0], 10);
 const mes = parseInt(partesFecha[1], 10);
 const anno = parseInt(partesFecha[2], 10);

if (dia < 1 || dia > 31 || mes < 1 || mes > 12 ) {
  return null;
}

const fechaElegida = new Date(anno, mes -1, dia);

const fechaReyes = new Date(anno, 0,6);

if (dia === 6 && mes === 1) {
  return 0;
}

if (fechaElegida > fechaReyes) {
  fechaReyes.setFullYear(anno + 1); 
}

const diferenciaFecha = fechaReyes - fechaElegida;

const diasQueQuedan = Math.ceil(diferenciaFecha / (1000 * 60 * 60 * 24)); // 1000 por 1000 milisegundos en un minuto, 60 segundos en 1 min, 60 minutos en una hora, 24 horas en un día

return diasQueQuedan;
}


// Ejercicio 9: Convertir a lowerCamelCase
function camelCase(cadena) {
  if (typeof cadena !== 'string') {
    return null;
  }

  if (cadena.trim() === '') {
    return ''; 
  }

  const minusculasSinEspacio = cadena.trim().replace(/\s+/g, ' ').split(' ');

  const palabraCamello = minusculasSinEspacio.map((palabra, index) => {
    if (index === 0) {
      return palabra.toLowerCase(); //primera palabra en minúsculas
    }
    return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase(); // restantes en Camel Case
  });

  // unir las palabras en lowerCamelCase
  return palabraCamello.join('');
}


// Crear una función que devuelva el número de días que quedan para la próxima Navidad
function diasParaNavidad(){

  const diaHoy = new Date();

  let annoActual = diaHoy.getFullYear();

  let navidad = new Date(annoActual, 11, 25);

  if (diaHoy > navidad) {
    navidad = new Date(annoActual + 1, 11, 25);
  }

  const diferenciaFecha = navidad - diaHoy;

  const diasRestantes = Math.ceil(diferenciaFecha / (1000 * 60 * 60 * 24));

  return diasRestantes;

}


// Ejercicio 7: Función que genera un número aleatorio entre comienzo y fin
function calcularAleatorio(comienzo, fin) {
  if (isNaN(comienzo) || comienzo < 0 || isNaN(fin) || fin < 0) {
    return null;
  }

  if (comienzo > fin) {
    return null;
  }

  return Math.floor(Math.random() * (fin - comienzo + 1)) + comienzo;
}



//Ejercicio 8: Función para verificar si una cadena es un palíndromo sin utilizar expresiones regulares ni programación funcional
function esPalindromo(cadena) {
  if (typeof cadena !== 'string' || cadena.trim() === '') {
    return false; 
  }

  const minisculasSinEspacios = cadena.toLowerCase().replace(/\s+/g, '');

  const invertirCadena = minisculasSinEspacios.split('').reverse().join('');

  return minisculasSinEspacios === invertirCadena;
}

//Ejericio 10 Función que recibe un número y devuelve un string con el número escrito en palabras
function numberToWords(num) {
  if (num < 0 || num > 999999 || !Number.isInteger(num)) {
    return "";
  }

  const unidades = ["", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
  const unidadesDiferentes = ["diez", "once", "doce", "trece", "catorce", "quince", "dieciséis", "diecisiete", "dieciocho", "diecinueve"];
  const decenas = ["", "", "veinte", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"];
  const centenas = ["", "cien", "doscientos", "trescientos", "cuatrocientos", "quinientos", "seiscientos", "setecientos", "ochocientos", "novecientos"];

  function convertirMax99(num) {
    if (num < 10) return unidades[num];
    if (num < 20) return unidadesDiferentes[num - 10];
    if (num < 30) return num === 20 ? "veinte" : "veinti" + unidades[num - 20];

    const decena = Math.floor(num / 10);
    const unidad = num % 10;
    return decenas[decena] + (unidad ? " y " + unidades[unidad] : "");
  }

  function convertirMax999(num) {
    const centena = Math.floor(num / 100);
    const resto = num % 100;
    if (num === 100) return "cien";
    return centenas[centena] + (resto ? " " + convertirMax99(resto) : "");
  }

  function convertirMax999999(num) {
    const miles = Math.floor(num / 1000);
    const resto = num % 1000;
    const milesStr = miles > 1 ? convertirMax999(miles) + " mil" : "mil";
    return miles ? milesStr + (resto ? " " + convertirMax999(resto) : "") : convertirMax999(resto);
  }

  if (num === 0) return "cero";
  return convertirMax999999(num);

}