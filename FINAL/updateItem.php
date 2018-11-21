<?php
require_once 'db.php';
if(isset($_GET['itemID'])){
	$status = $mysqli->real_escape_string($_GET['status']);
	$itemID = $mysqli->real_escape_string($_GET['itemID']);
	$task = $mysqli->real_escape_string($_GET['task']);

	$query="UPDATE todo set status='$status', item='$task' where id='$itemID'";
	$result = $mysqli->query($query);

	$result = $mysqli->affected_rows;

	$json_response = json_encode($result);
}
?>
