const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
var currentDate = "";

// FECHA ACTUAL Y CORRECION PARA IGUALAR
if (month < 10){
    currentDate = `${year}-0${month}-${day}`;
}
else{
     currentDate = `${year}-${month}-${day}`;
}

let usuarios = [];
let listaIdUsu = [];
let citasId = [];
let citas = [];
let contador = 1;


function cogerCita() {
    var listaNombres = ["Juan", "Antonio", "Maria", "Eugenio", "Eugenia", "Marta", " Cristian", "Pepe", "Yumalai", "Andrea", "Sergio", "Xavi", "Rosa"];
    var listaApellidos = ["Garcia Lopez", "Martin Martin", "González Fernández", "Pasart Nuñez", "Trals Baust"];
    var listaCentros = ["Macarena", "Virgen Del Rocio"];

    var nombreAleatorio = Math.floor(Math.random() * listaNombres.length);
    var apellidoAleatorio = Math.floor(Math.random() * listaApellidos.length);
    var consultaAleatoria = Math.floor(Math.random() * 100);

    // Crea Persona
    class usuario {
        constructor(nombre, apellidos, edad, codigoPostal, idUsu) {
            this.nombre = nombre;
            this.apellidos = apellidos;
            this.edad = edad;
            this.codigoPostal = codigoPostal;
            this.idUsu = contador;
        }
    }

    // Conf de Persona
    // Obtener valores del formulario
    if (document.getElementById("nombre").value == "") {
        alert("Nombre debe ser rellenado");
        return false;
    } else { var nombre = document.getElementById("nombre").value; }

    if (document.getElementById("apellidos").value == "") {
        alert("Apellidos debe ser rellenado");
        return false;
    } else { var apellidos = document.getElementById("apellidos").value }

    if (document.getElementById("edad").value == "" || document.getElementById("edad").value <= 0) {
        alert("Edad incorrecta.");
        return false;
    } 
    else { var edad = document.getElementById("edad").value == "" }

    if (document.getElementById("codigoPostal").value == "") {
        alert("Centro médico debe ser rellenado");
        return false;
    } else { var codigoPostal = document.getElementById("codigoPostal").value }



    listaIdUsu.push(contador);

    // Crear alumno
    var alumno1 = new usuario(nombre, apellidos, parseInt(edad), codigoPostal, contador);
    usuarios.push(alumno1);

    // Clase Medico
    class medico {
        constructor(nombre, apellidos, edad, centro, consulta, idMed) {
            this.nombre = nombre;
            this.apellidos = apellidos;
            this.edad = edad;
            this.centro = centro;
            this.consulta = consulta;
            this.idMed = contador * 2;
        }
    }
    if (alumno1.codigoPostal == "41020") {
        centro = listaCentros[0];
    }
    else if (alumno1.codigoPostal == "41019") {
        centro = listaCentros[1];
    }

    // Genera medico aleatoriamente
    var medico1 = new medico(listaNombres[nombreAleatorio], listaApellidos[apellidoAleatorio], '26', centro, consultaAleatoria);

    // CITA
    class cita {
        constructor(nombreUsu, apellUsu, nombreMed, apellMed, centro, consulta, fecha, idCita, idUsu, idMed) {
            this.nombreUsu = nombreUsu;
            this.apellUsu = apellUsu;
            this.nombreMed = nombreMed;
            this.apellMed = apellMed;
            this.centro = centro;
            this.consulta = consulta;
            this.fecha = fecha;
            this.idCita = contador;
            this.idUsu = alumno1.idUsu;
            this.idMed = medico1.idMed;
        }
    }
    // Controlador de fecha
    if (document.getElementById("fecha").value == "" || document.getElementById("fecha").value < currentDate) {
        alert("Debe seleccionar una fecha correcta");
        return false;
    }
    else { var fecha = document.getElementById("fecha").value; }

    // Crear cita        
    var citaMedica = new cita(alumno1.nombre, alumno1.apellidos, medico1.nombre, medico1.apellidos, medico1.centro, medico1.consulta, fecha);
    citas.push(citaMedica);
    citasId.push(contador);
    contador++;
}

function verCitas(form) {
    if (citas.length == 0) {
        alert("No hay citas!");
    }
    else {
        let div = document.getElementById("contenedorDeCitas");
        let text = "";
        console.log("Los IDs existentes son: ");
        citas.forEach(element => {

            // * Operador ternario, si el id es el 1 no lleva la flecha, a partir del uno, añade los id con una flecha delante
            text += (element.idCita == 1) ? (element.idCita) : ("\t" + element.idCita);

            // ! Segunda Forma
            // if (element.idCita == 1) {
            //     text += (element.idCita);
            // } else {
            //     text += ("\t" + element.idCita );
            // }

        });
        let BuscarId = prompt("Que ID desea explorar? \n Disponibles: " + text);
        let encontrado = false;
        let citatext = "";

        citas.forEach(element => {
            if (element.idCita == parseInt(BuscarId)) {
                // * Creo un div con el contenido de la cita y le asigno un id al div cita-ID 
                citatext =
                    `<div id='cita-${element.idCita}'>` +
                    "<img src=img/juntaAnd.png class=imagen>" +
                    "<hr class=my-1></hr>" +
                    " <p>Nombre del usuario: " + element.nombreUsu + " " + element.apellUsu + "</p>" +
                    " <p>Nombre del medico: " + element.nombreMed + " " + element.apellMed + "</p>" +
                    " <p>Centro médico: " + element.centro + "</p>" +
                    " <p>Número de consulta: " + element.consulta + "</p>" +
                    " <p>Fecha: " + element.fecha + "</p>" +
                    "</div>";
                div.innerHTML = citatext;
                encontrado = true;

            }
        });
        if (!encontrado) {
            citatext = "No hay ninguna cita con ese ID";
            div.innerHTML = citatext;
        }
        console.log(citas);
    }

}


function borrarCita() {
    let div = document.getElementById("contenedorDeCitas");
    let text = "";

    if (citasId.length == 0) {
        alert("No hay citas!");
    }
    else{
        let BuscarId = prompt("Que cita desea borrar?: ")
        var indice = citasId.indexOf(parseInt(BuscarId)); // obtenemos el indice
        if (indice !== -1) {
            citas.splice(indice, 1); // Elimina la cita
            div.innerHTML = 
            "<div class='alert alert-success' role=alert>" +
            "La cita ha sido borrada con éxito! </div>"; // Vacio el div
            citasId.splice(indice, 1); // Elimina el ID de la cita
        } else {
            text = 
            "<div class='alert alert-danger' role=alert>" +
            "El ID introducido no existe!</div>" ;
            div.innerHTML = text;
        }
    }
}