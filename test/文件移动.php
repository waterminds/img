<?php
$original = 'upload/lock.txt';
$recycle = 'upload/recycle/lock.txt';

//执行文件移动;
if (file_exists($original)) {
    copy($original, $recycle);
    unlink($original);
    echo "文件移动完毕";
} else {
    echo $original . "文件不存在";
}
?>