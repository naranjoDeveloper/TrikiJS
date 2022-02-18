let posicion = document.querySelectorAll('.cuadro');
let player = 0;

function resetJuego() {
    let c = document.querySelectorAll('.circulo');
    let x = document.querySelectorAll('.equis');

    c.forEach(circulo=>{
        circulo.classList.remove('circulo')
        
    })

    x.forEach(equis=>{
        equis.classList.remove('equis');
    })

    player = 0;


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

    if(aX.includes(1) && aX.includes(2) && aX.includes(3)){
        setTimeout(() => {
            alert('gano')
        }, 500);
    }else if(aX.includes(4) && aX.includes(5) && aX.includes(6)){
        setTimeout(() => {
            alert('gano')
        }, 500);
    }else if(aX.includes(7) && aX.includes(8) && aX.includes(9)){
        setTimeout(() => {
            alert('gano')
        }, 500);
    }else if(aX.includes(1) && aX.includes(4) && aX.includes(7)){
        setTimeout(() => {
            alert('gano')
        }, 500);
    }else if(aX.includes(2) && aX.includes(5) && aX.includes(8)){
        setTimeout(() => {
            alert('gano')
        }, 500);
    }else if(aX.includes(3) && aX.includes(6) && aX.includes(9)){
        setTimeout(() => {
            alert('gano')
        }, 500);
    }else if(aX.includes(1) && aX.includes(5) && aX.includes(9)){
        setTimeout(() => {
            alert('gano')
        }, 500);
    }else if(aX.includes(3) && aX.includes(5) && aX.includes(7)){
        setTimeout(() => {
            alert('gano')
        }, 500);
    }

    if(aC.includes(1) && aC.includes(2) && aC.includes(3)){
        setTimeout(() => {
            alert('gano')
        }, 500);
    }else if(aC.includes(4) && aC.includes(5) && aC.includes(6)){
        setTimeout(() => {
            alert('gano')
        }, 500);
    }else if(aC.includes(7) && aC.includes(8) && aC.includes(9)){
        setTimeout(() => {
            alert('gano')
        }, 500);
    }else if(aC.includes(1) && aC.includes(4) && aC.includes(7)){
        setTimeout(() => {
            alert('gano')
        }, 500);
    }else if(aC.includes(2) && aC.includes(5) && aC.includes(8)){
        setTimeout(() => {
            alert('gano')
        }, 500);
    }else if(aC.includes(3) && aC.includes(6) && C.includes(9)){
        setTimeout(() => {
            alert('gano')
        }, 500);
    }else if(aC.includes(1) && aC.includes(5) && aC.includes(9)){
        setTimeout(() => {
            alert('gano')
        }, 500);
    }else if(aC.includes(3) && aC.includes(5) && aC.includes(7)){
        setTimeout(() => {
            alert('gano')
        }, 500);
    }



}