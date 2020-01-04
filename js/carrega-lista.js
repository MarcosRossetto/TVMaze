function carregaLista() {
  var url = 'http://api.tvmaze.com/schedule?country=US&date=2020-01-01'
  $.ajax({
    url: url,
    type: 'get',
    datatype: 'json',
    success: function(data) {
      console.log(data)
      for (let x = 0; x < 30; x++) {
        var nome = data[x]['show']['name']
        var genero = data[x]['show']['genres'][0]
        if (genero == undefined) {
          genero = 'Sem Gênero'
        }
        var imagem = data[x]['show']['image']['medium']
        criaCard(imagem, nome, genero)
      }
    },
    error: function(error) {
      console.log(error)
    }
  })
}
