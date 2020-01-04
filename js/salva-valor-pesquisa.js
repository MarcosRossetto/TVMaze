function salvaPesquisa() {
	var campo = document.getElementById('campo').value
	campo = campo.toLowerCase().trim()
	localStorage.setItem('buscaSerie', campo)
	if (campo == '') {
		alert('Campo Vazio')
	} else {
		window.location.href = 'pag-busca' + '/' + campo + '.html'
		pesquisaSerie(recuperaValorPesquisa())
	}
}
