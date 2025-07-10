function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
//刪除  cookie entry
function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    document.cookie = escape(name) + "=" + cval + "; expires=" + exp.toGMTString();
}
function checkCookie(cname) {
    var user = getCookie(cname);
    var _flag = false;
    if (user != "") {
        _flag = true;
    }
    return _flag;
}


var historyCount = 15; //历史记录个数

function setHistory(keyWord) {
    var keyWords = $.cookie('keyWord');
    if (keyWords) {
        if (keyWord) {
            var keys = keyWords.split(",");
            for (var i = keys.length - 1; i >= 0; i--) {
                if (keys[i] == keyWord) {
                    keys.splice(i, 1);
                }
            }
            keys.push(keyWord);
            if (keys.length >= historyCount) {
                //删除最开始的多余记录
                var count = keys.length - historyCount + 1; //需要删除的个数
                keys.splice(0, count); //开始位置,删除个数
            }
            $.cookie('keyWord', keys.join(','), { expires: 365, path: '/' });
        }
    } else {
        $.cookie('keyWord', keyWord, { expires: 365, path: '/' });
    }
}

function delHistory() {
    $.cookie("keyWord", null, { path: "/", expires: -1 });
}

function getHistory() {
    var keyWords = $.cookie('keyWord');
    if (keyWords) {
        var keys = keyWords.split(",");
        var length = keys.length;
        if (length > 0) {
            $(".aa").empty();
            var htmlString = "历史搜索";
            for (var i = length - 1; i >= 0; i--) {
                htmlString += "<a href='javascript:;' >" + keys[i] + "  </a>";
            }
            htmlString += "";
            $(".aa").html(htmlString)
        }
    }
}