const urlParams = new URLSearchParams(window.location.search);

const numero = urlParams.get("numero");
const cliente = urlParams.get("cliente");
const total = urlParams.get("total");

var inputNumero = document.getElementById('inputNumero');
var inputCliente = document.getElementById('inputCliente');
var inputTotal = document.getElementById('inputTotal');

inputNumero.value = numero;
inputCliente.value = cliente.replace('_', ' ');
inputTotal.value = `$ ${total}`;

