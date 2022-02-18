let posicion = document.querySelectorAll('.cuadro');
let player=0;
function resetJuego() {

}


function pintarX(lugar){
    let cuadro = posicion[lugar];
    cuadro.classList.add('equis');
    console.log(cuadro);
    player++;
}
function pintarO(lugar){
    let cuadro = posicion[lugar];
    cuadro.classList.add('circulo');
    console.log(cuadro);
    player++;
}

posicion.forEach(cuadro => {
    cuadro.addEventListener('mousedown', () => {
        if(player%2==0){
        if (cuadro.id == 1) {
            pintarX(0);
        }
        if (cuadro.id ==2) {
            pintarX(1);
        }
        if (cuadro.id == 3) {
            pintarX(2);
        }
        if (cuadro.id ==4) {
            pintarX(3);
        }
        if (cuadro.id == 5) {
            pintarX(4);
        }
        if (cuadro.id ==6) {
            pintarX(5);
        }
        if (cuadro.id == 7) {
            pintarX(6);
        }
        if (cuadro.id ==8) {
            pintarX(7);
        }if (cuadro.id == 9) {
            pintarX(8);
        }
    }else{
        if (cuadro.id == 1) {
            pintarO(0);
        }
        if (cuadro.id ==2) {
            pintarO(1);
        }
        if (cuadro.id == 3) {
            pintarO(2);
        }
        if (cuadro.id ==4) {
            pintarO(3);
        }
        if (cuadro.id == 5) {
            pintarO(4);
        }
        if (cuadro.id ==6) {
            pintarO(5);
        }
        if (cuadro.id == 7) {
            pintarO(6);
        }
        if (cuadro.id ==8) {
            pintarO(7);
        }if (cuadro.id == 9) {
            pintarO(8);
        }
    }
        
    });
});