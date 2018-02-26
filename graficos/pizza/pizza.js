function criaSvg(tag) {
  return document.createElementNS('http://www.w3.org/2000/svg', tag);
}

function radianos(graus) {
  return graus * Math.PI / 180;
}

function seno(graus) {
  return Math.sin(radianos(graus));
}

function cosseno(graus) {
  return Math.cos(radianos(graus));
}

// for (var i = 0; i < 2; i++) {
//   var path = criaSvg('path');
//   var graus = 45 * i;
//   var x = 500 + 500 * seno(graus);
//   var y = 500 + 500 * cosseno(graus);
//   console.log(x, y);
//   path.setAttribute('d', 'M500 500 L' + x + ' ' + y);
//   document.querySelector('svg').appendChild(path);
// }

function gera(valores) {
  var totalValores = 0;
  var totalGraus = 180;
  for (var i = 0; i < valores.length; i++) {
    totalValores += valores[i];
  }
  var x = 500 + 500 * seno(totalGraus);
  var y = 500 + 500 * cosseno(totalGraus);
  for (var i = 0; i < valores.length; i++) {
    var graus = (360 * valores[i] / totalValores);
    var d = criaSvg('path');
    totalGraus += graus;
    var x2 = 500 + 500 * seno(totalGraus);
    var y2 = 500 + 500 * cosseno(totalGraus);
    var path = criaSvg('path');
    var flag = graus > 180 ? '1' : '0';
    path.setAttribute('d', 'M500 500 L' + x + ' ' + y + ' A500 500 0 ' + flag + ' 0' + x2 + ' ' + y2 + ' Z');
    path.setAttribute('fill', randRgb());
    document.querySelector('svg').appendChild(path);
    x = x2;
    y = y2;
  }
}

function randRgb() {
  var cores = [];
  for (var i = 0; i < 3; i++) {
    cores.push(Math.floor(255 * Math.random()) + 1);
  }
  return 'rgb(' + cores.join(',') + ')';
}

//var valores = [209, 15, 8, 3];
var valores = [1, 1, 5];

gera(valores);

