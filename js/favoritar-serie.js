var favorito = {
	nome: '',
	color: 'gray',
}
var color = ''

function favoritar() {
	favModal = document.getElementById('favoritar')
	favModal.style.color
	if (favModal.style.color == 'gray') {
		favorito.nome = 'The Young and the Restless'
		favorito.color = 'yellow'
		console.log(favorito)
		//favModal.style.color = 'yellow'
		alert('Série favoritada')
	} else {
		favorito.nome = 'The Young and the Restless'
		favorito.color = 'yellow'
		//favModal.style.color = 'gray'
		alert('Série desfavoritada')
	}
	console.log(color)
}
