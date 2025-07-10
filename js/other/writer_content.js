var str1 = "Starbuck was no crusader after perils; in him courage was not" +
    "a sentiment; but a thing simply useful to him, and always at hand" +
    " upon all mortally practical occasions. Besides, he thought, perhaps" +
    " that in this business of whaling, courage was one of the great stapl" +
    "outfits of the ship, like her beef and her bread, and not to be foolishly" +
    " wasted.Pellentesque habitant morbi tristique senectus et netus et malesuada" +
    "fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget" +
    ", tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean" +
    " ultricies mi vitae est. Mauris placerat eleifend leo.";

for (var i = 0; i <= 100; i++) {
    var y = $('.en' + i).html();
    $('.en' + i).html(y + str1.substring(0, i * 10));
}

var str2 = "己放一門起對好打才象國生戰、檢低家，算像查兒才上影童怕園？毛到進差達的然" +
    "，基有生步己風新形風底河河他相親起方呢再層列女人他應十族不興去好雖銷賣要樣完見工約" +
    "，嗎石品常充訴建他去能素。來不數一聲行可響常物理好上共於下低但機重為世坡報常亞生重景爸道般年寫加很料情寫大開" +
    "……計紅進，只務年她足軍為人美中美工也校你裡！望許不性兒處水現選我由的女、表生候書成母看三覺人有他大事放" +
    "，不是境！府不何大團者後岸果對商的，場的開、出親可另我天方物否如男越作從化兩命組西爾！使超怎，住個一玩友眼所導" +
    "，意的生下費！的長定走現方定？"
for (var i = 0; i <= 100; i++) {
    var y = $('.chi' + i).html();
    $('.chi' + i).html(y + str2.substring(0, i * 10));
}


var str = [
    "己放一門起對好打才象國生戰、檢低家",
    "望許不性兒處水現選我由的女",
    "只務年她足軍為人美中美工也校你裡",
    "先來向大家說聲新年快樂!",
    "只務年她足軍為人美中美工也校你裡",
    "著做實做一個產生一組威力彩號碼",
    "亂數產生小數並不是我們要的",
    "產生出來的數去乘上2就會得到0~2之間的小",
    "不過這並不是什麼大問題",
    "只是function內還有兩個問題需要排除",
    "所以我們在稍微修飾一下就可以",
    "以上如果我有觀念錯誤或解釋不清楚的地方",
    "因為在這個例子都是從1~x選出隨機亂數",
    "己放一門起對好打才象國生戰、檢低家",
];

var r = 0,
    l = $('.chr').length;

$(".chr").each(function () {

    if (r >= str.length) {
        r = 0;
    }

    $(this).html(str[r]);
    r++;
});

var li_str = [
    "產品",
    "熱門活動",
    "商務適用",
    "資料平台",
    "娛樂",
    "文件",
    "軟體",
    "解決方案",
    "開發者",
    "合作夥伴",
    "活動&促銷",
    "線上商城",
    "其他",
    "支援",
];

var r = 0,
    l = $('.li_s').length;

$(".li_s").each(function () {

    if (r >= li_str.length) {
        r = 0;
    }

    $(this).html(li_str[r]);
    r++;
});

var foot_str = [
    ["產品", "熱門活動", "商務適用", "資料平台", "娛樂", "文件", "軟體", "解決方案", "開發者", "合作夥伴", "活動&促銷", "線上商城", "其他", "支援"],
    ["mac", "ipad", "iphone", "watch", "tv", "music", "airpods", "homepad", "配件", "禮物卡", "活動&促銷", "線上商城", "其他", "支援"],
    ["尋找直營店", "網上選購", "Genius Bar 天才吧", "Today at Apple", "tv", "music", "airpods", "homepad", "配件", "禮物卡", "活動&促銷", "線上商城", "其他", "支援"]
];

var r = 0,
    l = foot_str.length;
var str3 = ""
for (var i = 0; i < l; i++) {
    str3 += '<ul class="foot' + i + '">'
    s = foot_str[i].length;

    for (var j = 0; j < s; j++) {
        str3 += '<li class="item' + j + '">' + foot_str[i][j];
        str3 += '</li >';
    }
    str3 += '</ul>';
}
$('.footer').html(str3);

var y = 1;
for (var i = 1; i < 10; i++) {
    for (var j = 1; j < 10; j++) {
        $("img.link" + i + j).each(function () {

            y = y + 5;
            $(this).attr('src', 'https://source.unsplash.com/random/' + i + '00x' + j + '00');
        })

        $("img.rlink" + i + j).each(function () {

            y = y + 5;
            $(this).attr('src', 'https://source.unsplash.com/random/' + i + '00x' + j + '00/?sig=' + y + '');
        })
    }
}