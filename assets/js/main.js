/**
 * LOCAL STORAGE
 * Hemos creado nuestro formulario y nuestra información ingresadase guardara en nuestra página
 * aunque cerremos y recarguemos
 */

// Función para obtener los datos que el usuario ingrese en los input

function guardarDatos() {
    // Uso los id
    localStorage.nombre = document.getElementById("nombre").value;
    localStorage.password = document.getElementById("password").value;
}

// Función para recuperar los datos ingresados
function recuperarDatos() {
    // Si los datos ingresados son distintos de undefined los mostrara en pantalla
    if ((localStorage.nombre != undefined) && (localStorage.password != undefined)) {
        document.getElementById("datos").innerHTML = "Nombre: " + localStorage.nombre + "<br/> Password: " + localStorage.password;
    } else {
        // En caso de no introducir nada
        document.getElementById("datos").innerHTML = "No has introducido tu nombre y tu password";
    }
}