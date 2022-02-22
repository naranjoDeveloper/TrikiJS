let posicion = document.querySelectorAll('.cuadro');
let player = 0;
let puntosj1 = document.getElementById('puntosj1');
let puntosj2 = document.getElementById('puntosj2');

let contadorJ1 = 0;
puntosj1.textContent = contadorJ1;
let contadorJ2 = 0;
puntosj2.textContent = contadorJ2;

function ganoJ1() {
    contadorJ1++;
    puntosj1.textContent = contadorJ1;
    winner(1)
}

function winner(player) {
    Swal.fire({
        text: `Gano el Jugador ${player}`
    })
    setTimeout(() => {
    resetJuego()
    }, 500);
}

function ganoJ2() {
    contadorJ2++;
    puntosj2.textContent = contadorJ2;
    winner(2)
}

function resetJuego() {
    let c = document.querySelectorAll('.circulo');
    let x = document.querySelectorAll('.equis');
    c.forEach(circulo => {
        circulo.classList.remove('circulo')
    })
    x.forEach(equis => {
        equis.classList.remove('equis');
    })
    player = 0;
}

function resetJuegoTotal() {
    let c = document.querySelectorAll('.circulo');
    let x = document.querySelectorAll('.equis');
    c.forEach(circulo => {
        circulo.classList.remove('circulo')
    })
    x.forEach(equis => {
        equis.classList.remove('equis');
    })
    player = 0;
    contadorJ2 = 0;
    contadorJ1 = 0;
    puntosj1.textContent = 0;
    puntosj2.textContent = 0;
}

function pintarX(lugar) {
    if (lugarOcupado(lugar) != true) {
        posicion[lugar].classList.add('equis');
        player++;
    } else {
        Swal.fire({
            icon: 'error',
            text: 'Esta posicion esta ocupada'
        })
    }
}

function pintarO(lugar) {
    if (lugarOcupado(lugar) != true) {
        posicion[lugar].classList.add('circulo');
        player++;
    } else {
        Swal.fire({
            icon: 'error',
            text: 'Esta posicion esta ocupada'
        })
    }
}



posicion.forEach(cuadro => {
    cuadro.addEventListener('mousedown', () => {
        if (player % 2 == 0) {
            let enX = cuadro.id - 1;
            pintarX(enX)
            checkT()
        } else {
            let enY = cuadro.id - 1
            pintarO(enY)
            checkT()
        }
    });
});


function lugarOcupado(lugar) {
    if (posicion[lugar].classList.contains('circulo') || posicion[lugar].classList.contains('equis')) {
        return true;
    }
}


function checkT() {
    let c = document.querySelectorAll('.circulo');
    let x = document.querySelectorAll('.equis');
    let aC = [];
    let aX = [];
    x.forEach(equis => {
        aX.push(parseInt(equis.id))
    })
    c.forEach(circulo => {
        aC.push(parseInt(circulo.id))
    })
    console.log(aX)
    console.log(aC)
    if (aX.includes(1) && aX.includes(2) && aX.includes(3)) {
        ganoJ1();

    } else if (aX.includes(4) && aX.includes(5) && aX.includes(6)) {
        ganoJ1();

    } else if (aX.includes(7) && aX.includes(8) && aX.includes(9)) {
        ganoJ1();

    } else if (aX.includes(1) && aX.includes(4) && aX.includes(7)) {
        ganoJ1();

    } else if (aX.includes(2) && aX.includes(5) && aX.includes(8)) {
        ganoJ1();

    } else if (aX.includes(3) && aX.includes(6) && aX.includes(9)) {
        ganoJ1();

    } else if (aX.includes(1) && aX.includes(5) && aX.includes(9)) {
        ganoJ1();

    } else if (aX.includes(3) && aX.includes(5) && aX.includes(7)) {
        ganoJ1();

    }
    if (aC.includes(1) && aC.includes(2) && aC.includes(3)) {
        ganoJ2();

    } else if (aC.includes(4) && aC.includes(5) && aC.includes(6)) {
        ganoJ2();

    } else if (aC.includes(7) && aC.includes(8) && aC.includes(9)) {
        ganoJ2();

    } else if (aC.includes(1) && aC.includes(4) && aC.includes(7)) {
        ganoJ2();

    } else if (aC.includes(2) && aC.includes(5) && aC.includes(8)) {
        ganoJ2();

    } else if (aC.includes(3) && aC.includes(6) && C.includes(9)) {
        ganoJ2();

    } else if (aC.includes(1) && aC.includes(5) && aC.includes(9)) {
        ganoJ2();

    } else if (aC.includes(3) && aC.includes(5) && aC.includes(7)) {
        ganoJ2();

    }
}