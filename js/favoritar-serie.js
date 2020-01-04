function favSerie(nome) {
	id = localStorage.getItem('id')
	if (id === null) {
		id = 0
		id = parseInt(id)
		localStorage.setItem('id', id)
	}
	id = parseInt(id)
	id += 1
	localStorage.setItem(id, JSON.stringify(nome))
	localStorage.setItem('id', id)
}

function recuperaFav() {
	let id = localStorage.getItem('id')
	let listaFav = Array()
	for (let i = 0; i <= id; i++) {
		let fav = JSON.parse(localStorage.getItem(i))
		/*if (fav === null || listaFav.indexOf(fav) != -1) {
			continue
		}*/
		listaFav.push(fav)
	}
	console.log(listaFav)
	return listaFav
}

function desfavSerie(nomeSerie) {
	lista = Array()
	lista = recuperaFav()
	localStorage.removeItem(lista.indexOf(nomeSerie))
}
