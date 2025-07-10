$(document).ready(function () {
    function check($y, s) {
        var $x = "",
            htmlString;

        $y.each(function () {
            $x = "";
            htmlString = $(this).html();

            for (var i = 0; i < s; i++) {
                $x = $x + htmlString;
            }

            $(this).html($x);
        });

    }
    check($(".re02"), 2);
    check($(".re03"), 3);
    check($(".re04"), 4);
    check($(".re05"), 5);
    check($(".re06"), 6);
    check($(".re07"), 7);
    check($(".re08"), 8);
    check($(".re09"), 9);
    check($(".re10"), 10);

    check($(".re12"), 2);
    check($(".re13"), 3);
    check($(".re14"), 4);
    check($(".re15"), 5);
    check($(".re16"), 6);
    check($(".re17"), 7);
    check($(".re18"), 8);
    check($(".re19"), 9);
    check($(".re10"), 10);

    check($(".re22"), 2);
    check($(".re23"), 3);
    check($(".re24"), 4);
    check($(".re25"), 5);
    check($(".re26"), 6);
    check($(".re27"), 7);
    check($(".re28"), 8);
    check($(".re29"), 9);
    check($(".re20"), 10);

    check($(".re32"), 2);
    check($(".re33"), 3);
    check($(".re34"), 4);
    check($(".re35"), 5);
    check($(".re36"), 6);
    check($(".re37"), 7);
    check($(".re38"), 8);
    check($(".re39"), 9);
    check($(".re30"), 10);

    check($(".re42"), 2);
    check($(".re43"), 3);
    check($(".re44"), 4);
    check($(".re45"), 5);
    check($(".re46"), 6);
    check($(".re47"), 7);
    check($(".re48"), 8);
    check($(".re49"), 9);
    check($(".re40"), 10);
})