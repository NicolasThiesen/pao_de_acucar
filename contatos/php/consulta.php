<?php
  include "conexao.php";

  $sql = "SELECT * FROM CONTATOS";

  $stmt = $conn -> prepare($sql);
  $stmt ->execute();

  $result = $stmt->fetchAll();
  foreach ($result as $key => $value) {
    echo "Valor de ".$key." = ".$value[key] </br>;
  }

?>
