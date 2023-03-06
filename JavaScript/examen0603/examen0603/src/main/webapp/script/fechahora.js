var ciudad = prompt("De que ciudad desea obtener fecha y hora? [Madrid, Paris, Londres]: ");
	// Comprobacion de que introduce la ciudad deseada
	if(ciudad.toLowerCase() !== "madrid" && ciudad.toLowerCase() !== "paris" && ciudad.toLowerCase() !== "londres"){
		document.write("La ciudad elegida no es valida");
	}
	
	// Si ha elegido una de las 3
	else{
	var fecha = new Date();
	var mesActual = fecha.getMonth() + 1;
	
	document.write("Ciudad: " + ciudad);
	document.write("<br> Fecha: " + fecha.getDate() + "/" + mesActual + "/" + fecha.getFullYear() + "<br>");
	
	if(ciudad.toLowerCase() == "londres"){
		document.write("Hora: " + fecha.getUTCHours() + ":" + fecha.getMinutes());
		
	}
	else{
		document.write("Hora: " + fecha.getHours() + ":" + fecha.getMinutes());
	}
}
	
	