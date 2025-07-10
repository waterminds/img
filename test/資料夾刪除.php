<?php
if(rmdir("./dirname"))
echo "成功刪除資料夾"."<br>";
else
echo "刪除資料夾失敗"."<br>";

if(is_dir("./dirname"))
rmdir();
else
echo "資料夾不存在"."<br>";
?>