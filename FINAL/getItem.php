<?php
require_once 'db.php';
$status = '%';
if(isset($_GET['status'])){
	$status = $mysqli->real_escape_string($_GET['status']);
}
$query="SELECT ID, ITEM, STATUS, CREATED_AT from todo where status like '$status' order by status,id desc";
$result = $mysqli->query($query);

$arr = array();
if($result->num_rows > 0) {
	while($row = $result->fetch_assoc()) {
		$arr[] = $row;
	}
}

# JSON-encode the response
echo $json_response = json_encode($arr);
?>
