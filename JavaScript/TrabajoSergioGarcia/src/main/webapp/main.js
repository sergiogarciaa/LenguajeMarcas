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


//  BARRA DE CARGA PPARA MENU!!
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
      
    }, 30);
  }


  window.onload = function() {
    cargarPagina();
  };
  // MENU

  function continuar() {
    let divOcultar = document.getElementById("pantallaCarga");
    let botonContinuar = document.getElementById("boton-continuar");
    divOcultar.style.display = "none";
    botonContinuar.style.display = "none";
    div = document.getElementById("div1");
    text = "";
    usuarios.forEach(element => {        
        console.log(element.idUsu);
        text =  '<nav class="navbar-light container-fluid d-flex">' +
                '<div class="col-4">' +
                '<img src="img/boceto.png" height=80 class="d-inline-block text-center align-top" alt=Bootstrap>' +
                '</div>' +
                '<div class="col-4">' +
                '<h4 class="mt-4 text-center"> Bienvenido ' + element.nombre + '</h4>' +
                '</div>' +
                '<div class="col-4 text-end">' +
                '<button type="button" class="btn btn-outline-dark mt-4">' +'<a href="index.html" class="text-decoration-none text-dark">Salir</a>' + '</button>' +
                '</div>' +
                '</nav>' +

            '<div class="container d-flex justify-content-between mt-5" style="padding-left: 150px; padding-right:150px">' +

                '<div class="card col-6" style="width: 18rem;">' +
                '<img class="card-img-top" src="img/municipales.png" alt="Card image cap">' +
                    '<div class="card-body text-center">' +
                    '<a href="municipales.html" class="btn btn-primary text-decoration-none">Elecciones Municipales</a>' +
                    '</div>' +
                '</div>' +
                '<div class="card col-6" style="width: 18rem;">' +
                '<img class="card-img-top" src="img/generales.jpg" alt="Card image cap">' +
                    '<div class="card-body text-center">' +
                    '<a href="#" class="btn btn-primary">Elecciones Generales</a>' +
                    '</div>' + 
                '</div>' +
            '</div>' +
            '<div class="container d-flex mt-5" style="padding-left: 150px;">' +
                '<hr>' +
                '<div class="card col-6" style="width: 18rem;">' +
                '<img class="card-img-top" src="img/resultados.jpg" alt="Card image cap">' +
                    '<div class="card-body text-center">' +
                    '<a href="#" class="btn btn-primary">Ver resultados</a>' +
                    '</div>' + 
                '</div>' +
                
              '</div>';
                
        div.innerHTML = text;
    });
}
  

  
// VOTO MUNICIPAL

function votarMuni(){
    document.getElementsByName()
}