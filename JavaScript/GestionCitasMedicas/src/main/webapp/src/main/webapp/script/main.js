let usuarios = []
let citas = []

function cogerCita(){
	var listaNombres = ["Juan", "Antonio", "Maria", "Eugenio", "Eugenia", "Marta", " Cristian", "Pepe", "Yumalai", "Andrea", "Sergio", "Xavi", "Rosa"];
var listaApellidos = ["Garcia Lopez", "Martin Martin", "González Fernández", "Pasart Nuñez", "Trals Baust"];
var listaCentros = ["Macarena", "Virgen Del Rocio"];

var nombreAleatorio = Math.floor(Math.random() * listaNombres.length);
var apellidoAleatorio = Math.floor(Math.random() * listaApellidos.length);
var centroAleatorio = Math.floor(Math.random() * listaCentros.length);
var consultaAleatoria = Math.floor(Math.random() * 100);

// Crea Persona
class usuario {
    constructor(nombre, apellidos, edad, codigoPostal, idUsu) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.codigoPostal = codigoPostal;
        this.idUsu = usuario.proximoId(0);
    }
    
    static proximoId() {
    if (!this.proximoId) {
      this.proximoId = 1;
    } else {
      this.proximoId++;
    }
    return this.proximoId;
  }
}

// Conf de Persona
let nombre = prompt("Introduzca el nombre del alumno");
let apellidos = prompt("Introduzca el apellido del alumno");
let edad = prompt("Introduzca la edad");
let codigoPostal = prompt("Introduzca su código postal (41020 -> Centro Macarena | 41019 -> Virgen del Rocio): ");

// Crear alumno
var alumno1 = new usuario(nombre, apellidos, parseInt(edad), codigoPostal);
usuarios.push(alumno1);

// Clase Medico
class medico {
  constructor(nombre, apellidos, edad, centro, consulta, idMed) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
    this.centro = centro;
    this.consulta = consulta;
    this.idMed = medico.proximoId();
  }
  
  static proximoId() {
    if (!this.proximoId) {
      this.proximoId = 1;
    } else {
      this.proximoId++;
    }
    return this.proximoId;
  }
}
// Genera medico aleatoriamente
var medico1 = new medico(listaNombres[nombreAleatorio], listaApellidos[apellidoAleatorio], '26', listaCentros[centroAleatorio], consultaAleatoria);

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
	  this.idCita = cita.proximoId();
	  this.idUsu = alumno1.idUsu;
	  this.idMed = medico1.idMed;
  }
  
  static proximoId() {
    if (!this.proximoId) {
      this.proximoId = 1;
    } else {
      this.proximoId++;
    }
    return this.proximoId;
  }
}
let hora = prompt("Las horas disponibles son. \n8 | 9 | 10 | 11 | 14 | 18");

var citaMedica = new cita(alumno1.nombre, alumno1.apellidos, medico1.nombre, medico1.apellidos,  medico1.centro, medico1.consulta, parseInt(hora));
citas.push(citaMedica);
console.log(citaMedica.nombreUsu + " " + citaMedica.apellUsu + " tiene cita con " + citaMedica.nombreMed + " " + citaMedica.apellMed + " en el centro " + citaMedica.centro + " en la consulta " + citaMedica.consulta + " a las " + citaMedica.hora + " ID del Usuario: " + alumno1.idUsu + " ID Medico: " + medico1.idMed);

}





function verCitas(){
	let BuscarId = prompt("Que ID desea explorar?: ")
	usuarios.indexOf(BuscarId);

}



