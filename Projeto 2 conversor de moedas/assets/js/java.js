function ConverterDolar() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmRealNumerico = parseFloat(valor);

  var valorEmDolar = valorEmRealNumerico / 5.09;
  console.log(valorEmDolar);
  var valorDolarFixado = valorEmDolar.toFixed(1);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em dólar é: U$ " + valorDolarFixado;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterEuro() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmRealNumerico = parseFloat(valor);

  var valorEmEuro = valorEmRealNumerico / 5.53;
  console.log(valorEmEuro);
  var valorEuroFixado = valorEmEuro.toFixed(1);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em euro é: € " + valorEuroFixado;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterIene() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmRealNumerico = parseFloat(valor);

  var valorEmIene = valorEmRealNumerico / 0.044;
  console.log(valorEmIene);
  var valorIeneFixado = valorEmIene.toFixed(1);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em iene é: ¥ " + valorIeneFixado;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterBitcoins() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmRealNumerico = parseFloat(valor);

  var valorEmBitcoins = valorEmRealNumerico / 196.894;
  console.log(valorEmBitcoins);
  var valorBitcoinsFixado = valorEmBitcoins.toFixed(3);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em bitcoins é:  " + valorBitcoinsFixado;
  elementoValorConvertido.innerHTML = valorConvertido;
}
