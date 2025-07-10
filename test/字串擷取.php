<?php
$output = trim("/examplle/ggg/", "/"); 
echo $output. "<br/>";//只想單獨去掉左邊或右邊可以用ltrim()或rtrim()

$string_example='Hello, welcome to PJCHENder';
echo strrchr($string_example, "w");
// 輸出結果welcome to PJCHENder
echo strrchr($string_example, "o");
// 輸出結果o PJCHENder
$string_example='Hello, welcome to PJCHENder';
echo strchr($string_example, "w");
// 輸出結果welcome to PJCHENder
echo strchr($string_example, "o");
// 輸出結果o, welcome to PJCHENder

$string_example='http://pjchender.blogspot.tw/2015/06/hyread.html';
echo strrchr($string_example, "/")    // 從尾巴開始搜尋'/'這個符號
// 輸出結果/hyread.html
echo substr(strrchr($string_example, "/"), 1); // 去除掉'/'這個符號，所以從第一個字元開始擷取到最後
// 輸出結果hyread.htmlNde

echo "<br/>";
echo substr("abcde", -2). "<br/>";  //從字尾取兩個字母。de
echo substr("abcd", -3, 1). "<br/>"; //  b，從字尾取bcd，長度取 1 位。
echo substr("abcdef", 0, -1). "<br/>"; //abcde，從零開始取整段，由字尾扣掉一個。
echo substr("abcdef", 2, -1). "<br/>"; // cde，從第二個開始，取得 cdef，由字尾扣掉一個。
echo substr("abcdef", 5, -2). "<br/>"; //false，取得 f，扣掉五個，就沒有！
echo substr("abcdef", -4, -2). "<br/>"; //cd，先取得 cdef，字尾扣掉兩個。

$string_example='Hello, welcome to PJCHENder';
echo substr($string_example, 7)  // 從第7個字元開始擷取到最後
// 輸出結果welcome to PJCHENder
echo substr($string_example, 7,7) // 從第7個字元開始擷取到7個字元
// 輸出結果welcome
echo substr($string_example, -9) // 從第-9個字元開始擷取到最後
// 輸出結果PJCHE
?>