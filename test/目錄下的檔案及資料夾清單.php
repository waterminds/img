<?php
$URL=".";
$myArray = array();
$myArra1= "";
		
foreach (scandir($URL) as $item) {

  if($item != '.' && $item != '..'){
    if (is_dir($item)) {
      $myArray[]="目錄：$item";
      $myArray1.="1,".$item.";";

    } else {
      $myArray[]= "檔案：$item ";
      $myArray1.="2,".$item.";";
    }
  }
}
echo json_encode($myArray);
echo $myArray1;
?>