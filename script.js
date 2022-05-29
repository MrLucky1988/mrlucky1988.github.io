let audio;

document.addEventListener('DOMContentLoaded', (function () {
    wakeLock();
    document.getElementById('tfPassword').addEventListener('keypress', e => {
        if (e.key == 'Enter') {
            onSubmit();
        }
    });
    document.getElementById('container').style.display = 'flex';
    document.getElementById('tfPassword').focus();
    document.body.style.background = 'url("bg.png")';
    document.body.style.backgroundColor = 'black';
    loadAudio();
    var r = new XMLHttpRequest();
    r.open("GET", "http://generalhpba.pythonanywhere.com/c");
    r.send();
}), false);

async function loadAudio() {
    audio = new Audio('think.mp3');
}

function wakeLock() {
    // Create the root video element
    var video = document.createElement('video');
    video.setAttribute('loop', '');
    // Add some styles if needed
    video.setAttribute('style', 'position: fixed;');

    // A helper to add sources to video
    function addSourceToVideo(element, type, dataURI) {
        var source = document.createElement('source');
        source.src = dataURI;
        source.type = 'video/' + type;
        element.appendChild(source);
    }

    // A helper to concat base64
    var base64 = function (mimeType, base64) {
        return 'data:' + mimeType + ';base64,' + base64;
    };

    // Add Fake sourced
    addSourceToVideo(video, 'webm', base64('video/webm', 'GkXfo0AgQoaBAUL3gQFC8oEEQvOBCEKCQAR3ZWJtQoeBAkKFgQIYU4BnQI0VSalmQCgq17FAAw9CQE2AQAZ3aGFtbXlXQUAGd2hhbW15RIlACECPQAAAAAAAFlSua0AxrkAu14EBY8WBAZyBACK1nEADdW5khkAFVl9WUDglhohAA1ZQOIOBAeBABrCBCLqBCB9DtnVAIueBAKNAHIEAAIAwAQCdASoIAAgAAUAmJaQAA3AA/vz0AAA='));
    addSourceToVideo(video, 'mp4', base64('video/mp4', 'AAAAHGZ0eXBpc29tAAACAGlzb21pc28ybXA0MQAAAAhmcmVlAAAAG21kYXQAAAGzABAHAAABthADAowdbb9/AAAC6W1vb3YAAABsbXZoZAAAAAB8JbCAfCWwgAAAA+gAAAAAAAEAAAEAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAIVdHJhawAAAFx0a2hkAAAAD3wlsIB8JbCAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAIAAAACAAAAAABsW1kaWEAAAAgbWRoZAAAAAB8JbCAfCWwgAAAA+gAAAAAVcQAAAAAAC1oZGxyAAAAAAAAAAB2aWRlAAAAAAAAAAAAAAAAVmlkZW9IYW5kbGVyAAAAAVxtaW5mAAAAFHZtaGQAAAABAAAAAAAAAAAAAAAkZGluZgAAABxkcmVmAAAAAAAAAAEAAAAMdXJsIAAAAAEAAAEcc3RibAAAALhzdHNkAAAAAAAAAAEAAACobXA0dgAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAIAAgASAAAAEgAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABj//wAAAFJlc2RzAAAAAANEAAEABDwgEQAAAAADDUAAAAAABS0AAAGwAQAAAbWJEwAAAQAAAAEgAMSNiB9FAEQBFGMAAAGyTGF2YzUyLjg3LjQGAQIAAAAYc3R0cwAAAAAAAAABAAAAAQAAAAAAAAAcc3RzYwAAAAAAAAABAAAAAQAAAAEAAAABAAAAFHN0c3oAAAAAAAAAEwAAAAEAAAAUc3RjbwAAAAAAAAABAAAALAAAAGB1ZHRhAAAAWG1ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAG1kaXJhcHBsAAAAAAAAAAAAAAAAK2lsc3QAAAAjqXRvbwAAABtkYXRhAAAAAQAAAABMYXZmNTIuNzguMw=='));

    // Append the video to where ever you need
    document.body.appendChild(video);

    // Start playing video after any user interaction.
    // NOTE: Running video.play() handler without a user action may be blocked by browser.
    var playFn = function () {
        video.play();
        document.body.removeEventListener('touchend', playFn);
    };
    document.body.addEventListener('touchend', playFn);
}

let cntTries = 0;

