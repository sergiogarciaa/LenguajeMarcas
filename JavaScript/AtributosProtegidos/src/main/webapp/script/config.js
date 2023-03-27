/*
Desarrolla un proyecto para el control de stock de un concesionario. El concesionario trabaja con coches y motos.

Crea una clase vehículos con información básica común para coches y motos.
Marca (protegido)
Modelo (protegido)
Cilindrada (protegido)

Crea dos subclases, una coche y otra moto. Cada una de estas subclases, además de llamar al constructor de 
la clase padre, ampliarán sus atributos con dos nuevos cada una.

Coche:
Número de puertas (protegido)
Número ocupantes
Moto:
AnioDisenio (protegido)
Carnet
Instancia la clase coche y moto. Da valor a todos los atributos de las subclases 
(recuerda que las subclases también tienen los de la superclase). Accede a todos lo valores.

*/

//------------------- Clase Padre Vehiculo -----------------------//
class Vehiculo {
  	constructor(marca, modelo, cilindrada) {
    this._marca = marca;
    this._modelo = modelo;
    this._cilindrada = cilindrada;
  }
  
  get marca() {
    return this._marca;
  }
  set marca(valor){
	  this._marca = valor;
  }

  get modelo() {
    return this._modelo;
  }

  get cilindrada() {
    return this._cilindrada;
  }
}


//---------------- COCHE ----------------//

class Coche extends Vehiculo {
  constructor(marca, modelo, cilindrada, numPuertas, numOcupantes) {
    super(marca, modelo, cilindrada);
    this._numPuertas = numPuertas;
    this.numOcupantes = numOcupantes;
  }

	get numPuertas() {
	    return this._numPuertas;
	  }
	set numPuertas(nPuertas){
		this._numPuertas = nPuertas;		
	}
}

//---------- MOTO -------------//
class Moto extends Vehiculo {
  constructor(marca, modelo, cilindrada, anioDisenio, carnet) {
    super(marca, modelo, cilindrada);
    this._anioDisenio = anioDisenio;
    this.carnet = carnet;
  }

  get anioDisenio() {
    return this._anioDisenio;
  }

  set anioDisenio(valor){
	  this._anioDisenio = valor;
  }
}

// -------------------Instanciar y Valores ------------------------//

var Coche1 = new Coche("Toyota", "Corolla", 1600, 4, 5);
var Moto1 = new Moto("Honda", "CBR", 1000, 2022, "A");
console.log(Coche1);
console.log(Moto1);
