let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
let contador = JSON.parse(localStorage.getItem('contador')) || 1;


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


    // Crear usuario
    var user = new usuario(nombre, passwd, contador);
    usuarios.push(user);

    contador++;

    // Guardar usuarios y contador en LocalStorage
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    localStorage.setItem('contador', JSON.stringify(contador));
    
    window.location = "menu.html";
    alert("Será redirigido a otra página");

}
// RESETEAR EL STORAGE
function resetearLocalStorage() {
    localStorage.clear();
    console.log("localStorage ha sido reseteado.");
  }


//  BARRA DE CARGA
function cargarPagina() {
    let barra = document.querySelector(".progress-bar");
    let botonContinuar = document.getElementById("boton-continuar");
    let ancho = 0;
    let intervalo = setInterval(function() {
      ancho++;
      barra.style.width = ancho + "%";
      if (ancho === 100) {
        clearInterval(intervalo);
        botonContinuar.style.display = "block";
      }
      
    }, 70);
  }
  
  function continuar() {
    let barra = document.querySelector(".progress-bar");
    let botonContinuar = document.getElementById("boton-continuar");
    barra.style.display = "none";
    botonContinuar.style.display = "none";
    div = document.getElementById("div1");
    text = "";
    usuarios.forEach(element => {        
        text = "<h1> Bienvenido " + element.nombre + "</h1>";
        div.innerHTML = text;
    });
}
  
  window.onload = function() {
    cargarPagina();
  };
  