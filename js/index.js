$('#scroll').click(function(e) {
  e.preventDefault()
  var id = $(this).attr('href')
  targetOffSet = $(id).offset().top
  $('html, body').animate({scrollTop: targetOffSet - 90}, 800)
})

carregaLista()
