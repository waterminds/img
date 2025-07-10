export function write_js() {
    let str = "";
    str += '<li id="js_0" class="selected">蓝色</li >';
    str += '<li id="js_1">紫色</li >';
    str += '<li id="js_2">紅色</li >';
    str += '<li id="js_3">天蓝色</li >';
    str += '<li id="js_4">xxx</li >';
    str += '<li id="js_5">紅色</li >';
    str += '<li id="js_6">天蓝色</li >';
    $('#js').html(str);

    var $jsli = $("#js li");//切js
    $jsli.click(function () {
        sessionStorage.js = this.id;
        _js= sessionStorage.js;
        loadjs();
    });
}