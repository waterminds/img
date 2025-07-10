function text_to_date(objDate) {//文字轉日期
    var date = new Date(objDate);
    return date;
}

function date_to_text(objDate) {//日期轉文字
    var mm = objDate.getMonth() + 1;//月
    var dd = objDate.getDate();     //日
    var date1 = [objDate.getFullYear(),
    (mm > 9 ? '' : '0') + mm,
    (dd > 9 ? '' : '0') + dd
    ].join('/');
    return date1;
}
function time_to_text(objDate) {//當日時間轉文字
    var h = objDate.getHours(); //時
    var m = objDate.getMinutes();
    var s = objDate.getSeconds();
    var date1 = [
        (h > 9 ? '' : '0') + h,
        (m > 9 ? '' : '0') + m,
        (s > 9 ? '' : '0') + s
    ].join(':');
    return date1;
}
function alltime_to_text(Date) {//完整日期時間轉文字
    var d = date_to_text(Date);
    var t = time_to_text(Date);
    let date = [d, t].join(' ');
    return date;
}

function diffInMonths(date1, date2) {
    let diff = Math.abs(date2 - date1) / 60000;

    if (diff > 525600)
        return Math.floor(diff / 525600) + "年";
    if (diff > 43200)
        return Math.floor(diff / 43200) + "月";
    if (diff > 1440)
        return Math.floor(diff / 1440) + "天";
    if (diff > 60)
        return Math.floor(diff / 60) + "小時";
    if (diff > 1)
        return diff + "分";
    if (diff < 1)
        return Math.abs(date2 - date1) / 1000 + "秒";
}

function round(num, x) {
    var m = Number((Math.abs(num) * 10**x).toPrecision(15));
    return Math.round(m) / 10**x * Math.sign(num);
}