<?php
$DB_HOST = 'localhost';
$DB_USER = 'roman';
$DB_PASS = 'southhills#';
$DB_NAME = 'roman';
$mysqli = new mysqli($DB_HOST, $DB_USER, $DB_PASS, $DB_NAME);

if ($conn->connect_error)
{
  echo "CANT TOUCH THIS!";
}
?>
