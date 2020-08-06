<?php
  include "conexao.php";

  //valores
  $nome = $_POST["nome"];
  $email = $_POST["email"];
  $cel = $_POST["celular"];
  $men = $_POST["mensagem"];

  $sql = "INSERT INTO contatos(nome,email,cel,mensagem) VALUES (:n,:e,:c,:m)";

  $stmt = $conn->prepare($sql);
  $stmt -> bindParam(':n',$nome);
  $stmt -> bindParam(':e',$email);
  $stmt -> bindParam(':c',$cel);
  $stmt -> bindParam(':m',$men);

  if ($stmt->execute()) {
    echo "Salvo com sucesso";
  }else {
    echo "Erro ao salvar";
  }
?>
