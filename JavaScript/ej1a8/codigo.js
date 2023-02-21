//Muestra por consola
console.log("Hola Mundo!");
//Imprime en el documento
document.write("Soy el primer script");
let mensaje;
mensaje = alert("Esta pagina contiene el primer script");

function meses(){
    const meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
    for (let i = 0; i<meses.length; i++){
        console.log(meses[i]);
    }
}