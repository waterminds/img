function next_hide(y) {
    y.click(function () {
        var x = y.next(".sub")
            .hasClass("hide");
        if (x) {
            y.next(".sub")
                .removeClass("hide");
            y.addClass("selected");
        } else {
            y.next(".sub")
                .addClass("hide");
            y.removeClass("selected");
        }
    });
}

function parent_selected(y) {
    var x = y.parent()
        .hasClass("selected");
    if (x)
        y.parent()
            .removeClass("selected");
    else
        y.parent()
            .addClass("selected");
}

function li_one(y) {
    y.addClass("selected")
        .siblings()
        .removeClass("selected");
}

$(".blank").mouseover(function () {
    $(this).parent().addClass("Mydiv")
}).mouseout(function () {
    $(this).parent().removeClass("Mydiv")
});