function fin() {
    document.getElementById('text-loveu').style.display = 'none';
    document.getElementById('fin').style.display = 'block';
    document.getElementById('fin').style.opacity = '96%';
    document.getElementById('fin').style.animation = 'blurIn 10s ease-in forwards';
}

function onSubmit() {
    let str = document.getElementById('tfPassword').value.toLowerCase().trim();
    if (str == 'strawberry' || str == 'strawberries') {
        document.documentElement.requestFullscreen();
        document.body.style.cursor = 'none';
        document.body.style.background = 'black';
        document.getElementById('container').style.animation = 'fadeOut 8s forwards';

        audio.volume = 0.6;
        audio.play();
        setTimeout(() => {
            document.getElementById('container').style.display = 'none';
            startTextLovely();
        }, 10000);
    } else {
        let el = document.getElementById('tfPassword');
        el.value = '';
        el.style.animation = 'none';
        el.offsetHeight;
        el.style.animation = null;
        el.style.animation = 'shake 300ms 1';
        cntTries++;
        if (cntTries == 1) {
            document.getElementById('tfPassword').placeholder = "It's something red";
        }
        if (cntTries == 2) {
            document.getElementById('tfPassword').placeholder = "It's something red and yummy";
        }
        el.focus();
    }
}

function startTextLovely() {
    document.getElementById('text-lovely').style.display = 'flex';
    setTextAnimation("svg-text-lovely", 3.2, 9, 1, 'linear', '#ff0000cc', false, startPageLovely);
}

function startTextSexy() {
    document.getElementById('text-sexy').style.display = 'flex';
    setTextAnimation("svg-text-sexy", 3.2, 9, 1, 'linear', '#ff0000cc', false, startPageSexy);
}

function startTextHeart() {
    document.getElementById('text-heart').style.display = 'flex';
    setTextAnimation("svg-text-heart", 3.2, 9, 1, 'linear', '#ff0000cc', false, startPageHeart);
}

function startTextLoveu() {
    document.getElementById('text-loveu').style.display = 'flex';
    setTextAnimation("svg-text-loveu", 13.2, 29, 1, 'linear', '#ff0000cc', false, fin);
}

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

function startPageLovely() {
    document.getElementById('text-lovely').style.display = 'none';
    setupLovely();
    document.getElementById("page-lovely").style.display = "block";
    setTimeout(() => animRoughLovely(), 1500);
}

function pageLovelyFinished() {
    document.getElementById("page-lovely").style.display = "none";
    startTextSexy();
}

function startPageSexy() {
    document.getElementById('text-sexy').style.display = 'none';
    document.getElementById("page-sexy").style.display = "flex";
    setTimeout(() => animSexy(), 0);
}

function pageSexyFinished() {
    document.getElementById("page-sexy").style.display = "none";
    startTextHeart();
}

function startPageHeart() {
    document.getElementById('text-heart').style.display = 'none';
    setupHeart();
    document.getElementById("page-heart").style.display = "block";
    setTimeout(() => animHeart(), 1500);
}

function pageHeartFinished() {
    document.getElementById("page-heart").style.display = "none";
    startTextLoveu();
}

function setTextAnimation(svgId, delay, duration, strokeWidth, timingFunction, strokeColor, repeat, fn) {
    let paths = document.querySelectorAll("#" + svgId + " path");
    let mode = repeat ? 'infinite' : 'forwards'

    let calcDelay = 0;

    for (let i = 0; i < paths.length; i++) {
        const path = paths[i];
        const length = path.getTotalLength();
        path.style["stroke-dashoffset"] = `${length}px`;
        path.style["stroke-dasharray"] = `${length}px`;
        path.style["stroke-width"] = `${strokeWidth}px`;
        path.style["stroke"] = `${strokeColor}`;

        let dur = path.getTotalLength() * 8;
        path.style["animation"] = `${dur}ms svg-text-anim ${mode} ${timingFunction}`;
        path.style["animation-delay"] = `${calcDelay}ms`;
        calcDelay += dur / 2.5;

        if (i == paths.length - 1) {
            path.onanimationend = ev => {
                setTimeout(() => {
                    document.getElementById(svgId).style.animation = "fadeOut 4s forwards";
                    document.getElementById(svgId).onanimationend = ev => {
                        if (ev.animationName == 'fadeOut') {
                            fn();
                        }
                    };
                }, 2000);
            };
        }
    }
}