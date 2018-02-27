'use strict';

function Pizza(container, textoTitulo) {

  this.criaSvg = function(tag) {
    return document.createElementNS('http://www.w3.org/2000/svg', tag);
  };

  /**
   * Container do gráfico, passado pelo construtor.
   */
  this.container = container;
  this.container.classList.add('pizza-container');

  /**
   * Container do título
   * @type {HTMLDivElement}
   */
  this.titulo = document.createElement('div');
  this.titulo.className = 'titulo';
  this.titulo.textContent = textoTitulo;
  this.container.appendChild(this.titulo);

  /**
   * Container do SVG e das legendas. Alterar seu flex-flow pode ser útil para mudar o posicionamento deles.
   * @type {HTMLDivElement}
   */
  this.conteudo = document.createElement('div');
  this.conteudo.className = 'conteudo';
  this.container.appendChild(this.conteudo);

  /**
   * O gráfico propriamente dito.
   * @type {HTMLElement}
   */
  this.svg = this.criaSvg('svg');
  this.conteudo.appendChild(this.svg);
  this.svg.setAttribute('viewBox', '0 0 1000 1000');

  /**
   * Lista de legendas com o texto e a cor associada.
   * @type {HTMLDivElement}
   */
  this.legendas = document.createElement('div');
  this.legendas.className = 'legendas';
  this.conteudo.appendChild(this.legendas);

  /**
   * Lista de cores utilizadas.
   * @type {string[]}
   */
  this.cores = [
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

}

/**Renderiza legendas e valores rebendo dados no formato
 * [{'legenda': 'uma legenda', 'valor': 3}]
 */
Pizza.prototype.renderiza = function(dados) {
  var r = 500;
  var total = 0;
  for (var i = 0; i < dados.length; i++) {
    total += dados[i].valor;
  }
  var angulo, totalAngulos = 0;
  this.legendas.innerHTML = '';
  for (var i = 0; i < dados.length; i++) {
    angulo = 2 * Math.PI * dados[i].valor / total;
    if (angulo == 2 * Math.PI) {
      angulo *= 0.999999;
    }
    var x1 = r + r * Math.cos(totalAngulos);
    var y1 = r + r * Math.sin(totalAngulos);
    totalAngulos += angulo;
    var x2 = r + r * Math.cos(totalAngulos);
    var y2 = r + r * Math.sin(totalAngulos);
    var path = this.criaSvg('path');
    var flag = angulo > Math.PI ? '1' : '0';
    var d = 'M' + r + ' ' + r + ' L' + x1 + ' ' + y1 + ' A' + r + ' ' + r + ' 0 ' + flag + ' 1 ' + x2 + ' ' + y2 + ' Z';
    path.setAttribute('d', d);
    var cor = this.cores[i % this.cores.length];
    path.setAttribute('fill', cor);
    this.svg.appendChild(path);
    //'<div class="legenda"><div class="cor"></div><div class="texto">isto é algo bem interessante de ser feito</div></div>';
    var legenda = document.createElement('div');
    legenda.className = 'legenda';
    this.legendas.appendChild(legenda);
    var divCor = document.createElement('div');
    divCor.className = 'cor';
    divCor.style.background = cor;
    legenda.appendChild(divCor);
    var textoLegenda = document.createElement('div');
    textoLegenda.className = 'texto';
    textoLegenda.textContent = dados[i].legenda;
    legenda.appendChild(textoLegenda);
  }
};