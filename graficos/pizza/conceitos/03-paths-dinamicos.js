'use strict';

function criaSvg(tag) {
  return document.createElementNS('http://www.w3.org/2000/svg', tag);
}

function gera(valores) {
  if (g.viewBox.baseVal.width != g.viewBox.baseVal.height) {
    throw 'gráficos em pizza são feitos apenas em círculos nesta implementação.';
  }
  var r = g.viewBox.baseVal.width / 2;
  while (g.firstChild) {
    g.removeChild(g.firstChild);
  }
  var total = 0;
  for (var i = 0; i < valores.length; i++) {
    total += valores[i];
  }
  var totalAngulos = 0;
  for (var i = 0; i < valores.length; i++) {
    var angulo = 2 * Math.PI * valores[i] / total;
    if (angulo == 2 * Math.PI) {
      angulo *= 0.999999;
    }
    var x1 = r + r * Math.cos(totalAngulos);
    var y1 = r + r * Math.sin(totalAngulos);
    totalAngulos += angulo;
    var x2 = r + r * Math.cos(totalAngulos);
    var y2 = r + r * Math.sin(totalAngulos);
    var path = criaSvg('path');
    var flag = angulo > Math.PI ? '1' : '0';
    var d = 'M' + r + ' ' + r + ' L' + x1 + ' ' + y1 + ' A' + r + ' ' + r + ' 0 ' + flag + ' 1 ' + x2 + ' ' + y2 + ' Z';
    path.setAttribute('d', d);
    var cor = cores[i % cores.length];
    path.setAttribute('fill', cor);
    g.appendChild(path);
  }
}

var g = document.getElementById('g');
var cores = [
  '#1f77b4',
  '#ff7f0e',
  '#2ca02c',
  '#d62728',
  '#9467bd',
  '#8c564b',
  '#e377c2',
  '#7f7f7f',
  '#bcbd22',
  '#17becf',
];
var valores = [209, 15, 8, 3];
gera(valores);
setTimeout(function() {
  valores = [154, 81];
  gera(valores);
  setTimeout(function() {
    valores = [];
    for (var i = 1; i <= 10; i++) {
      valores.push(i);
    }
    gera(valores);
  }, 2000);
}, 2000);