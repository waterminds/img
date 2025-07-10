<?php
$original = 'lock.txt';
$recycle = 'recycle/lock.txt'

//执行文件移动;
if (file_exists($original)) {
    rename($original,$recycle);
    echo "文件移动完毕";
} else {
    echo $original . "文件不存在";
}


// //同目錄的檔案
// rename("1.txt","2.txt");

// 另外，若不同路徑的話則會變成移動檔案

// //不同路徑，移動檔案
// rename("1.txt","/www/1.txt");

// //不同路徑移動檔案並更名
// rename("1.txt","/www/2.txt");
?>