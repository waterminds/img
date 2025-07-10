<?php
$original = './dirname';
$recycle = './aaa/bbb';


//执行文件移动;
if (file_exists($original)) {
    rename($original,$recycle);
    echo "移动完毕";
} else {
    echo $original . "不存在";
}

?>