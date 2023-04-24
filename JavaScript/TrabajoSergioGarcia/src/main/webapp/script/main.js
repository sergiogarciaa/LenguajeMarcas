// AUTOR: Sergio García Barrera

let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
let contador = JSON.parse(localStorage.getItem('contador')) || 1;
let votosMunicipales = JSON.parse(localStorage.getItem('votosMunicipales')) || [];
let votosGenerales = JSON.parse(localStorage.getItem('votosGenerales')) || [];

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


//  CARGA PARA MENU, SE EJECUTA DESPUES DEL WINDOW ONLOAD DE ABAJO!!
function cargarPagina() {
    let pantallaCarga = document.getElementById("pantallaCarga");
    let body = document.querySelector("body");
    let timer = 0;
    if(timer<50){
        let intervalo = setInterval(function() {
          timer++;
          if (timer === 50) {
            continuar();
            pantallaCarga.classList.add("d-none");
            clearInterval(intervalo);
            body.classList.remove("overflow-hidden");
          }
          
        }, 50);
    }
  }


  window.onload = function() {
    // Para que se carge automático el loading de arriba ¡¡
    cargarPagina();    
    // Para que funcione automaticamente las funciones de los canvas
    resultados();
    resultadosMunicipales();
  };

  // MENU

  function continuar() {

    div = document.getElementById("div1");
    text = "";
    usuarios.forEach(element => {        
        if(element.nombre != null ){
            text =  '<nav class="navbar-light container-fluid d-flex">' +
                '<div class="col-4">' +
                '<img src="img/boceto.png" height=80 class="d-inline-block text-center align-top" alt=Bootstrap>' +
                '</div>' +
                '<div class="col-4">' +
                '<h4 class="mt-4 text-center"> Bienvenido ' + element.nombre + '</h4>' +
                '</div>' +
                '<div class="col-4 text-end">' +
                '<button type="button" class="btn btn-outline-dark mt-4">' +'<a href="index.html" class="text-decoration-none text-dark" onclick="resetearLocalStorage()">Salir</a>' + '</button>' +
                '</div>' +
                '</nav>' +

            '<div class="container d-flex justify-content-between mt-5" style="padding-left: 150px; padding-right:150px">' +

                '<div class="card col-6" style="width: 24rem;">' +
                '<img class="card-img-top" src="img/municipales.png" alt="Card image cap">' +
                    '<div class="card-body text-center">' +
                    '<a href="municipales.html" class="btn btn-primary text-decoration-none">Elecciones Municipales</a>' +
                    '</div>' +
                '</div>' +
                '<div class="card col-6" style="width: 24rem;">' +
                '<img class="card-img-top" src="img/generales.jpg" alt="Card image cap">' +
                    '<div class="card-body text-center">' +
                    '<a href="generales.html" class="btn btn-primary">Elecciones Generales</a>' +
                    '</div>' + 
                '</div>' +
            '</div>' +
            '<div class="container d-flex mt-5" style="padding-left: 150px;">' +
                '<hr>' +
                '<div class="card col-6" style="width: 24rem;">' +
                '<img class="card-img-top" src="img/resultados.jpg" alt="Card image cap">' +
                    '<div class="card-body text-center">' +
                    '<a href="resultados.html" class="btn btn-primary">Ver resultados</a>' +
                    '</div>' + 
                '</div>' +
                
              '</div>';
              div.innerHTML = text;
        }    
    });
}

// VOTO MUNICIPAL

function votarMuni(){
    var votoMunicipal = "";

    if (document.getElementById('PSOE').checked)
    {
        votoMunicipal = "PSOE"
    }
    if (document.getElementById('PP').checked)
    {
        votoMunicipal = "PP"
    }
    if (document.getElementById('PODEMOS').checked)
    {
        votoMunicipal = "PODEMOS"
    }
    if (document.getElementById('VOX').checked)
    {
        votoMunicipal = "VOX"
    }
    if (document.getElementById('PACMA').checked)
    {
        votoMunicipal = "PACMA"
    }
    if (document.getElementById('CIUDA').checked)
    {
        votoMunicipal = "CIUDADANOS"
    }
    if (document.getElementById('OTROS').checked)
    {
        votoMunicipal = "OTROS"
    }

    votosMunicipales.push(votoMunicipal);
    // Guardar en el local
    localStorage.setItem('votosMunicipales', JSON.stringify(votosMunicipales));

    // Comprobacion para ver que funcionase
    // usuarios.forEach(element => {
    //     for (let i = 0; i < votosMunicipales.length; i++) {
    //        alert('El usuario ' + element.nombre + ', ha votado a ' +  votosMunicipales[i]); 
    //     }
    // });
    
}
// VOTO GENERAL

