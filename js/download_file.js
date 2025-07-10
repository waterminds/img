function download_file(_downloadName, _file) {
    window.URL = window.URL || window.webkitURL;

    if (window.XMLHttpRequest) { //Firefox, Opera, IE7, 
        var xhr = new XMLHttpRequest();
    } else {
        var xhr = new ActiveXObject("Microsoft.XMLHTTP");  //IE 5 and 6 
    }

    var a = document.createElement('a'), file;

    xhr.open('GET', _file, true);
    xhr.responseType = 'blob';
    xhr.onload = function () {
        file = new Blob([xhr.response], { type: 'application/octet-stream' });
        a.href = window.URL.createObjectURL(file);
        a.download = _downloadName;  // Set to whatever file name you want

        a.click();
    };
    xhr.send();
}