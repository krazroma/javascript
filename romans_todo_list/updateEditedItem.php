<?php
require_once 'db.php'; // The mysql database connection script
if(isset($_GET['item'])){

	$itemID = $mysqli->real_escape_string($_GET['itemID']);
	$item = $mysqli->real_escape_string($_GET['item']);
	$created = date("Y-m-d", strtotime("now"));

	$query="UPDATE todo set item ='$item', created_at = '$created'  where id='$itemID'";

	$result = $mysqli->query($query);

	$result = $mysqli->affected_rows;

	$json_response = json_encode($result);
}
?>
