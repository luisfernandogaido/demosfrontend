<?php
$nomeAleatorio = rand(1, 1000000);
$file = $_FILES['file'];
$ext = substr($file['name'], strrpos($file['name'], '.'));
$nome = $nomeAleatorio . $ext;
move_uploaded_file($file['tmp_name'], 'arquivos/' . $nome);
?>
<a href="form-upload.php">Enviar novamente</a>

monte o que o seu coração mandar

<script>
  parent.document.getElementById('nome-arquivo').value = '<?= $nome ?>';
</script>
