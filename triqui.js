let posicion = document.querySelectorAll('.cuadro');
let player = 0;

function resetJuego() {

}


function pintarX(lugar) {
    posicion[lugar].classList.add('equis');
    player++;
}

function pintarO(lugar) {
    posicion[lugar].classList.add('circulo');
    player++;
}

posicion.forEach(cuadro => {
    cuadro.addEventListener('mousedown', () => {
        if (player % 2 == 0) {
            let enX = cuadro.id - 1;
            pintarX(enX)
        } else {
            let enY = cuadro.id - 1
            pintarO(enY)
        }

    });
});