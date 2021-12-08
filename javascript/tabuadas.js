let valor = 0;
let icones = [icone1, icone2, icone3, icone4, icone5, icone6, icone7,icone8];
let resultados = [resultadoTabuada1, resultadoTabuada2, resultadoTabuada3, resultadoTabuada4, resultadoTabuada5, resultadoTabuada6, resultadoTabuada7, resultadoTabuada8];
rato.onclick = function() {
	let valor = 1;
	for (var i = 0; i < 8; i++) {
		console.log('i: '+i)
		icones[i].innerHTML = "Rato";
		resultados[i].innerHTML = valor * (i+2);
	}
}

cachorro.onclick = function() {
	let valor = 2;
	for (var i = 0; i < 8; i++) {
		console.log('i: '+i)
		icones[i].innerHTML = "Cachorro";
		resultados[i].innerHTML = valor * (i+2);
	}
}

borboleta.onclick = function() {
	let valor = 3;
	for (var i = 0; i < 8; i++) {
		console.log('i: '+i)
		icones[i].innerHTML = "Borboleta";
		resultados[i].innerHTML = valor * (i+2);
	}
}
pato.onclick = function() {
	let valor = 4;
	for (var i = 0; i < 8; i++) {
		console.log('i: '+i)
		icones[i].innerHTML = "Pato";
		resultados[i].innerHTML = valor * (i+2);
	}
}