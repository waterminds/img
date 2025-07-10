<?php
$str="中文abc。";
echo "string: ".$str. "<br/>";
echo "strlen(str): ".strlen($str). "<br/>";
echo "mb_strlen(str): ".mb_strlen($str,'utf-8'). "<br/>";

$string = "Legend";
$output = "The ".$string." of "."Zelda";
echo $output. "<br/>";

$string = "Breath";
$string.= "of Wild";
echo $string. "<br/>";

$string = "a@b@c";
$output = explode("@", $string);

echo $output. "<br/>";

$arr = ["a", "b", "c"];
$output = implode("?", $arr);
echo $output. "<br/>";

$str = 'one|two|three|four';
print_r(explode('|', $str, 2)). "<br/>";
print_r(explode('|', $str, -1)). "<br/>";
echo "<br/>";

$str = "Hello world";
$arr1 = str_split($str);
$arr2 = str_split($str, 3);
print_r($arr1);
print_r($arr2);
?>