function sel_one(uc_, choose_) {
    uc_.find("li").eq(choose_).addClass("selected");
    uc_.attr("val", choose_);

    uc_.find("li").click(function () {
        // if ($(this).hasClass("disabled")) { }
        // else {
        uc_.find("li").eq(choose_).removeClass("selected");
        $(this).addClass("selected");
        choose_ = $(this).attr("val");
        uc_.attr("val", choose_);
        // }
    });
}

function sel_more(uc_, choose_) {
    uc_.attr("val", choose_);
    let x = "",
        n = uc_.find("li").size(),
        m = choose_.split(",");
    for (var i = 0, len = m.length; i < len; i++) {
        for (var j = 0; j < n; j++) {
            x = uc_.find("li").eq(j).attr("val");
            if (x == m[i].trim()) {
                uc_.find("li").eq(j).addClass("selected");
            }
        }
    }

    uc_.find("li").click(function () {
        let _more = [];
        // if ($(this).hasClass("disabled")) { }
        // else {
        $(this).toggleClass("selected");
        uc_.find("li").each(function () {
            if ($(this).hasClass("selected"))
                _more.push($(this).attr("val"));
        });
        // }
        uc_.attr("val", _more);
    });
}