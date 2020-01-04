function pesquisaSerie(nSerie) {
  $(document).ready(function() {
    url = 'http://api.tvmaze.com/search/shows?q=' + nSerie
    $.ajax({
      url: url,
      type: 'get',
      datatype: 'json',
      success: function(data) {
        for (let x = 0; x <= data.length - 1; x++) {
          nome = data[x]['show']['name']
          genero = data[x]['show']['genres'][0]
          if (genero == undefined) {
            genero = 'Sem Gênero'
          }
          imagem = data[x]['show']['image']['medium']
          criaCard(imagem, nome, genero)
        }
      },
      error: function(error) {
        console.log(error)
      }
    })
  })
}
