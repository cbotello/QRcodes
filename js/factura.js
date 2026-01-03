const urlParams = new URLSearchParams(window.location.search);

const numero = urlParams.get("numero");
const cliente = urlParams.get("cliente");
const total = urlParams.get("total");

var inputNumero = document.getElementById('inputNumero');
var inputCliente = document.getElementById('inputCliente');
var inputTotal = document.getElementById('inputTotal');

var inputRFC= document.getElementById('rfc');
var inputRazonSocial = document.getElementById('razonSocial');
var inputRegimen = document.getElementById('regimenFiscal');
var inputCFDI = document.getElementById('usoCFDI');

inputNumero.value = numero;
inputCliente.value = cliente.replace('_', ' ');
inputTotal.value = `$ ${total}`;


function habilitarCampos(){
    inputRFC.disabled = false;
    inputRazonSocial.disabled = false;
    inputRegimen.disabled = false;
    inputCFDI.disabled = false;
}