// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// Array para almacenar nombres
let nombres = []
let valor = document.getElementById("nombre").value


// funcion que obtiene amigos y lo agrega a la array
function agregarAmigo() {
    if (valor == ''){
        alert('ingresa un valor valido')
    }else{
    return nombres.push(valor)}
}


