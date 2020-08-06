<?php
  include("./conexao.php");
  $conn = getConnection();
  $sql = "INSER INTO contato(nome,email,cel,mensagem) VALUES(?,?,?,?)";
  $st = $conn->prepare(sql)
?>
