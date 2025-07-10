(function ($) {

    $.fn._add = function () {
        $(this).click(function () {
            $(this).addClass("active");
        })
    };
    $.fn._add_only = function () {
        $(this).click(function () {
            $(this).addClass("active").siblings().removeClass("active");
        })
    };

    $.fn._add_parent= function () {
        $(this).click(function () {
            $(this).parent().addClass("active");
        })
    };
  
    $.fn._add_parent_only = function () {
        $(this).click(function () {
            $(this).parent().addClass("active").siblings().removeClass("active");
        })
    };

    $.fn._add_dbparent= function () {
        $(this).click(function () {
            $(this).parent().parent().addClass("active");
        })
    };

    $.fn._add_dbparent_only = function () {
        $(this).click(function () {
            $(this).parent().parent().addClass("active").siblings().removeClass("active");
        })
    };

    $.fn._remove = function () {
        $(this).click(function () {
            $(this).removeClass("active");
        })
    };

    $.fn._remove_parent = function () {
        $(this).click(function () {
            $(this).parent().removeClass("active");
        })
    };

    $.fn._remove_dbparent = function () {
        $(this).click(function () {
            $(this).parent().parent().removeClass("active");
        })
    };
    $.fn._toggle = function () {
        $(this).click(function () {
            $(this).toggleClass("active");
        })
    };
    $.fn._toggle_only = function () {
        $(this).click(function () {
            $(this).toggleClass("active").siblings().removeClass("active");
        })
    };
    $.fn._toggle_parent = function () {
        $(this).click(function () {
            $(this).parent().toggleClass("active");
        })
    };

    $.fn._toggle_parent_only = function () {
        $(this).click(function () {
            $(this).parent().toggleClass("active").siblings().removeClass("active");
        })
    };

    $.fn._toggle_dbparent = function () {
        $(this).click(function () {
            $(this).parent().parent().toggleClass("active");
        })
    };

    $.fn._toggle_dbparent_only = function () {
        $(this).click(function () {
            $(this).parent().parent().toggleClass("active").siblings().removeClass("active");
        })
    };
    $.fn._hover = function () {
        $(this).hover(function () {
            $(this).addClass("active");
        }, function () {
            $(this).removeClass("active");
        });
    };

})(jQuery);