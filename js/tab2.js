(function ($) {
    $.fn.aa_tab = function (
        time0, is_hover, line_is_w, direct,
        num, list, list_tab,
        _line, span,
        _prev, _next, on
    ) {
        let i = $(this),
            x = i.children(list)
                .children()
                .children(list_tab),
            n = x.size(),
            index = 0,
            time = time0 * 1000,
            _w = x.width(),
            _h = x.height(),
            interval;

        i.delegate(span, "click",
            function () {
                index = $(this).index();
                ACTION();
            });

        i.delegate(_prev, "click",
            function () {
                index--;
                if (index < 0)
                    index = n - 1;
                ACTION();
            });

        i.delegate(_next, "click",
            function () {
                next();
            });

        function next() {
            index++;
            if (index >= n)
                index = 0;

            ACTION();
        }

        function stop() {
            clearInterval(interval);
        }
        function start() {
            if (time > 0)
                interval = setInterval(next, time);
        }

        function run() {
            po = i.children(num)
                .children(span)
                .eq(index);

            po.addClass(on)
                .siblings()
                .removeClass(on);
                
            x.eq(index)
                .addClass(on)
                .siblings()
                .removeClass(on);

            if (direct == "ww") {
                i.children(list)
                    .children()
                    .css({
                        'left': -_w * index + 'px',
                    });
            } else if (direct == "hh") {
                i.children(list)
                    .children()
                    .css({
                        'top': -_h * index + 'px',
                    });
            }

            pos = po.position();
            pos1 = i.children(num)
                .position();

            if (line_is_w) {
                i.children(_line)
                    .animate({
                        'left': pos1.left + pos.left + 'px',
                        'top': pos.top - po.height() / 2 + 'px'
                    }, 300);
            } else {
                i.children(_line)
                    .animate({
                        'left': pos1.left + pos.left + po.width() / 4 + 'px',
                        'top': pos1.top + pos.top + po.height() / 2 + 'px'
                    }, 300);
            }

        }

        function ACTION() {
            stop();
            start();
            run();
        }

        if (is_hover) {
            i.on('mouseenter', stop);
            i.on('mouseleave', start);
        }
        ACTION();
        i.children(num)
            .children(span)
            .eq(0)
            .click();
    };
})(jQuery);