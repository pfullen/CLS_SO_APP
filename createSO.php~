<?php
// use a pre tag if we're not on the cli
if (php_sapi_name() != 'cli') echo '<pre>'.PHP_EOL;

// change db name and credentials in this file
require_once('./db_config.php');

// good habit to get into.
// never trust user input, always filter post fields

// $Name = filter_var($_POST['Name'], FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_LOW | FILTER_FLAG_STRIP_LOW);
// $Age = filter_var($_POST['AGE'], FILTER_VALIDATE_INT);

// these work wherever (web, cli)
$Customer = $_POST["customer"] ;
$Product =  $_POST["product"];
$Quantity = $_POST["qty"];
$DriverID = "2345";

$fields = array('customer' => $Customer, 'product' => $Product, 'quantity' => $Quantity, 'driverId' => $DriverID,
'salesOrderDate' => date('Y-m-d H:i:s'));


// this is a little helper function I use all the time
$sql = $cMySQL->createInsert('salesorders', $fields);
echo 'SQL: '.$sql.PHP_EOL;
$insertID = $cMySQL->execQ($sql, $fields);
echo 'Record ID: '.$insertID.PHP_EOL;