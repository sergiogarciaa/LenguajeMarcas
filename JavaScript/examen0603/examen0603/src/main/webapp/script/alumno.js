function altaAlumno(){
	function alumnoconf(nombre, apellidos, edad){
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.edad = edad;
	}
	
	// Conf de alumno
	let nombreAl = prompt("Introduzca el nombre del alumno");
	let apellidosAl = prompt("Introduzca el apellido del alumno");
	let edadAl = prompt("Introduzca la edad");
	
	// Crear alumno
	var alumno1 = new alumnoconf(nombreAl, apellidosAl, parseInt(edadAl));
	// Apellidos, Nombre
	document.write(alumno1.apellidos + ", " + alumno1.nombre +"<br>");
	// Edad
	document.write("Edad: " + alumno1.edad);
	// Tipo de dato edad
	document.write("<br> Edad es un tipo: " + typeof(alumno1.edad));
	
}