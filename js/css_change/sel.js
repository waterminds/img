(function ($) {
  $.fn.aa_sec_more = function (t, li) {
    let a = $(this);
    a.attr("val", t);
    let x = "",
      n = a.find(li).size(),
      m = t.split(",");
    for (var i = 0, len = m.length; i < len; i++) {
      for (var j = 0; j < n; j++) {
        x = a.find(li).eq(j).attr("val");
        if (x == m[i].trim()) {
          a.find(li).eq(j).addClass("selected");
        }
      }
    }

    a.find(li).click(function () {
      let _more = [];
      if ($(this).hasClass("disabled")) { }
      else {
        $(this).toggleClass("selected");
        a.find(li).each(function () {
          if ($(this).hasClass("selected"))
            _more.push($(this).attr("val"));
        });
      }
      a.attr("val", _more);
    });
  };

  $.fn.aa_sel_one = function (t, li, bool, val, val2) {
    let a = $(this);
    let x = "",
      n = a.find(li).size();
    a.attr("val", t);

    for (var j = 0; j < n; j++) {
      x = a.find(li).eq(j).attr("val");
      if (x == t.trim()) {
        a.find(li).eq(j).addClass("selected");
      }
    }
    a.find(li).click(function () {
      if ($(this).hasClass("disabled")) { }
      else {
        $(this).addClass("selected").siblings().removeClass('selected');
        x = $(this).attr("val");
        a.attr("val", x);
        if (bool) {
          $(this).parent().parent().find(val).html(x);
          a.removeClass('active');

        }
      }
    });
  };

})(jQuery);