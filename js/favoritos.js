serie = recuperaFav()
var filtered = serie.filter(function(el) {
	return el != null
})
for (let x = 0; x < filtered.length; x++) {
	pesquisaFav(filtered[x])
}
console.log(filtered)
