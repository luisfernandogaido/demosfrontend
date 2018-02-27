'use strict';

var p = new Pizza(document.getElementById('container'), 'Em relação aos Correios você é:');
p.renderiza([
  {'legenda': 'Empregado', 'valor': 209},
  {'legenda': 'Dependente', 'valor': 15},
  {'legenda': 'Aposentado', 'valor': 8},
  {'legenda': 'Não trabalho nos Correios', 'valor': 3},
]);
setTimeout(function() {
  p.renderiza([
    {'legenda': 'Empregado', 'valor': 1},
    {'legenda': 'Dependente', 'valor': 2},
    {'legenda': 'Aposentado', 'valor': 3},
  ]);
}, 2000);