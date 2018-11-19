<?php
require_once 'db.php';

	$query = "DELETE FROM todo WHERE status = 2";
	$result = $mysqli->query($query);

	$result = $mysqli->affected_rows;

	echo $json_response = json_encode($result);
?>
