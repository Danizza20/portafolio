function generarRFC(nombre, apellidoPaterno, apellidoMaterno, dia, mes, anio) {
	// Convertimos las cadenas de texto a mayúsculas
	nombre = nombre.toUpperCase();
	apellidoPaterno = apellidoPaterno.toUpperCase();
	apellidoMaterno = apellidoMaterno.toUpperCase();

	// Obtenemos la primera letra del apellido paterno
	const primeraLetra = apellidoPaterno.charAt(0);

	// Obtenemos los últimos dos dígitos del año de nacimiento
	const ultimosDosDigitosAnio = anio.toString().substring(2);

	// Obtenemos el número de mes en dos dígitos
	const mesDosDigitos = mes.toString().padStart(2, '0');

	// Obtenemos el número de día en dos dígitos
	const diaDosDigitos = dia.toString().padStart(2, '0');

	// Generamos el RFC
	const rfc = primeraLetra + apellidoMaterno.charAt(0) + nombre.charAt(0) + ultimosDosDigitosAnio + mesDosDigitos + diaDosDigitos;

	// Devolvemos el RFC
	return rfc;
}
