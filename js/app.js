const nombreInput = document.getElementById('nombre');
const textoInput = document.getElementById('texto');
const btnGenerar = document.getElementById('btn-generar');
const btnDescargar = document.getElementById('btn-descargar');
const canvas = document.getElementById('qrCode');
const nConsumo = document.getElementById('nConsumo');

const clienteNombres = ['Juan', 'María', 'Pedro', 'Ana', 'Luis', 'Sofía', 'Carlos', 'Lucía', 'Jorge', 'Elena', 'Misael', 'Valentina', 'Diego', 'Camila', 'Andrés', 'Isabella', 'Fernando', 'Gabriela', 'Ricardo', 'Natalia'];
const clienteApellidos = ['Pérez', 'Gómez', 'Rodríguez', 'López', 'Martínez', 'Hernández', 'García', 'Sánchez', 'Ramírez', 'Cruz', 'Flores', 'Torres', 'Rivera', 'Vargas', 'Castillo', 'Rojas', 'Mendoza', 'Silva', 'Morales', 'Jiménez'];

function generarVenta(){
    let numero = Math.floor(Math.random() * 100000001);
    let costo= Math.random() * (1000-10) + 10; 
    costo = costo.toFixed(2);
    const cliente = clienteNombres[Math.floor(Math.random() * clienteNombres.length)] + ' ' + clienteApellidos[Math.floor(Math.random() * clienteApellidos.length)];

    document.getElementById('cliente').value = cliente;
    document.getElementById('total').value = `$ ${costo}`;
    nConsumo.value = numero;

    //textoInput.value = `venta No: ${numero}\nCliente: ${cliente}\nTotal: $ ${costo}`;
    textoInput.value = `https://cbotello.github.io/projects/QRcodes/factura.html?numero=${numero}&cliente=${cliente.replace(' ', '_')}&total=${costo}`;
    
    nombreInput.value = `Venta_${numero}_${cliente.replace(' ', '_')}`;
}

function validarCampos(){
    const nombreValido =  nombreInput.value.trim() !== '';
    const textoValido = textoInput.value.trim() !== '';

    btnGenerar.disabled =!(nombreValido && textoValido);
}

nombreInput.addEventListener('input', validarCampos);
textoInput.addEventListener('input', validarCampos);

function generarQR(){
    const texto = textoInput.value.trim();
    const color = document.querySelector('input[name="colorPicker"]').value;
    //const color = document.querySelector('input[name="color"]:checked').value;
    if(!texto) return;

    QRCode.toCanvas(canvas, texto, {
        color: {
            dark: color,
            light: '#fff'
        },
        width: 200,
        margin: 2
    }, function (error){
        if(error) console.error(error);
        else{
            console.log(color);
            btnDescargar.disabled = false;
        }
    })
}

function descargarQR(){
    const enlace = document.createElement('a');
    const nombreQR = nombreInput.value.trim() || 'codigoQR';
    enlace.href = canvas.toDataURL('image/png');
    enlace.download = `${nombreQR}.png`;
    enlace.click();
}

function reiniciarFormulario(){
    nombreInput.value = '';
    textoInput.value = '';
    //document.querySelector('input[name="color"][value = "#000"]').checked = true;

    const contexto = canvas.getContext('2d');
    contexto.clearRect(0, 0, canvas.width, canvas.height);

    btnGenerar.disabled = true;
    btnDescargar.disabled = true;

    nombreInput.focus();
}