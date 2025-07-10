<?php
$cart = array(
    "orderID" => 12345,
    "shopperName" => "John Smith",
    "shopperEmail" => "johnsmith@example.com",
    "contents" => array(
      array(
        "productID" => 34,
        "productName" => "SuperWidget",
        "quantity" => 1
      ),
      array(
        "productID" => 56,
        "productName" => "WonderWidget",
        "quantity" => 3
      )
    ),
    "orderCompleted" => true
  );
  $num = file_put_contents("cc.json", json_encode($cart));	//寫入檔案
  echo "成功寫入".$num."個位元組";
?>