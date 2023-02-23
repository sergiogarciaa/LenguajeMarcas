texto = prompt("Introduce un texto:");
if (texto === texto.toUpperCase()){
    document.write("El texto [" + texto + "] está formado solo por mayúsculas")
}
else if (texto === texto.toLowerCase()){
    document.write("El texto [" + texto + "] está formado solo por minúsculas")
}
else{
    document.write("El texto [" + texto + "] está formado por mayúsculas y mínusculas")
}