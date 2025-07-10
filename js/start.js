async function loadjs(sys, js) {
    let _link = "/js/" + sys + "/common.js";
    let _sys = await import(_link);
    _sys.write_js();

    _link = "/js/" + sys + "/" + js + "/basic.js";
    let _js = await import(_link);
    _js.write_style();
    switchCss();
    li_addClass("#" + js);
}

function switchCss() {
    let x = sessionStorage;
    let _link = "/css/" + x.sys + "/" + x.js + "/" + x.style + ".css";
    $("#cssfile").attr("href", _link);
    li_addClass("#" + x.style);
}

function li_addClass(index) {
    $(index).addClass("selected")
        .siblings().removeClass("selected");  //去掉其他同辈<li>元素的选中
}

function set_history(em) {
    let b = sessionStorage.history.split(",");
    remove_Elem(b, em)
    b.unshift(em);
    if (b.length > 8) {
        b.splice(8, 10);
    }
    sessionStorage.history = b;
}
function remove_Elem(arr, em) {
    if (arr.indexOf(em) > -1) {
        arr.splice(arr.indexOf(em), 1);
        remove_Elem(arr, em);
    }
}