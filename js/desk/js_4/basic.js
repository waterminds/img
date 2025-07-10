jQuery(function ($) {
    $("a").focus(function () {
        $(this).blur();
    });
});


// 左邊補0
function padLeft(str, lenght) {
    if (str.length >= lenght)
        return str;
    else
        return padLeft("0" + str, lenght);
}

//右邊補0
function padRight(str, lenght) {
    if (str.length >= lenght)
        return str;
    else
        return padRight(str + "0", lenght);
}
//复制內容
function copyText(text) {
    var textarea = document.createElement("textarea");
    var currentFocus = document.activeElement;
    document.body.appendChild(textarea);
    textarea.value = text;
    textarea.focus();
    if (textarea.setSelectionRange)
        textarea.setSelectionRange(0, textarea.value.length);
    else
        textarea.select();
    try {
        var flag = document.execCommand("copy");
    } catch (eo) {
        var flag = false;
    }
    document.body.removeChild(textarea);
    currentFocus.focus();
    return flag;
}