function miprimerafuncion(){

    let checked = document.querySelector('input[name="genero"]:checked');
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let dni = document.getElementById("dni").value;
    let genero = checked.value;
    let email = document.getElementById("email").value;

    let fila = document.createElement("tr");

    let celdaNombre = document.createElement("td");
    let celdaApellidos = document.createElement("td");
    let celdaDni = document.createElement("td");
    let celdaGenero= document.createElement("td");
    let celdaEmail = document.createElement("td");
   
    fila.appendChild(celdaNombre);
    fila.appendChild(celdaApellidos);
    fila.appendChild(celdaDni);
    fila.appendChild(celdaGenero);
    fila.appendChild(celdaEmail);


    celdaNombre.innerText=nombre;
    celdaApellidos.innerText=apellidos;
    celdaDni.innerText=dni;
    celdaGenero.innerText=genero;
    celdaEmail.innerText=email;


    let cuerpoTabla= document.getElementById("cuerpoTabla");

    cuerpoTabla.appendChild(fila);

}

function obtenerfecha(){

let fechahoy = new Date();
document.getElementById("fecha").innerText=fechahoy;


}

