<?php
// use a pre tag if we're not on the cli
if (php_sapi_name() != 'cli') echo '<pre>'.PHP_EOL;

// change db name and credentials in this file
require_once('./db_config.php');




$customer = $_POST["customer"];
$notes = $_POST["notes"];
$lineItem =$_POST["lineItem"];
$driverid = "27"; 


// add to salesOrder Table
$fields = array( 'customer' => $customer,   'notes' =>  $notes, 'salesOrderDate' => date('Y-m-d H:i:s'), 'driverid' => $driverid);

$sql = $cMySQL->createInsert('salesorders', $fields);
echo 'SQL: '.$sql.PHP_EOL;
$insertID = $cMySQL->execQ($sql, $fields);
echo 'Record ID: '.$insertID.PHP_EOL;


$salesOrderID = $insertID;

// now add to lineItem table


foreach ($lineItem as $key) {

$product = $key["product"];
$qty = $key["qty"];
$price = "27.95";
print_r($key["product"]. " ");
print_r($key["qty"]. " ");

$fields = array ('product' => $product, 'qty' => $qty, 'price'=> $price,  'salesOrderId' => $salesOrderID);
$sql = $cMySQL->createInsert('lineitems', $fields);
echo 'SQL: '.$sql.PHP_EOL;
$insertID = $cMySQL->execQ($sql, ($fields));
echo 'Record ID: '.$insertID.PHP_EOL;
}



?>
