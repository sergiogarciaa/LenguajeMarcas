// Persona
function usuario(nombre, apellidos, edad, codigoPostal){
	this.nombre = nombre;
	this.apellidos = apellidos;
	this.edad = edad;
	this.codigoPostal = codigoPostal;
}

// Conf de alumno
let usuarioNomb = prompt("Introduzca el nombre del alumno");
let usuarioNomb = prompt("Introduzca el apellido del alumno");
let usuEdad = prompt("Introduzca la edad");
let codigoPostal = prompt("Introduzca su código postal (41020 -> Centro Macarena | 41019 -> Virgen del Rocio): ")

// Crear alumno
var alumno1 = new usuario(usuarioNomb, usuarioNomb, parseInt(usuEdad), codigoPostal);
	
	
// Clase Medico
class medico {
  constructor(nombre, apellidos, edad, centro) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
    this.centro = centro;
  }
}
var medico1 = new medico('Juan', 'Pérez Gómez', 32, 'Virgen del Rocío');
var medico2 = new medico('Maria', 'Gonzalez Nuñez', 26, 'Macarena');
var medico3 = new medico('Pepe', 'Vasolvia Rodriguez', 38, 'Virgen del Rocío');
var medico4 = new medico('Isabel', 'Castañuelas Rijaldo', 34, 'Macarena');
//



// Elección de medico, luego comprobar si el centro del medico corresponde al mismo codigo postal del que el usuario tiene la cita

let medicoElegido = prompt("1 -> Juan Perez Gomez | Virgen del Rocío\n2 -> Maria Gonzalez Nuñez | Macarena\n3 -> Pepe Vasolvia Rodriguez \ Virgen de Rocío\n4 -> Isabel Castañuelas Rijaldo | Macarena ");

switch (medicoElegido){
	case "1" : 
	if (alumno1.codigoPostal != "41020"){
		document.write("No puede elegir a este médico, no corresponde a su zona");
		break;
	}
	else{
		console.log("Ha elegido a " + medico1.nombre + " " + medico1.apellidos + " del centro " + medico1.centro);
		break;
	}
	
	case "2" : console.log("Ha elegido a " + medico2.nombre + " " + medico2.apellidos + " del centro " + medico2.centro);
			break;
	case "3" : console.log("Ha elegido a " + medico3.nombre + " " + medico3.apellidos + " del centro " + medico3.centro);
			break;
	case "4" : console.log("Ha elegido a " + medico4.nombre + " " + medico4.apellidos + " del centro " + medico4.centro);
			break;
	default: console.log("No existe ese médico");
			break;
}
