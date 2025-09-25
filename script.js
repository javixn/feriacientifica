//Accion de cambio dinamico de palabras en robot
const texto_cambio = document.getElementById('Texto');
const AccionCambio = document.getElementById('accion');

const lista = [
    'Bienvenido , mucho gusto', //0
    'Mi nombre es Jarvis',
    'Y sere el encargado de guiarte por este juego',
    'Para iniciar, Presiona el boton de Jugar'
];

let indice = 0;

AccionCambio.addEventListener('click', () => {
    texto_cambio.textContent = lista[indice]; //for palabra en lista lista
    indice = (indice + 1) % lista.length;
});

//Manejo para ventana de transicion
const mostrarPantalla = document.querySelector('.mostrarPantalla');
const botonIrJuego = document.querySelector('.botonIrJuego');

botonIrJuego.addEventListener('click', function(e) {
    e.preventDefault();
    mostrarPantalla.classList.add('mostrar');
    setTimeout(() => {
        window.location.href = this.href;
    }, 500); //5s
});


