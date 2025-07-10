(function ($) {
    $.fn.aa_tab = function (
        _time, _hover, direc,
        active_num, list, li,
        p, span,
        _prev, _next, on
    ) {
        let i = $(this),
            x = i.children(list)
                .children()
                .children(li),
            n = x.size(),
            index = 0,
            time = _time * 1000,
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
            let po = i.children(active_num)
                .children(span)
                .eq(index);

            po.addClass(on)
                .siblings()
                .removeClass(on);

            x.eq(index)
                .addClass(on)
                .siblings()
                .removeClass(on);

            i.children(list)
                .children()
                .css({
                    'left': -_w * index + 'px',
                });

            let pos = po.position();
            let pos1 = i.children(active_num)
                .position();

            if (direc) {
                i.children(p)
                    .animate({
                        'left': pos1.left + pos.left + 'px',
                        'top': pos.top - po.height() / 2 + 'px'
                    }, 300);
            } else {
                i.children(p)
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
        if (_hover) {
            i.on('mouseenter', stop);
            i.on('mouseleave', start);
        }
        start();
        i.children(active_num)
            .children(span)
            .eq(0)
            .click();
    };
})(jQuery);