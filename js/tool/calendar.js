function calendar_(y, bb) {
    let str = '<div class="_calendar_info"><div class="_calendar_info_0"><i class="btn-icon fa fa-angle-left _calendar_info_chang"val="-1"></i></div><div class="_calendar_info_1"><span id="_calendar_yy_val"></span><span>年</span><i class="btn-icon fa fa-angle-down small"></i></div><div class="_calendar_info_1"><span id="_calendar_mm_val"></span><span>月</span><i class="btn-icon fa fa-angle-down small"></i></div><div class="_calendar_info_0"><i class="btn-icon fa fa-angle-right _calendar_info_chang"val="1"></i></div></div><div class="_calendar_week_list"><div class="_calendar_weekend">日</div><div>一</div><div>二</div><div>三</div><div>四</div><div>五</div><div class="_calendar_weekend">六</div></div><div id="_calendar_day_list"></div><div class="_calendar_set_year hidden center"><div class="_calendar_year_title"><div class="_calendar_year_chang"><i class="btn-icon fa fa-angle-left _chang"val="-100"></i></div><div class="_calendar_year_group"></div><div class="_calendar_year_chang"><i class="btn-icon fa fa-angle-right _calendar_year__chang"val="100"></i></div></div><div class="_calendar_year_list"></div><div class="_cancel _calendar_set_year_cancel"><i class="small btn-icon fa fa fa-close center"></i></div></div><div class="_calendar_set_month hidden center "><div class="_calendar_month"><div>1月</div><div>2月</div><div>3月</div><div>4月</div><div>5月</div><div>6月</div><div>7月</div><div>8月</div><div>9月</div><div>10月</div><div>11月</div><div>12月</div></div><div class="_cancel _calendar_set_month_cancel"><i class="small btn-icon fa fa fa-close center"></i></div></div><div class="_calendar_blank hidden"></div>';
    let index = $("._calendar"),
        _now = new Date(), //取系統時間
        _obj;
    let _set_yy,
        _set_mm,
        _set_dd;             //年.月.日
    let _temp_y,
        _temp_m,
        _temp_d;
    let _frist_day,      //月分1號日子星期?
        _mm_days,       //月份最後一天幾號
        _str = "",
        calendar_set;
    _now.setDate(_now.getDate() + bb);
    let d = date_to_text(_now);
    y.html(d);

    y.click(function (e) {
        index.html(str);
        calendar_set = $(this);
        index.removeClass("hidden");
        index.offset({
            top: calendar_set.offset().top +
                calendar_set.outerHeight() + 3,
            left: calendar_set.offset().left,
        })
        let t = text_to_date(calendar_set.html());
        _temp_y = t.getFullYear();  // 年
        _temp_m = t.getMonth() + 1; // 月
        _temp_d = t.getDate();
        _model(t);
        return false;
    });

    function _model(_now) {
        _set_value(_now);
        _year_group(_set_yy);
        $("._calendar ._cancel").click(function () {
            $(this).parent()
                .addClass("hidden");
            $(this).parents("._calendar")
                .find("._calendar_blank")
                .addClass("hidden");
        });

        $("._calendar_year_title i").click(function () {//前後年群組
            _set_yy = _set_yy + parseInt($(this).attr("val"));
            _year_group(_set_yy);
            return false;
        });

        $("._calendar_info>div").eq(1).click(function () { //切換年
            $("._calendar_blank").removeClass("hidden");
            $("._calendar_set_year").removeClass("hidden");
            li_addClass($('._calendar_year' + _set_yy));
        });

        $("._calendar_info>div").eq(2)
            .click(function () {  //切換月
                $("._calendar_blank").removeClass("hidden");
                $("._calendar_set_month").removeClass("hidden");
                li_addClass($('._calendar_month>div')
                    .eq(_set_mm - 1));
            });

        $("._calendar_month>div").click(function () {//月
            var n = $(this).html().length;
            _set_mm = $(this).html()
                .substring(0, n - 1) - 1;
            _defalt();
            $("._cancel").click();
        });

        $("._calendar_info_chang").click(function () {//前後月份
            _set_mm = _obj.getMonth() + parseInt($(this).attr("val"));
            _defalt();

        });
    }

    function _defalt() {
        _obj.setDate(1);
        _obj.setMonth(_set_mm);
        _set_value(_obj);
    }

    function _set_value(obj) {
        _obj = obj;
        _set_yy = obj.getFullYear();  // 年
        _set_mm = obj.getMonth() + 1; // 月
        _set_dd = obj.getDate();     // 日
        obj.setDate(1);
        _frist_day = obj.getDay();//取得星期幾
        obj.setMonth(obj.getMonth() + 1);
        obj.setDate(obj.getDate() - 1);
        _mm_days = obj.getDate();
        set_days(_set_dd);
    }

    function set_days(_dd) {//設定日
        let num = 0, n = 0;
        let $_list = $("#_calendar_day_list");
        for (i = 0; i < _frist_day; i++) {
            _str += "<div class=no></div>"
            n++;
        }
        for (i = 1; i <= _mm_days; i++) {
            num = n % 7;
            if (num == 0 || num == 6)
                _str += '<div class="_calendar_weekend  _calendar_day' + i + '">' + i + '</div>';
            else
                _str += '<div class="_calendar_day' + i + '">' + i + '</div>';
            n++;
        }

        $_list.html(_str);
        _str = "";
        $("#_calendar_yy_val").html(_set_yy);
        $("#_calendar_mm_val").html(_set_mm);
        li_addClass($('._calendar_month' + _set_mm));
        li_addClass($('._calendar_year' + _set_yy));

        if (_set_mm == _temp_m && _set_yy == _temp_y)
            $('._calendar_day' + _temp_d).addClass("active");

        $("#_calendar_day_list>div").click(function () {//-----日點擊
            let t = parseInt($(this).html());
            _obj.setDate(t);
            let d = date_to_text(_obj);
            calendar_set.html(d);
            $("._calendar").addClass("hidden");
        });
    }

    function _year_group(yy) {//--------年分
        let _yy = parseInt(yy / 20);
        let yy_ = parseInt(_temp_y / 20);

        let list = $("._calendar_year_group");
        for (i = _yy - 2; i < _yy + 3; i++) {
            if (i != yy_)
                _str += "<div >" + (i * 20) + "</div>";
            else
                _str += "<div class=active>" + (i * 20) + "</div>";
        }
        list.html(_str);
        _str = "";
        _year_list(_yy * 2)

        $("._calendar_year_group>div").click(function () {
            var t = parseInt($(this).html()) / 10;
            _year_list(t);
            li_addClass($(this));
        });
    }

    function _year_list(_yy) {
        let _list = $("._calendar_year_list");
        for (i = 0; i < 20; i++)
            _str += '<div class="_calendar_year' + (_yy * 10 + i) + '">' + (_yy * 10 + i) + '</div>'

        _list.html(_str);
        _str = "";
        $('._calendar_year' + _temp_y).addClass("active");
        $("._calendar_year_list>div").click(function () {//年
            _set_yy = parseInt($(this).html());
            _obj.setFullYear(_set_yy);
            _defalt();
            $("._cancel").click();
        });
    }

    function li_addClass(i) {
        i.addClass("active")
            .siblings()
            .removeClass("active");  //去掉其他同辈<li>元素的选中
    }
}