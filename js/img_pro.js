(function ($) {
    $.fn.aa_img_pro = function (n, li, pre, next, pre_l, next_l, num_, page_, on_, hidden_, active_) {
        let i = $(this);

        let total = i.find(li).length,
            page = 0,
            page_n = (total / n) - 2,
            current = 0;

        function _z() {
            i.find(li)
                .removeClass(on_);
            i.find(page_)
                .removeClass(hidden_)

            let start = page * n,
                end = start + n;
            if (end > total) { end = total; }

            for (let j = start; j < end; j++) {
                i.find(li).eq(j)
                    .addClass(on_);
            };

            if (page < 1)
                i.find("." + pre)
                    .addClass(hidden_);
            if (page > page_n)
                i.find("." + next)
                    .addClass(hidden_);

            add_active();
        }
        _z();

        i.find(li).click(function () {
            current = $(this).index();
            add_active();
            $(this).addClass(on_);
        });
        i.find(num_).click(function () {
            if ($(this).hasClass(pre_l))
                current = current - 1;
            if ($(this).hasClass(next_l))
                current = current + 1;
            page = Math.floor(current / n);
            _z()
        });

        i.find(page_).click(function () {
            if ($(this).hasClass(pre))
                page = page - 1;
            if ($(this).hasClass(next))
                page = page + 1;
            current = page * n;
            _z();
        });

        function add_active() {
            i.find(li)
                .removeClass(active_)
                .eq(current)
                .addClass(active_);
            i.find(num_)
                .removeClass(hidden_);

            if (current < 1)
                i.find('.' + pre_l)
                    .addClass(hidden_);

            if (current > total - 2)
                i.find('.' + next_l)
                    .addClass(hidden_);

            let a = i.find(li)
                .eq(current)
                .find("img")
                .attr("src");
            let d = a.lastIndexOf("/");
            let p = i.attr("rel-link") + a.substring(d);
            i.find('.img>img')
                .attr("src", p);
            setInterval(3000, function () {
                current + 1;
                _z();
            })
        }


    };
})(jQuery);