<?php
  header('Content-Type: application/json');

  $server = 'localhost';
  $username = 'root';
  $password = 'root';
  $dbName = 'hoteldb';

  $conn = new mysqli($server, $username, $password, $dbName);

  if($conn -> connect_errno) {
    echo $conn -> connect_errno;
    return;
  }

  $sql = '
    SELECT status, price
    FROM pagamenti
  ';

  $result = $conn -> query($sql);

  if($result -> num_rows < 1) {
    echo "nessun risultato";
    return;
  }

  $res = [];

  while($row = $result -> fetch_assoc()) {
    $res[] = $row['status'] . ' - ' . $row['price'];
  }
  $conn -> close();

  echo json_encode($res);

?>
