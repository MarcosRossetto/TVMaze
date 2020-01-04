function pesquisaFav(nSerie) {
	$(document).ready(function() {
		url = 'http://api.tvmaze.com/search/shows?q=' + nSerie
		$.ajax({
			url: url,
			type: 'get',
			datatype: 'json',
			success: function(data) {
				nome = data[0]['show']['name']
				genero = data[0]['show']['genres'][0]
				if (genero == undefined) {
					genero = 'Sem Gênero'
				}
				imagem = data[0]['show']['image']['medium']
				criaCard(imagem, nome, genero)
			},
			error: function(error) {
				console.log(error)
			},
		})
	})
}
