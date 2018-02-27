function criaSvg(tag) {
  return document.createElementNS('http://www.w3.org/2000/svg', tag);
}

function gera(valores) {
  var total = 0;
  for (var i = 0; i < valores.length; i++) {
    total += valores[i];
  }
  console.log(total);
}

var valores = [1, 2, 3];
gera(valores);