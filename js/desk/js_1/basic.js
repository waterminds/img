export function write_style() {
    let str = "";
    str += '<li id="css_0" class="selected">蓝色</li >';
    str += '<li id="css_1">紫色</li >';
    str += '<li id="css_2">紅色</li >';
    str += '<li id="css_3">天蓝色</li >';
    str += '<li id="css_4">橙色</li >';
    str += '<li id="css_5">淡綠色</li >';

    $('#style').html(str);

    var $cssli = $("#style li"); //切皮肤
    $cssli.click(function () {
        sessionStorage.style=this.id;
        switchCss();
    });
}