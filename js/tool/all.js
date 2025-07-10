class arr_contrl {
    constructor(value) {
        this.value = value;
    }

    remove_all(dx) {
        let x = this.value;
        let l = this.value.length;
        for (var i = 0, n = 0; i < l; i++) {
            if (x[i] != dx) {
                x[n++] = x[i];
            }
        }
        x.length -= l - n;
        return x;
    }

    remove(index) {
        let x = this.value;
        let l = this.value.length;
        if (isNaN(index) || index > l) {
            return false;
        }

        for (var i = 0, n = 0; i < l; i++) {
            if (x[i] != x[index]) {
                x[n++] = x[i];
            }
        }
        x.length -= 1;
        return x;
    };

    val() {
        return this.value;
    };
}

function add_active(x) {
    x.click(function () {
        $(this).toggleClass("active");
        return false;
    });
}
function add_hover(x) {
    x.mouseover(function () {
        $(this).addClass("active")
    });
    x.mouseout(function () {
        $(this).removeClass("active")
    });
}


var arr4 = [
    {
        name: "Tsuifei",
        type: "object",
        Number: [5, 7, 13, 42]
    },
    [
        { name: "Philippe", type: "object" },
        { name: "Ayda", type: "object" },
    ],
    1,
    "three",
];

