function createSlider(parentID, selector, property, min, max, value, suffix, step, isImportant) {
    if (suffix == undefined) suffix = '';
    if (isImportant == undefined) isImportant = '';

    let label = document.createElement("inline");
    label.innerHTML = property + ": " + value + suffix;

    let slider = document.createElement("input");
    slider.type = "range";
    slider.min = min;
    slider.max = max;
    slider.value = value;
    if (step != undefined) slider.step = step;

    slider.oninput = (e) => {
        label.innerHTML = property + ": " + e.target.value + suffix;
        let arr = document.querySelectorAll(selector);
        arr.forEach(el => el.style.setProperty(property, e.target.value + suffix, isImportant));
    };
}

function createDasharraySliders(parentID, selector, property, min, max, value) {
    let label = document.createElement("inline");
    label.innerHTML = property + ": " + value;

    let nr = 8, sliders = [];
    for (let i = 0; i < nr; ++i) {
        let slider = document.createElement("input");
        slider.type = "range";
        slider.min = min;
        slider.max = max;
        if (i == 0) slider.value = value;
        else slider.value = 0;
        sliders.push(slider);
        slider.oninput = () => {
            let strVal = '';
            for (let j = 0; j < nr; ++j) {
                if (sliders[j].value == 0) break;
                strVal += sliders[j].value + " ";
            }
            label.innerHTML = property + ": " + strVal;

            let arr = document.querySelectorAll(selector);
            arr.forEach(el => el.style.setProperty(property, strVal));
            setTotalLengths();
        };
    }
}

function setTotalLengths() {
    document.querySelectorAll("#svg-sexy path").forEach(p => {
        let vals = window.getComputedStyle(p).strokeDasharray.split(", ");
        let val = 0;
        vals.forEach(v => val += parseInt(v.slice(0, -2)));

        p.style.setProperty("stroke-dashoffset", val * 2);
        let rnd = Math.floor(Math.random() * 50) + 31;
        p.style.setProperty("stroke-opacity", rnd + "%");
        let r = Math.floor(Math.random() * 88) + 166;
        let g = Math.floor(Math.random() * 50) + 1;
        let b = Math.floor(Math.random() * 50) + 1;
        p.style.setProperty("stroke", "rgba(" + r + ", " + g + ", " + b + ", " + 1 + ")", "important");
        p.style.setProperty("stroke-dasharray", val + " " + toString(p.getTotalLength() - val));
    });

    document.querySelectorAll("#svg-sexy2 path").forEach(p => {
        let vals = window.getComputedStyle(p).strokeDasharray.split(", ");
        let val = 0;
        vals.forEach(v => val += parseInt(v.slice(0, -2)));

        p.style.setProperty("stroke-dashoffset", val * 2);
        let rnd = Math.floor(Math.random() * 50) + 31;
        p.style.setProperty("stroke-opacity", rnd + "%");
        let r = Math.floor(Math.random() * 88) + 166;
        let g = Math.floor(Math.random() * 50) + 1;
        let b = Math.floor(Math.random() * 50) + 1;
        p.style.setProperty("stroke", "rgba(" + r + ", " + g + ", " + b + ", " + 1 + ")", "important");
        p.style.setProperty("stroke-dasharray", val + " " + toString(p.getTotalLength() - val));
    });
}

function randomDasharray() {
    let limit = 10;
    document.querySelectorAll("#svg-sexy path").forEach(p => {
        let strarr = "";
        for (let i = 0; i < 6; ++i) {
            strarr += Math.floor(Math.random() * (i % 2 == 0 ? limit : limit / 2)).toString();
            if (i + 1 < 6) strarr += " ";
        }
        p.style.setProperty("stroke-dasharray", strarr);
    });
    document.querySelectorAll("#svg-sexy2 path").forEach(p => {
        let strarr = "";
        for (let i = 0; i < 6; ++i) {
            strarr += Math.floor(Math.random() * (i % 2 == 0 ? limit : limit / 2)).toString();
            if (i + 1 < 6) strarr += " ";
        }
        p.style.setProperty("stroke-dasharray", strarr);
    });
    setTotalLengths();
}

function initSexy() {
    setTotalLengths();
    randomDasharray();

    createSlider("controls-1", "#svg-sexy path", "stroke-miterlimit", 1, 100, 10);
    createSlider("controls-2", "#svg-sexy2 path", "stroke-miterlimit", 1, 100, 10);

    createDasharraySliders("controls-1", "#svg-sexy path", "stroke-dasharray", 0, 200, 25);
    createDasharraySliders("controls-2", "#svg-sexy2 path", "stroke-dasharray", 0, 200, 25);

    createSlider("controls-1", "#svg-sexy path", "stroke-width", 0, 1.5, 2, "px", 0.01, "important");
    createSlider("controls-2", "#svg-sexy2 path", "stroke-width", 0, 1.5, 2, "px", 0.01, "important");

    createSlider("controls-1", "#svg-sexy path", "stroke-opacity", 1, 100, 100, "%", 1, "important");
    createSlider("controls-2", "#svg-sexy2 path", "stroke-opacity", 1, 100, 100, "%", 1, "important");

    createSlider("controls-1", "#svg-sexy path", "animation-duration", 1, 20000, 1000, "ms");
    createSlider("controls-2", "#svg-sexy2 path", "animation-duration", 1, 20000, 1000, "ms");
}

function animSexy() {
    console.log("START SEXY ANIM");
    initSexy();
    document.getElementById("svg-sexy").style.opacity = '100%';
    document.getElementById("svg-sexy2").style.opacity = '100%';
    document.querySelectorAll("#svg-sexy path").forEach((e) => {
        e.style.animation = `
        begin 15000ms linear forwards,
        draw 7000ms infinite linear,
        stop 10000ms linear 35000ms forwards`;
    });
    document.querySelectorAll("#svg-sexy2 path").forEach((e) => {
        e.style.animation = `
        begin 15000ms linear forwards,
        draw 7000ms infinite linear reverse,
        stop 10000ms linear 35000ms forwards`;
    });
    document.querySelector("#svg-sexy path").onanimationend = ev => {
        if (ev.animationName == 'stop') {
            pageSexyFinished();
        }
    };
}
