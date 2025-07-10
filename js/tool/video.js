window.onload = function () {
    // 获得视屏对象

    var v = document.querySelector("#video");
    var playBtn = document.querySelector(".play-icon");
    v.addEventListener("click", function () {
        if (!v.paused) {
            playBtn.style.background = "url('img/Play_12.png') center center no-repeat";
            v.pause();
        } else {
            v.play();
            playBtn.style.background = "url('img/pause_12.png') center center no-repeat";
        }
    });
    playBtn.addEventListener("click", function () {
        if (!v.paused) {
            playBtn.style.background = "url('img/Play_12.png') center center no-repeat";
            v.pause();
        } else {
            v.play();
            playBtn.style.background = "url('img/pause_12.png') center center no-repeat";
        }
    });


    //工具栏的显示效果
    v.onmouseover = function () {
        this.nextElementSibling.style.display = 'block';
    }
    v.onmouseleave = function () {
        this.nextElementSibling.style.display = 'none';
    }
    var vtool = document.querySelector(".v-tool");
    vtool.onmouseover = function () {
        this.style.display = 'block';
    }
    vtool.onmouseleave = function () {
        this.style.display = 'none';
    }
    //声音的事件
    var voice = document.querySelector(".voice");
    voice.onmouseover = function () {
        this.children[0].style.display = 'block';
    }
    voice.onmouseout = function () {
        this.children[0].style.display = 'none';
    }
    //声音调整事件
    var voiceBar = document.querySelector(".voiceBar");
    var voiceBg = document.querySelector(".voice-bg");
    var voiceBarInner = document.querySelector(".voiceBar-inner");
    var voiceAfter = document.querySelector(".voice-after");
    var voiceCtrl = document.querySelector(".voice-ctrl");
    //记录当前坐标的位置
    var y0 = 0;

    v.volume = 0;
    voiceAfter.onmousedown = function (event) {
        var event = event || window.event;//获得鼠标的拖动事件
        //记录下当前的坐标点
        y0 = event.clientY;
        var that = event;
        //获得当前div在所包含的祖先的位置
        //用于记录当前声量的比例

        document.onmousemove = function (event) {
            var event = event || window.event;//获得鼠标的拖动事件
            var dis = 0;
            dis = event.clientY - y0;


            voiceBarInner.style.height = voiceBarInner.offsetHeight + dis + "px";

            if (voiceBarInner.offsetHeight >= voiceBar.offsetHeight) {
                voiceBarInner.style.height = "100%";
                y0 = y0;
                voicePercent = 0;
                voiceCtrl.style.background = "url('img/volume_1.png') center center no-repeat";
            } else if (voiceBarInner.offsetHeight == 0) {
                voiceBarInner.style.height = "0";
                y0 = y0;
                voicePercent = 1;
            } else {
                y0 = y0 + dis;
                voicePercent = 1 - voiceBarInner.offsetHeight / voiceBar.offsetHeight;
            }
            //修改背景
            if (voicePercent > 40) {
                voiceCtrl.style.background = "url('img/volume_3.png') center center no-repeat";
            } else if (voicePercent <= 40 && voicePercent > 0) {
                voiceCtrl.style.background = "url('img/volume_2.png') center center no-repeat";
            } else {
                voiceCtrl.style.background = "url('img/volume_1.png') center center no-repeat";
            }
            //重新设置高度
            v.volume = voicePercent;
        }
        document.onmouseup = function () {
            voicePercent = voiceBarInner.offsetHeight / voiceBar.offsetHeight * 100;
            document.onmousemove = null;
        }

    }
    //还没有结束
    //技术有限，没有使用通过点击直接条音量
    voiceBarInner.onclick = function (event) {
        var y2 = event.clientY;
        //判断距离
        var dis = y0 - event.clientY;
        y0 = event.clientY;
        voiceBarInner.style.height = voiceBarInner.offsetHeight - dis + "px";
        voicePercent = 100 - Math.ceil(voiceBarInner.offsetHeight / voiceBar.offsetHeight * 100);
        console.log(dis);
    }
    voiceBg.onclick = function (event) {
        var y2 = event.clientY;
        //判断距离
        var dis = y0 - event.clientY;
        y0 = event.clientY;
        voiceBarInner.style.height = voiceBarInner.offsetHeight - dis + "px";
        voicePercent = 100 - Math.ceil(voiceBarInner.offsetHeight / voiceBar.offsetHeight * 100);
        console.log(dis);
    }
    //点击音量图标是否静音

    voiceCtrl.onclick = function () {
        if (!v.muted) {
            //启动静音
            v.muted = true;
            //更换背景
            voiceCtrl.style.background = "url('img/volume_0.png') center center no-repeat";
        }
        else {//返回上一个状态
            v.muted = false;
            if (voicePercent > 40) {
                voiceCtrl.style.background = "url('img/volume_3.png') center center no-repeat";
            } else if (voicePercent <= 40 && voicePercent > 0) {
                voiceCtrl.style.background = "url('img/volume_2.png') center center no-repeat";
            } else {
                voiceCtrl.style.background = "url('img/volume_1.png') center center no-repeat";
            }
        }
    }

    //console.log(voiceBar.offsetHeight);
    //console.log(voiceBarInner.offsetHeight);
    //同样的方法使用进度条
    var progressBar = document.querySelector(".progressBar");
    var proBarInner = document.querySelector(".proBar-inner");
    var proBarAfter = document.querySelector(".after");

    var durationPercent = 0;
    var proBarX0 = 0;
    proBarAfter.onmousedown = function (event) {
        var event = event || window.event;

        proBarX0 = event.clientX;
        document.onmousemove = function (event) {
            var event = event || window.event;
            var dis = event.clientX - proBarX0;

            proBarInner.style.width = proBarInner.offsetWidth + dis + "px";
            console.log(progressBar.offsetWidth);

            if (proBarInner.offsetWidth >= progressBar.offsetWidth) {
                proBarInner.style.width = '100%';
                proBarX0 = proBarX0;
            } else {
                proBarX0 = event.clientX;
            }
            durationPercent = proBarInner.offsetWidth / progressBar.offsetWidth;
            v.currentTime = v.duration * durationPercent;
        }
        document.onmouseup = function () {
            document.onmousemove = null;
        }
    }

    //获得总时间
    var t1 = document.querySelector("#t1");
    t1.innerHTML = timeFormat(v.currentTime);
    var t2 = document.querySelector("#t2");
    t2.innerHTML = timeFormat(v.duration);


    //更新当前呢时间
    v.ontimeupdate = function () {
        t1.innerHTML = timeFormat(v.currentTime);
        proBarInner.style.width = (v.currentTime / v.duration) * 100 + "%";
        //console.log(v.currentTime/v.duration);
        if (v.currentTime == v.duration) {
            v.pause();
            v.currentTime = 0;
            playBtn.style.background = "url('img/Play_12.png') center center no-repeat";
        }
    };
    //转化为时间
    function timeFormat(t) {
        var h = Math.floor(t / 3600);
        if (h < 10) {
            h = "0" + h;
        }
        var m = Math.floor(t % 3600 / 60);
        if (m < 10) {
            m = "0" + m;
        }
        var s = Math.round(t % 3600 % 60);
        if (s < 10) {
            s = "0" + s;
        }
        var str = '';
        if (h != 0) {
            str = h + ':' + m + ':' + s;
        } else {
            str = m + ':' + s;
        }
        return str;
    }


    ////点击全屏事件 
    var fullScreen = document.querySelector(".full-screen");
    var container = document.querySelector(".container");
    var videoDiv = document.querySelector(".video");
    var isFS = false;//是否在全屏状态下

    fullScreen.onclick = function () {

        var fc = document.querySelector(".fullScreen");
        if (!isFS) {
            var element = document.documentElement;
            if (element.requestFullScreen) {
                element.requestFullScreen();
            } else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            } else if (element.webkitRequestFullScreen) {
                element.webkitRequestFullScreen();
            }
            fullScreen.style.background = "url('img/fullscreen_exit_12.png') center center no-repeat";
            fc.style.display = "block";
            fc.appendChild(videoDiv);
            isFS = true;

        } else {
            var element = document;
            if (element.exitFullscreen) {
                element.exitFullscreen();
            } else if (element.mozCancelFullScreen) {
                element.mozCancelFullScreen();
            } else if (element.webkitExitFullscreen) {
                element.webkitExitFullscreen();
            }
            if (typeof window.ActiveXObject !== "undefined") {
                var wscript = new ActiveXObject("WScript.Shell");
                if (wscript !== null) {
                    wscript.SendKeys("{Esc}");
                }
            }
            fullScreen.style.background = "url('img/Full_screen_12.png') center center no-repeat";
            fc.style.display = "none";
            fc.innerHTML = "";
            container.appendChild(videoDiv);
            isFS = false;
        }
    }
}