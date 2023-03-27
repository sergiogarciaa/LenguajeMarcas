// García Barrera Sergio

function ejercicio1(){
	/*Ejercicio 1.
	Realiza un proyecto que contenga un programa que al entrar en la primera ventana solicite la edad del usuario. 
	Una vez solicitada la edad, el programa deberá indicar "Tiene permiso para acceder" si es mayor o igual de 18 y 
	"No se permite acceso a menores de edad" si tiene menos. 
	La edad que se introduzca no debe estar en un rango entre 1 y 100, ambos inclusive.*/
	
	var edad = prompt("Introduce una edad");
	if(edad > 0 && edad < 100){
		if(edad < 18){
			alert("No se permite acceso a menores de edad");
		}
		else{
			alert("Tiene permiso para acceder");
		}
	}
	else{
		alert("Edad no válida");
	}
}

function ejercicio2(){
	/*Realizar un programa para una tienda de ropa. Se solicitará la categoría de ropa y el precio actual. 
	Como coincide que se está en período de rebajas, el programa deberá ser capaz de detectar las siguientes 
	categorías y aplicarles el descuento indicado:
	Camisetas - 5%
	Pantalones - 10%
	Ropa interior - 0%
	Chaquetones - 50%
	A cualquier otra categoría, deberá aplicarle un 2%.*/
		
	var categoria = prompt("Camisetas, Pantalones, Ropa Interior, Chaquetones: \nIntroduzca la categoria de ropa.");
	var precio = prompt("Introduzca el precio actual");
	var descuento5 = (precio * 5)/100;
	var descuento10 = (precio * 10)/100;
	var descuento2 = (precio * 2)/100;
	
	switch(categoria.toLowerCase()){
		case "camisetas" : alert("El precio con el descuento seria: " + (precio - descuento5));
							break;
		case "pantalones" : alert("El precio con el descuento seria: " + (precio - descuento10));
							break;
		case "ropa interior" : alert("El precio con el descuento seria: " + precio);
							break;				
		case "chaquetones" : alert("El precio con el descuento seria: " + (precio * 50) / 100);
							break;
		default : alert("El precio con el descuento seria: " + (precio - descuento2));
	}
	

}