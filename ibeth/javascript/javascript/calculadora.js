function leerValorNumerico(identificador) {
  var cadenaOriginal = document.getElementById(identificador).value;
  var valorNumerico = parseFloat(cadenaOriginal);
  return valorNumerico;
}

function ejecutarOperacion(operacion) {
  var valor1 = leerValorNumerico("valor1");
  var valor2 = leerValorNumerico("valor2");
  var resultado = 0;
  if(operacion == "sumarDosNumeros") {
    resultado = sumarDosNumeros(valor1, valor2);
  } else if(operacion == "restarDosNumeros") {
    resultado = restarDosNumeros(valor1, valor2);
  } else if(operacion == "multiplicarDosNumeros") {
    resultado = multiplicarDosNumeros(valor1, valor2);
  } else if (operacion == "dividirDosNumeros") { // Operacion por defecto (division)
    resultado = dividirDosNumeros(valor1, valor2)
  } else if(operacion == "sumarTodosDeLista") {
    var valorDeInput = document.getElementById("listaDeNumeros").value;
    var listaDeNumerosDelUsuario = generaListaDeNumeros(valorDeInput);
    resultado = sumarTodosDeLista(listaDeNumerosDelUsuario);
  }
  imprimirResultado(resultado);
}

function imprimirResultado(resultado) {
  document.getElementById("resultado").innerHTML = resultado;
}

function sumarDosNumeros(valor1, valor2) {
  return valor1 + valor2;
}

function restarDosNumeros(valor1, valor2) {
  return valor1 - valor2;
}

function multiplicarDosNumeros(valor1, valor2) {
  return valor1 * valor2;
}

function dividirDosNumeros(valor1, valor2) {
  return valor1 / valor2;
}

function generaListaDeNumeros(cadenaDeNumeros) {
  // "1,2,3,4,5 ..."
  var listaDeCadenas = cadenaDeNumeros.split(",");
  // ["1","2","3","4","5"]
  var listaFinalDeNumeros = [];
  for(var indice = 0; indice < listaDeCadenas.length; indice++) {
    var valorNumericoDeCadena = parseFloat(listaDeCadenas[indice]);
    listaFinalDeNumeros.push(valorNumericoDeCadena);
  }
  return listaFinalDeNumeros;
}

function sumarTodosDeLista(listaDeNumeros) {
  var sumaTotal = 0;
  for(var indice = 0; indice < listaDeNumeros.length; indice++) {
    sumaTotal += listaDeNumeros[indice];
  }
  return sumaTotal;
}
