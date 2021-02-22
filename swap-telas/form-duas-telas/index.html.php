<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="index.css">
    <title>Swap Telas</title>
</head>
<body>
<div class="tela" id="t1">
    <form>
        <div class="campo">
            <label for="nome">Nome</label>
            <input type="text" id="nome">
        </div>
        <div class="campo">
            <label for="salario">Salário</label>
            <input type="number" step="0.01" id="salario">
        </div>
        <div class="campo">
            <label for="cargo">Cargo</label>
            <input type="text" id="cargo">
            <a href="#cargos">Ver lista</a>
        </div>
        <button>Salvar</button>
    </form>
</div>
<div class="tela oculto" id="t2">
    <form>
        <h2>Eu sou um outro formulário</h2>
        <div class="campo">

        </div>
    </form>
</div>
<script src="index.js"></script>
</body>
</html>