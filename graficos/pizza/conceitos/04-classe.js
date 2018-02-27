'use strict';

var p = new Pizza(document.getElementById('container'), 'Em relação aos Correios você é:');
p.renderiza([
  {'legenda': 'primeiro', 'valor': 1},
  {'legenda': 'segundo', 'valor': 2},
  {'legenda': 'terceiro', 'valor': 3},
  {'legenda': 'quarto', 'valor': 8},
]);
