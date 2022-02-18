let posicion = document.querySelectorAll('.cuadro');
let player = 0;

function resetJuego() {

}


function pintarX(lugar) {

    if (lugarOcupado(lugar) != true) {
        posicion[lugar].classList.add('equis');
        player++;
    } else {
        alert('ESTA POSICION ESTA OCUPADA!!');
    }
}

function pintarO(lugar) {
    if (lugarOcupado(lugar) != true) {
        posicion[lugar].classList.add('circulo');
        player++;
    } else {
        alert('ESTA POSICION ESTA OCUPADA!!');
    }
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
        triqui();

    });
});

//
function triqui() {
    //ToDo
    console.log('Estas en el triqui');
}

function lugarOcupado(lugar) {

    if (posicion[lugar].classList.contains('circulo') || posicion[lugar].classList.contains('equis')) {
        return true;
    }

}