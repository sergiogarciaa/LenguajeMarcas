const fechaHoy = Date.now();

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
     // Obtener valores del formulario
    if(document.getElementById("nombre").value == ""){
        alert("Nombre debe ser rellenado");
        return false;
    }else{var nombre = document.getElementById("nombre").value;}

    if(document.getElementById("apellidos").value == ""){
        alert("Apellidos debe ser rellenado");
        return false;
    }else{var apellidos =  document.getElementById("apellidos").value}

    if(document.getElementById("edad").value == ""){
        alert("Edad debe ser rellenado");
        return false;
    }else{var edad = document.getElementById("edad").value == ""}

    if(document.getElementById("codigoPostal").value == ""){
        alert("Centro médico debe ser rellenado");
        return false;
    }else{var codigoPostal = document.getElementById("codigoPostal").value}



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

// Genera medico aleatoriamente
    var medico1 = new medico(listaNombres[nombreAleatorio], listaApellidos[apellidoAleatorio], '26', centro, consultaAleatoria);

// CITA
    class cita {
        constructor(nombreUsu, apellUsu, nombreMed, apellMed, centro, consulta, fecha, idCita, idUsu, idMed){
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
        if(document.getElementById("fecha").value == ""){
            alert("Debe seleccionar una fecha correcta");
            return false;
        }
        else{var fecha = document.getElementById("fecha").value;}

        // PINTAR CITA TEMPORAL
        const citaCreada = document.getElementById("citaCreada");
        const Boton = document.getElementById("Boton");

        Boton.addEventListener("click", function() {
        citaCreada.classList.toggle("hidden");
        citaCreada.value = citaMedica.nombreUsu + " " + citaMedica.apellUsu + " tiene cita con " + citaMedica.nombreMed + " " + citaMedica.apellMed + " en el centro " + citaMedica.centro + " en la consulta " + citaMedica.consulta + " el " + citaMedica.fecha;
            setTimeout(function(){
                    citaCreada.classList.toggle("hidden");
                    citaCreada.value = "";
            }, 4000); 
        });
        // 
        var citaMedica = new cita(alumno1.nombre, alumno1.apellidos, medico1.nombre, medico1.apellidos,  medico1.centro, medico1.consulta, fecha);
        citas.push(citaMedica);
        citasId.push(contador);
        contador++;
}

function verCitas(form){
    if(citasId.length == 0){
        alert("No hay citas!");
    }
    else{
        console.log("Los IDs existentes son: ");
        for (let i = 0; i < citasId.length; i++){
            console.log(citasId[i]);
        }
        let BuscarId = prompt("Que ID desea explorar?: ");
        let encontrada = false;
        for (let i = 0; i < citasId.length; i++) {
            if (citasId[i] === parseInt(BuscarId)) {
                 console.log(citas[i]);
                encontrada = true;
                break;
            }
        }
        if (!encontrada) {
            console.log("No hay ninguna cita con ese ID.");
        }
    
    }
    
}


function borrarCita(){
    let BuscarId = prompt("Que cita desea borrar?: ")
    var indice = citasId.indexOf(parseInt(BuscarId)); // obtenemos el indice
    if(indice !== -1){
		citas.splice(indice, 1); // Elimina la cita
    	citasId.splice(indice, 1); // Elimina el ID de la cita
	}else{
		document.write("No existe ninguna cita con el ID: " + BuscarId);
	}
    
}