// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// Array para almacenar nombres
let nombres = []
let listaAmigo = obtenerElemento("listaAmigos")
let listaGanador = obtenerElemento("resultado")

function obtenerElemento(valor){
    return document.getElementById(valor);
}
function obtenerValor(valor){
    return document.getElementById(valor).value;
}

function reiniciar(){
    nombres = [];
    listaAmigo.innerHTML = "";
    listaGanador.innerHTML = "";
    obtenerElemento("amigo").value = "";
}

function agregarAmigo() {

    let amigo = obtenerValor("amigo");
    if (amigo == ''){
        alert('ingresa un valor valido')    
    }else{ 
    nombres.push(amigo);
    obtenerElemento("amigo").value =  '' 
    actualizarAmigos();}
}

function actualizarAmigos(){
    listaAmigo.innerHTML="";
    for (let i = 0; i < nombres.length; i ++){
        let item = document.createElement("li");
        // Asignar el nombre del amigo al <li>
        item.textContent = nombres[i];
        listaAmigo.appendChild(item);
    }
    }

function sortearAmigo() {
    if (nombres.length === 0) {
        alert("La lista está vacía.");
        return;
    }

    let indice = Math.floor(Math.random() * nombres.length);
    let nombreElegido = nombres[indice];
    listaGanador.innerHTML = "";

    let item = document.createElement("li");
    item.textContent = nombreElegido;
    listaGanador.appendChild(item);
}




