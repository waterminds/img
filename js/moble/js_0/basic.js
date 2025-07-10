export function write_style() {
    let str = "";
    str += '<li id="css_0" class="selected">蓝色</li >';
    str += '<li id="css_1">紫色</li >';
    str += '<li id="css_2">紅色</li >';
    str += '<li id="css_3">天蓝色</li >';


    $('#style').html(str);
}