function edadEscolar() {
	const edad = document.getElementById('input-Edad').value;
	let nivel;

	if (edad <= 0) {
		alert('La edad debe ser mayor que 0');
	} else if (edad > 0 && edad <= 5) {
		nivel = 'Preescolar';
	} else if (edad >= 6 && edad <= 11) {
		nivel = 'Primaria';
	} else if (edad >= 12 && edad <= 15) {
		nivel = 'ESO';
	} else if (edad >= 16 && edad <= 17) {
		nivel = 'Bachillerato';
	} else {
		nivel = 'FP o Universidad';
	}

	console.log(edad, nivel);

	if (edad > 0) {
		const nivelFinal = (document.getElementById('nivelEscolar').innerHTML = `Tu nivel de educacion es: ${nivel}`);
	} else {
		alert('No se encuentra tu nivel de educacion');
	}
}
