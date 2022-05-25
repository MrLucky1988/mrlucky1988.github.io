document.addEventListener('DOMContentLoaded', (function () {
    startTextLovely();
    // startTextLoveu();
    // startTextHeart();
}), false);

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

function fin() {
    alert("FIN");
}

function startPageLovely() {
    document.getElementById('text-lovely').style.display = 'none';
    setupLovely();
    document.getElementById("page-lovely").style.display = "block";
    setTimeout(() => animRoughLovely(), 1500);
}

function pageLovelyFinished() {
    console.log("END ANIM LOVELY");
    document.getElementById("page-lovely").style.display = "none";
    startTextSexy();
}

function startPageSexy() {
    document.getElementById('text-sexy').style.display = 'none';
    document.getElementById("page-sexy").style.display = "flex";
    setTimeout(() => animSexy(), 0);
}

function pageSexyFinished() {
    console.log("END ANIM SEXY");
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
    console.log("END ANIM HEART");
    document.getElementById("page-heart").style.display = "none";
    fin();
}

function setTextAnimation(svgId, delay, duration, strokeWidth, timingFunction, strokeColor, repeat, fn) {
    console.log('text anim');
    let paths = document.querySelectorAll("#" + svgId + " path");
    console.log(paths.length);
    let mode = repeat ? 'infinite' : 'forwards'

    let calcDelay = 0;

    for (let i = 0; i < paths.length; i++) {
        // console.log(paths[i]);
        const path = paths[i];
        const length = path.getTotalLength();
        path.style["stroke-dashoffset"] = `${length}px`;
        path.style["stroke-dasharray"] = `${length}px`;
        path.style["stroke-width"] = `${strokeWidth}px`;
        path.style["stroke"] = `${strokeColor}`;

        // path.style["animation"] = `${duration}s svg-text-anim ${mode} ${timingFunction}`;
        // path.style["animation-delay"] = `${i * delay}s`;

        let dur = path.getTotalLength() * 8;
        path.style["animation"] = `${dur}ms svg-text-anim ${mode} ${timingFunction}`;
        path.style["animation-delay"] = `${calcDelay}ms`;
        console.log(dur);
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
// setTextAnimation(0.1, 13.4, 1, 'linear', '#ff0000aa', false);