function pos_input_move(r) {
    let b, c, _l = r.length;

    for (var i = 0; i < _l; i++) {
        if (i == 0)
            b = r[i];
        else
            b = r[i - 1];
        if (i == (_l - 1))
            c = r[i];
        else
            c = r[i + 1];
        _auto(r[i], b, c);
    }

    var s = false;
    var end = false;

    function _auto(r, a, e) {
        r.on('keyup', function () {
            let l = $(this).attr("maxlength");
            let len = $(this).val().length;
            let b = getCursorPosition(this);
            let E = window.event.key;
            if (E == "ArrowDown" || E == "Enter")
                e.focus();

            else if (E == "ArrowUp")
                a.focus();

            else if (E == "ArrowRight") {
                if (len === b) {
                    if (end) {
                        e.focus();
                        end = false;
                    } else
                        end = true
                } else
                    s = false;

                if (len == 0)
                    e.focus();
            }

            else if (E == "ArrowLeft" || E == "Backspace" || E == "Delete") {
                if (b == 0) {
                    if (s) {
                        a.focus();
                        s = false;
                    } else
                        s = true;
                } else
                    end = false;

                if (len == 0)
                    a.focus();
            }
            else if (len == l)
                e.focus();
        });
    }
}

function getCursorPosition(elem) {//获取光标位置函数
    let pp = 0

    if (document.selection) {// IE
        elem.focus()
        let aa = document.selection.createRange()
        aa.moveStart('character', -elem.value.length)
        pp = aa.text.length
    }

    else if (elem.selectionStart || elem.selectionStart == '0') {// FF, Chrome
        pp = elem.selectionStart
    }
    return pp
}

function setCaretPosition(elem, pos) {//设置光标位置函数

    if (elem.setSelectionRange) {// IE
        elem.focus()
        elem.setSelectionRange(pos, pos)
    }

    else if (elem.createTextRange) { // FF, Chrome
        let range = elem.createTextRange()
        range.collapse(true)
        range.moveEnd('character', pos)
        range.moveStart('character', pos)
        range.select()
    }
}


function insertAtCursor(elem, value) {
    let field = elem
    let newValue = ''

    if (document.selection) { // IE support
        field.focus()
        let sel = document.selection.createRange()
        sel.text = newValue = value
        sel.select()
    } else if (field.selectionStart || field.selectionStart === 0) {
        let startPos = field.selectionStart
        let endPos = field.selectionEnd
        let restoreTop = field.scrollTop
        newValue = field.value.substring(0, startPos) +
            value +
            field.value.substring(endPos, field.value.length)
        if (restoreTop > 0) {
            field.scrollTop = restoreTop
        }
        field.value = newValue
        field.focus()

        setTimeout(function () {
            field.selectionStart = startPos + value.length
            field.selectionEnd = startPos + value.length
        }, 0)
    } else {
        newValue = field.value + value
        field.value = newValue
        field.focus()
    }
}