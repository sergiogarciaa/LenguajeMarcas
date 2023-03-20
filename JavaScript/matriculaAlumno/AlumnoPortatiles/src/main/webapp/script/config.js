function limpiarConsola(){
	console.clear();
}

// Array Alumnos y Portatiles
let alumnos = [];
let portatiles = [];


function matricularAlumno() {
  // Configurar Alumno
  let nombre = prompt("Introduce el nombre del alumno:");
  let apellidos = prompt("Introduce los apellidos del alumno:");
  let telefono = prompt("Introduce el teléfono del alumno:");
  let marca = prompt("Introduce la marca del portátil:");
  let modelo = prompt("Introduce el modelo del portátil:");

  // Crear alumno.
  let alumnoGen = {
    id: alumnos.length + 1,
    nombre: nombre,
    apellidos: apellidos,
    telefono: telefono
  };

  // Crear Marca-Modelo Portatil
  let idPortatil = marca.slice(0, 3).toUpperCase() + "-" + modelo.slice(0, 3).toUpperCase();
  // Guardar ID, Marca, Modelo del portatil y el ID del alumno al que le corresponde
  portatiles.push({
    id: idPortatil,
    marca: marca,
    modelo: modelo,
    idAlumno: alumnoGen.id
  });

  // Guardar en el array Alumnos el alumno creado.
  // El método push es muy práctico para añadir valores a un array. push es genérico intencionadamente
  
  alumnos.push(alumnoGen);

  console.log("El alumno ha sido matriculado correctamente.");
}

function borrarAlumno() {
  // Creo un id que será el que el usuario introduzca
  let id = prompt("Introduce el identificador del alumno que deseas borrar:");

  /* findIndex() para buscar el objeto alumno en el array alumnos 
	 y que id sea igual a la variable id 
	 (que es la que ha introducido anteriormente el usuario a petición de borrar).
  */
  let alumnoIndex = alumnos.findIndex((alumnoGen) => alumnoGen.id == id);
  
  /*Utilizamos el = estricto ya que findIndex devuelve true o false, -1 sería false
  	Entonces, si no ha encontrado ese id introducido por el usuario dirá que no es válido
  */ 
  if (alumnoIndex === -1) {
    console.log("El identificador del alumno no es válido.");
    return;
  }
 
  let portatilIndex = portatiles.findIndex((portatil) => portatil.idAlumno == id);
  
  // Si es distinto a -1, por tanto habrá encontrado el id introducido
  
  /*El método splice() cambia el contenido de un array 
  eliminando elementos existentes y/o agregando nuevos elementos.*/
  
  if (portatilIndex !== -1) {
    portatiles.splice(portatilIndex, 1);
  }

  // Eliminar 1 elemento desde el índice (ID introducido por el usuario)
  alumnos.splice(alumnoIndex, 1);

  console.log("El alumno ha sido borrado correctamente.");
}

function listarAlumnos() {
  console.log("Identificador del alumno | Nombre | Apellidos | Telefono | Identificador del portatil");
  console.log("---------------------------------------------------------------------------------------");

  alumnos.forEach((alumnoGen) => {
	 // Busca en el array portatil si hay un id Alumno y un id Portatil igual.
    let portatil = portatiles.find((portatil) => portatil.idAlumno == alumnoGen.id);
    
   	// ? es para devolver un valor u otro dependiendo de su condición.
   	// Si portatil fuese falso se asignaria la cadena vacía,
    let idPortatil = portatil ? portatil.id : "";
    
    console.log(" \t\t " + alumnoGen.id + " \t\t | " + alumnoGen.nombre + " | " + alumnoGen.apellidos + " | " + alumnoGen.telefono + " | " + idPortatil );
  });
}

