function recuperaDadoSerie(nome) {
	nomeSerie = nome
	var url = 'http://api.tvmaze.com/search/shows?q=' + nomeSerie
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
			imagem = data[0]['show']['image']['original']
			sumario = data[0]['show']['summary']
			dt_lanc = data[0]['show']['premiered']
			nota = data[0]['show']['rating']['average']
			if (nota == null) {
				nota = 'Sem Avaliação'
			}
			criaModalSerie(nome, genero, imagem, sumario, dt_lanc, nota)
		},
		error: function(error) {
			console.log(error)
		},
	})
}
