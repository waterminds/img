(function ($) {
    $.fn.aa_tab = function (t, f) {
        let i = $(this),
            x = i.find('.list>li'),
            n = x.size(),
            index = 0,
            time = t * 1000,
            pos,
            str = "",
            interval;

        i.find("p").each(function () {
            str += $(this).html();
        });

        i.find('.num').html(str);

        i.delegate("span", "click",
            function () {
                $(this).addClass('on').siblings().removeClass('on');
                index = $(this).index();
                ACTION();
            });

        x.delegate(this, "click",
            function () {
                index = $(this).index();
                ACTION();
            });

        i.delegate(".prev", "click",
            function () {
                index--;
                if (index < 0)
                    index = n - 1;
                ACTION();
            });

        i.delegate(".next", "click",
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
            x.eq(index).addClass('on').siblings().removeClass('on');
            pos = x.eq(index).position();
            x.next("p")
                .animate({
                    'left': pos.left + 'px',
                    'top': pos.top + 'px'
                }, 300);
        }
        function ACTION() {
            stop();
            start();
            run();
        }
        if (f) {
            i.on('mouseenter', stop);
            i.on('mouseleave', start);
        }
        start();
    };
})(jQuery);