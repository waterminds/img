(function ($) {
  $.fn.aa_toggle = function (t) {
    $(this).click(function () {
      $(this).toggleClass("active");
    })
  };
  $.fn.aa_toggle_only = function (t) {
    $(this).click(function () {
      $(this).toggleClass("active").siblings().removeClass('active');
    })
  };
  $.fn.aa_add_only = function (t) {
    $(this).click(function () {
      $(this).addClass("active").siblings().removeClass('active');
    })
  };
  $.fn.aa_toggle_parent = function () {
    $(this).click(function () {
      $(this).parent().toggleClass("active");
    })
  };

  $.fn.aa_toggle_parent_only = function (t) {
    $(this).click(function () {
      $(this).parent().toggleClass("active").siblings().removeClass('active');
    })
  };
  $.fn.aa_add_parent_only = function (t) {
    $(this).click(function () {
      $(this).parent().addClass("active").siblings().removeClass('active');
    })
  };

  $.fn.aa_hover = function (t) {
    $(this).hover(function () {
      $(this).addClass(t);
    }, function () {
      $(this).removeClass(t);
    });
  };

})(jQuery);