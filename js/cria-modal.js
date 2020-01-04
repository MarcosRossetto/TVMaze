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

	favModal = document.createElement('i')
	favModal.id = nome
	favModal.style.marginLeft = '15px'
	favModal.className = 'fas fa-star'
	let listaFav = Array()
	listaFav = recuperaFav()
	//console.log(listaFav)
	if (listaFav.indexOf(nome) != -1) {
		favModal.style.color = 'yellow'
	}
	if (listaFav.indexOf(nome) == -1) {
		favModal.style.color = 'gray'
	}
	favModal.addEventListener('click', function() {
		if (favModal.style.color == 'gray') {
			favModal.style.color = 'yellow'
			favSerie(nome)
			alert('Série Favoritada')
		} else if (favModal.style.color == 'yellow') {
			favModal.style.color = 'gray'
			desfavSerie(nome)
			alert('Série Desfavoritada')
		}
	})
	tituloModal.appendChild(favModal)

	imgModal = document.getElementById('imgModal')
	imgModal.src = imagem
	imgModal.style.margin = '0 auto'
	imgModal.style.marginTop = '10px'
	imgModal.width = '300'
	imgModal.height = '250'

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
