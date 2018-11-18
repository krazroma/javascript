<?php
require_once('../includes/db.php'); // The mysql database connection script require('dbconnection.php');
if(isset($_GET['task']))
{
  $task = $_GET['task'];
  $status = "0";
  $created = time();

  $query="INSERT INTO tasks(task,status,created_at) VALUES ('$task', '$status', '$created')";
  $result = $mysqli->query($query);

  $result = $mysqli->affected_rows;

  echo $json_response = json_encode($result);
}
?>
