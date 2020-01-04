function criaCard(imagem, nome, genero) {
  let divCard = document.createElement('div')
  divCard.classList.add('divCard')
  document.getElementById('lista').appendChild(divCard)

  let img = document.createElement('img')
  img.src = imagem
  img.id = 'imagem'
  img.width = '150'
  img.height = '220'
  divCard.appendChild(img)

  let divCont = document.createElement('div')
  divCont.className = 'divCont'
  divCont.style.marginTop = '80'
  divCont.style.width = '150'
  divCard.appendChild(divCont)

  let h4 = document.createElement('h4')
  h4.innerHTML = nome
  h4.id = nome
  h4.style.fontSize = '11px'
  h4.style.fontWeight = 'bold'
  h4.style.height = '30px'
  h4.style.margin = '0'
  divCont.appendChild(h4)

  let p = document.createElement('p')
  p.innerHTML = genero
  p.id = 'genero'
  divCont.appendChild(p)

  divCard.addEventListener('click', function() {
    recuperaDadoSerie(nome)
  })
}
