function criaModalSerie(nome, genero, imagem, sumario, dt_lanc, nota) {
	tituloModal = document.getElementById('modalTitulo')
	tituloModal.innerHTML = nome
	tituloModal.style.fontWeight = 'bold'
	tituloModal.style.marginLeft = '30px'

	generoModal = document.getElementById('modalGenero')
	generoModal.innerHTML = 'Gênero: ' + genero
	generoModal.style.fontWeight = 'bold'
	generoModal.style.textAlign = 'left'
	generoModal.style.marginLeft = '10px'

	favModal = document.getElementById('favoritar')
	favModal.style.fontSize = '25px'
	if (color != '' && nome == favorito.nome) {
		favModal.style.color = favorito.color.toString()
	} else {
		favModal.style.color = 'gray'
	}

	imgModal = document.getElementById('imgModal')
	imgModal.src = imagem
	imgModal.style.margin = '0 auto'
	imgModal.style.marginTop = '10px'
	imgModal.width = '400'
	imgModal.height = '300'

	descModal = document.getElementById('modalCorpo')
	descModal.innerHTML = sumario
	descModal.style.fontSize = '10px'

	dt_lancModal = document.getElementById('dtLancModal')
	dt_lancModal.innerHTML = 'Data de Lançamento: ' + dt_lanc
	dt_lancModal.style.fontWeight = 'bold'
	dt_lancModal.style.textAlign = 'left'
	dt_lancModal.style.marginLeft = '10px'

	notaMod = document.getElementById('notaModal')
	notaMod.innerHTML = 'Avaliação: ' + nota
	notaMod.style.fontWeight = 'bold'
	notaMod.style.textAlign = 'left'
	notaMod.style.marginLeft = '10px'

	$(document).ready(function() {
		$('#exibeSerie').modal('show')
	})
}
