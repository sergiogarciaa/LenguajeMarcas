let usuarios = [];
let contador = 1;


function iniciarSession() {
    // Crea Persona
    class usuario {
        constructor(nombre, passwd, idUsu) {
            this.nombre = nombre;
            this.passwd = passwd;
            this.idUsu = contador;
        }
    }
    
    // Conf de Persona
    // Obtener valores del formulario
    if (document.getElementById("nombre").value == "") {
        alert("Nombre debe ser rellenado");
        return false;
    } else { var nombre = document.getElementById("nombre").value; }

    if (document.getElementById("passwd").value == "") {
        alert("Contraseña debe ser rellenado");
        return false;
    } else { var passwd = document.getElementById("passwd").value }


    // Crear alumno
    var user = new usuario(nombre, passwd, contador);
    usuarios.push(user);

    contador++;
    
    document.location.href="http://localhost:8080/TrabajoSergioGarcia/menu.html";
}