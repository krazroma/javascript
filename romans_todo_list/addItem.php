<?php
require_once 'db.php'; // The mysql database connection script
if(isset($_GET['item'])){
	$item = $mysqli->real_escape_string($_GET['item']);
	$status = "0";
	$created = date("Y-m-d", strtotime("now"));

	$query="INSERT INTO todo(item,status,created_at)  VALUES ('$item', '$status', '$created')";
	$result = $mysqli->query($query);

	$result = $mysqli->affected_rows;

	echo $json_response = json_encode($result);
	}
?>
