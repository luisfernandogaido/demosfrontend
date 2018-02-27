function atualizaTitulo() {
  pizza.setTitulo(document.getElementById('titulo').value);
}

function plota() {

  function imprimeErro(mensagem) {
    document.getElementById('erro').textContent = mensagem;
  }

  var legendas = document.getElementById('legendas').value.split(',');
  var valores = document.getElementById('valores').value.split(',');
  if (legendas.length != valores.length) {
    imprimeErro('Legendas e valores devem ser em mesma quantidade');
    return;
  }
  var dados = [];
  for (var i = 0; i < valores.length; i++) {
    valores[i] = valores[i].trim();
    var valor = parseFloat(valores[i]);
    if (isNaN(valor)) {
      imprimeErro('Todos os valores devem ser números.');
      return;
    }
    dados.push({
      legenda: legendas[i],
      valor: valor,
    });
  }
  pizza.renderiza(dados);
  imprimeErro('');
}

var pizza = new Pizza(document.getElementById('grafico'), document.getElementById('titulo').value);
plota();