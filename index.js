const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');
const deleteChar = document.getElementById('borrar1');
const deleteAll = document.getElementById('borraTodo');

const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML))
});

deleteChar.addEventListener('click', () => display.borrar());
deleteAll.addEventListener('click', () => display.borrarTodo());