function votarGenerales(){
    var votoGeneral = "";

    if (document.getElementById('PSOE').checked)
    {
        votoGeneral = "PSOE"
    }
    if (document.getElementById('PP').checked)
    {
        votoGeneral = "PP"
    }
    if (document.getElementById('PODEMOS').checked)
    {
        votoGeneral = "PODEMOS"
    }
    if (document.getElementById('VOX').checked)
    {
        votoGeneral = "VOX"
    }
    if (document.getElementById('OTROS').checked)
    {
        votoGeneral = "OTROS"
    }

    votosGenerales.push(votoGeneral);
    // Guardar en el local
    localStorage.setItem('votosGenerales', JSON.stringify(votosGenerales));
   
}

//  CANVAS  MUNICIPALES 
function resultadosMunicipales(){ 
            // CREAR CANVAS
            let miCanvas = document.getElementById('Municipal');    
            
            let PSOE = 0;
            let PP = 0;
            let PODEMOS = 0;
            let VOX = 0;
            let PACMA = 0;
            let CIUDADANOS = 0;
            let OTROS = 0;
            // Obtener el elemento canvas
            

            votosMunicipales.forEach(element => {
                switch (element) {
                    case "PSOE":
                        PSOE++
                    break;
                    case "PP":
                        PP++
                    break;
                    case "PODEMOS":
                        PODEMOS++
                    break;
                    case "VOX":
                        VOX++
                    break;
                    case "PACMA":
                        PACMA++
                    break;
                    case "CIUDADANOS":
                        CIUDADANOS++
                    break;
                    case "OTROS":
                        OTROS++
                    break;
                }
            });

            // Crear una instancia del objeto Chart
            var miGrafico2 = new Chart(miCanvas, {
            type: 'doughnut',
            data: {
                labels: ['PSOE', 'PP', 'PODEMOS', 'VOX', 'PACMA', 'CIUDADANOS', 'OTROS'],
                datasets: [{
                label: 'Datos',
                data: [PSOE, PP, PODEMOS, VOX, PACMA, CIUDADANOS, OTROS],
                backgroundColor: [
                    'rgba(200, 20, 20, 0.6)',
                    'rgba(20, 20, 200, 0.6)',
                    'rgba(150, 20, 200, 0.6)',
                    'rgba(20, 200, 20, 0.6)',
                    'rgba(0, 255, 127, 0.6)',
                    'rgba(255, 145, 0, 0.6)',
                    'rgba(128, 128, 128, 0.6)'
                ],
                borderColor: [
                    'rgba(200, 20, 20, 1)',
                    'rgba(20, 20, 200, 0.6)',
                    'rgba(150, 20, 200, 0.6)',
                    'rgba(20, 200, 20, 0.6)',
                    'rgba(0, 255, 127, 0.6)',
                    'rgba(255, 145, 0, 0.6)',
                    'rgba(128, 128, 128, 1)'
                ],
                borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true
            }
            });
    }

// CANVAS GENERAL
function resultados(){ 
        // Obtener el elemento canvas
                
            let miCanvas = document.getElementById('General');

            let PSOE = 0;
            let PP = 0;
            let PODEMOS = 0;
            let VOX = 0;
            let OTROS = 0;
            
        
            votosGenerales.forEach(element => {
                switch (element) {
                    case "PSOE":
                        PSOE++
                    break;
                    case "PP":
                        PP++
                    break;
                    case "PODEMOS":
                        PODEMOS++
                    break;
                    case "VOX":
                        VOX++
                    break;
                    case "OTROS":
                        OTROS++
                    break;
                }
            });

            // Crear una instancia del objeto Chart (PARA HACER GRAFICO)
            var miGrafico = new Chart(miCanvas, {
            type: 'doughnut',
            data: {
                labels: ['PSOE', 'PP', 'PODEMOS', 'VOX', 'OTROS'],
                datasets: [{
                label: 'Datos',
                data: [PSOE, PP, PODEMOS, VOX, OTROS],
                backgroundColor: [
                    'rgba(200, 20, 20, 0.6)',
                    'rgba(20, 20, 200, 0.6)',
                    'rgba(150, 20, 200, 0.6)',
                    'rgba(20, 200, 20, 0.6)',
                    'rgba(128, 128, 128, 0.6)'
                ],
                borderColor: [
                    'rgba(200, 20, 20, 1)',
                    'rgba(20, 20, 200, 0.6)',
                    'rgba(150, 20, 200, 0.6)',
                    'rgba(20, 200, 20, 0.6)',
                    'rgba(128, 128, 128, 1)'
                ],
                borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true
            }
            });
}

// FUNCION PARA OCULTAR / MOSTRAR LOS CANVAS!
function ocultarMostrar(boton){
    let Municipal = document.getElementById('mContenedor')
    let General = document.getElementById('gContenedor'); 
    if(boton == "m"){

        if(Municipal.classList.contains("d-none")){
            Municipal.classList.remove("d-none"); 
            if(!General.classList.contains('d-none'))
            General.classList.add("d-none");
        }
    }
    
    if(boton == "g"){

        if(General.classList.contains("d-none")){
            General.classList.remove("d-none"); 
            if(!Municipal.classList.contains('d-none'))
            Municipal.classList.add("d-none");
        }
    }
    
}