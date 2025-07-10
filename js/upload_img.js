
  // ----------------------------------------------------------設定圖片顯示
  function set_img() {
    $(".preview img").each(function (i) {
      var img = $(this);
      var realWidth;//真實寬度
      var realHeight;//真實高度
      var d, r;//處理margin
      //$("<img/>")是臨時標簽，類似js創建一個new Image()對象！
      $("<img />").attr("src", this.src).on("load", function () {
        /*
        如果要獲取圖片的真實的寬度和高度有三點必須註意
        1、需要創建一個image對象：如這裏的$("<img/>")
        2、指定圖片的src路徑
        3、一定要在圖片加載完成後執行如.load()函數裏執行
        */
        realWidth = this.width;
        realHeight = this.height;
        r = parseFloat(realHeight) / realWidth;//高寬比

        if (r <= 1) {
          d = parseFloat(((1 - r) / 2) * img_w);
          $(img).css("width", "100%").css("margin-top", d + "px");
        }
        else {
          r = parseFloat(realWidth) / realHeight;//高寬比
          d = parseFloat(((1 - r) / 2) * img_w);
          $(img).css("width", r * 100 + "%").css("margin-left", d + "px");
        }
      });
    });
  }
  
  function reset_value() {
    $("#reset").click(function () {

      $("#upload").html('<div class="file-box"><div class="preview"></div><a class="file1"><input class="button" type="file" name="myfile[]" data="1">檔案</a><div class="descr"><p class="mess"></div></div>');
        upload_img();

      total=1;
    });
  }