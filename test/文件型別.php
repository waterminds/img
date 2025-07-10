<?php
$file_path = 'lock.txt';
if (file_exists($file_path)) {
    echo "檔案名稱: " . basename($file_path) . "<br/>";
    echo "檔案型別: " . filetype($file_path) . "<br/>";
    echo "檔案大小: " . filesize($file_path) . "<br/>";

    echo "最近訪問時間: " . date("Y-m-d H:i:s",fileatime($file_path)) . "<br/>";
    echo "最近修改時間: " . date("Y-m-d H:i:s",filemtime($file_path)) . "<br/>";
    echo "是否為可執行檔案: " . (is_executable($file_path)? "是" : "否" ) . "<br/>";
    echo "是否為連結(Link): " . (is_link($file_path) ? "是" : "否") . "<br/>";
    echo "是否可讀: " . (is_readable($file_path) ? "是" : "否") . "<br/>";
    echo "是否可寫: " . (is_writable($file_path) ? "是" : "否") ."<br/>";
    echo "檔案絕對路徑: " . realpath($file_path);
}
?>