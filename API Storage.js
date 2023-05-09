// Verificar si el navegador soporta Web Storage API
if (typeof(Storage) !== "undefined") {
	// Cargar datos guardados (si existen)
	if (localStorage.getItem("nombre")) {
		document.getElementById("nombre").value = localStorage.getItem("nombre");
	}

	if (localStorage.getItem("correo")) {
		document.getElementById("correo").value = localStorage.getItem("correo");
	}

	if (localStorage.getItem("telefono")) {
		document.getElementById("telefono").value = localStorage.getItem("telefono");
	}
} else {
	alert("Lo siento, su navegador no soporta Web Storage API");
}

// Función para guardar los datos
function guardarDatos() {
	var nombre = document.getElementById("nombre").value;
	var correo = document.getElementById("correo").value;
	var telefono = document.getElementById("telefono").value;

	// Verificar si los campos están vacíos
	if (nombre === "" || correo === "" || telefono === "") {
		document.getElementById("mensaje").innerHTML = "Por favor, complete todos los campos";
	} else {
		// Guardar los datos en el almacenamiento local
		localStorage.setItem("nombre", nombre);
		localStorage.setItem("correo", correo);
		localStorage.setItem("telefono", telefono);

		document.getElementById("mensaje").innerHTML = "Los datos han sido guardados";
	}
}
