let usuarios = [];
let listaIdUsu = [];
let citasId = [];
let citas =  [];
let contador = 1;
function cogerCita(){
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
    let nombre = prompt("Introduzca el nombre del alumno");
    let apellidos = prompt("Introduzca el apellido del alumno");
    let edad = prompt("Introduzca la edad");
    let codigoPostal = prompt("Introduzca su código postal (41020 -> Centro Macarena | 41019 -> Virgen del Rocio): ");
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
            this.idMed = contador*2;
        }
    }
    if (alumno1.codigoPostal == "41020"){
        centro = listaCentros[0];
    }
    else if (alumno1.codigoPostal == "41019"){
        centro = listaCentros[1];
    }
    else{
        document.write("No se ha encontrado ningun centro correspondiente a tu Código Postal");
        stop();
    }
// Genera medico aleatoriamente
    var medico1 = new medico(listaNombres[nombreAleatorio], listaApellidos[apellidoAleatorio], '26', centro, consultaAleatoria);

// CITA
    class cita {
        constructor(nombreUsu, apellUsu, nombreMed, apellMed, centro, consulta, hora, idCita, idUsu, idMed){
            this.nombreUsu = nombreUsu;
            this.apellUsu = apellUsu;
            this.nombreMed = nombreMed;
            this.apellMed = apellMed;
            this.centro = centro;
            this.consulta = consulta;
            this.hora = hora;
            this.idCita = contador;
            this.idUsu = alumno1.idUsu;
            this.idMed = medico1.idMed;
        }
    }
    let hora = prompt("Las horas disponibles son. \n8 | 9 | 10 | 11 | 14 | 18");
    if (hora === "8" || hora === "9" || hora === "10" || hora === "11" || hora === "14" || hora === "18"){
        var citaMedica = new cita(alumno1.nombre, alumno1.apellidos, medico1.nombre, medico1.apellidos,  medico1.centro, medico1.consulta, parseInt(hora));
        console.log(citaMedica.nombreUsu + " " + citaMedica.apellUsu + " tiene cita con " + citaMedica.nombreMed + " " + citaMedica.apellMed + " en el centro " + citaMedica.centro + " en la consulta " + citaMedica.consulta + " a las " + citaMedica.hora + " ID del Usuario: " + alumno1.idUsu + " ID Medico: " + medico1.idMed);
        citas.push(citaMedica);
        citasId.push(contador);
        contador++;
    }
    else{
        document.write("Hora no disponible");
    }
}

function verCitas(){
    console.log("Los IDs existentes son: ");
    for (let i = 0; i < citasId.length; i++){
        console.log(citasId[i]);
    }
    let BuscarId = prompt("Que ID desea explorar?: ")
    console.log(citas.at(BuscarId-1));

}
function borrarCita(){
    let BuscarId = prompt("Que cita desea borrar?: ")
    var indice = citas.indexOf(BuscarId); // obtenemos el indice
    citas.splice(indice, 1); // 1 es la cantidad de elemento a elimina
    citasId.splice(indice, 1);
}
