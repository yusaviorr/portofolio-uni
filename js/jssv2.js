var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};


// my js

function changeColorNavRed() {
    const ScrollBar = document.getElementById("scroll-bar");
    const navColorIconGreen = document.getElementById("navColorIconGreen");
    const navColorIconRed = document.getElementById("navColorIconRed");
    const navColorIconBlue = document.getElementById("navColorIconBlue");
    const navColorIconOrange = document.getElementById("navColorIconOrange");
    const NavElement1 = document.getElementById("navElement1");
    const NavElement2 = document.getElementById("navElement2");
    const NavElement3 = document.getElementById("navElement3");
    const borderElement1 = document.getElementById("borderElement1");
    const borderElement2 = document.getElementById("borderElement2");
    const borderElement3 = document.getElementById("borderElement3");
    const borderElement4 = document.getElementById("borderElement4");
    const boxElement1 = document.getElementById("boxElement1");
    const boxElement2 = document.getElementById("boxElement2");
    const boxElement3 = document.getElementById("boxElement3");

    if (navColorIconRed.src.includes("red_dot_hole.png")) {

        navColorIconOrange.src="./images/orange_dot_hole.png";
        navColorIconGreen.src="./images/green_dot_hole.png";
        navColorIconBlue.src="./images/blue_dot_hole.png";
        navColorIconRed.src="./images/red_dot.png";

        ScrollBar.classList.remove("green-scroll", "blue-scroll", "orange-scroll");
        ScrollBar.classList.add("red-scroll");

        NavElement1.classList.remove("transparent-color-green", "transparent-color-blue", "transparent-color-orange");
        NavElement1.classList.remove("text-effect-green", "text-effect-blue", "text-effect-orange");
        NavElement1.classList.add("text-effect-red");
        NavElement1.classList.add("transparent-color-red");

        NavElement2.classList.remove("transparent-color-green", "transparent-color-blue", "transparent-color-orange");
        NavElement2.classList.remove("text-effect-green", "text-effect-blue", "text-effect-orange");
        NavElement2.classList.add("text-effect-red");
        NavElement2.classList.add("transparent-color-red");

        NavElement3.classList.remove("transparent-color-green", "transparent-color-blue", "transparent-color-orange");
        NavElement3.classList.remove("text-effect-green", "text-effect-blue", "text-effect-orange");
        NavElement3.classList.add("text-effect-red");
        NavElement3.classList.add("transparent-color-red");

        borderElement1.classList.remove("corner-border-green", "corner-border-blue", "corner-border-orange");
        borderElement1.classList.add("corner-border-red");

        borderElement2.classList.remove("corner-border-green", "corner-border-blue", "corner-border-orange");
        borderElement2.classList.add("corner-border-red");

        borderElement3.classList.remove("corner-border-green", "corner-border-blue", "corner-border-orange");
        borderElement3.classList.add("corner-border-red");

        borderElement4.classList.remove("corner-border-green", "corner-border-blue", "corner-border-orange");
        borderElement4.classList.add("corner-border-red");

        boxElement1.classList.remove("box-bg-color-green", "box-bg-color-blue", "box-bg-color-orange");
        boxElement1.classList.add("box-bg-color-red");

        boxElement2.classList.remove("box-bg-color-green", "box-bg-color-blue", "box-bg-color-orange");
        boxElement2.classList.add("box-bg-color-red");
        
        boxElement3.classList.remove("box-bg-color-green", "box-bg-color-blue", "box-bg-color-orange");
        boxElement3.classList.add("box-bg-color-red");
    }
}

function changeColorNavGreen() {
    const ScrollBar = document.getElementById("scroll-bar");
    const navColorIconGreen = document.getElementById("navColorIconGreen");
    const navColorIconRed = document.getElementById("navColorIconRed");
    const navColorIconBlue = document.getElementById("navColorIconBlue");
    const navColorIconOrange = document.getElementById("navColorIconOrange");
    const NavElement1 = document.getElementById("navElement1");
    const NavElement2 = document.getElementById("navElement2");
    const NavElement3 = document.getElementById("navElement3");
    const borderElement1 = document.getElementById("borderElement1");
    const borderElement2 = document.getElementById("borderElement2");
    const borderElement3 = document.getElementById("borderElement3");
    const borderElement4 = document.getElementById("borderElement4");
    const boxElement1 = document.getElementById("boxElement1");
    const boxElement2 = document.getElementById("boxElement2");
    const boxElement3 = document.getElementById("boxElement3");

    if (navColorIconGreen.src.includes("green_dot_hole.png")) {

        navColorIconOrange.src="./images/orange_dot_hole.png";
        navColorIconRed.src="./images/red_dot_hole.png";
        navColorIconBlue.src="./images/blue_dot_hole.png";
        navColorIconGreen.src="./images/green_dot.png";

        ScrollBar.classList.remove("red-scroll", "blue-scroll", "orange-scroll");
        ScrollBar.classList.add("green-scroll");

        NavElement1.classList.remove("transparent-color-red", "transparent-color-blue", "transparent-color-orange");
        NavElement1.classList.remove("text-effect-red", "text-effect-blue", "text-effect-orange");
        NavElement1.classList.add("text-effect-green");
        NavElement1.classList.add("transparent-color-green");

        NavElement2.classList.remove("transparent-color-red", "transparent-color-blue", "transparent-color-orange");
        NavElement2.classList.remove("text-effect-red", "text-effect-blue", "text-effect-orange");
        NavElement2.classList.add("text-effect-green");
        NavElement2.classList.add("transparent-color-green");

        NavElement3.classList.remove("transparent-color-red", "transparent-color-blue", "transparent-color-orange");
        NavElement3.classList.remove("text-effect-red", "text-effect-blue", "text-effect-orange");
        NavElement3.classList.add("text-effect-green");
        NavElement3.classList.add("transparent-color-green");

        borderElement1.classList.remove("corner-border-red", "corner-border-blue", "corner-border-orange");
        borderElement1.classList.add("corner-border-green");

        borderElement2.classList.remove("corner-border-red", "corner-border-blue", "corner-border-orange");
        borderElement2.classList.add("corner-border-green");

        borderElement3.classList.remove("corner-border-red", "corner-border-blue", "corner-border-orange");
        borderElement3.classList.add("corner-border-green");

        borderElement4.classList.remove("corner-border-red", "corner-border-blue", "corner-border-orange");
        borderElement4.classList.add("corner-border-green");

        boxElement1.classList.remove("box-bg-color-red", "box-bg-color-blue", "box-bg-color-orange");
        boxElement1.classList.add("box-bg-color-green");

        boxElement2.classList.remove("box-bg-color-red", "box-bg-color-blue", "box-bg-color-orange");
        boxElement2.classList.add("box-bg-color-green");

        boxElement3.classList.remove("box-bg-color-red", "box-bg-color-blue", "box-bg-color-orange");
        boxElement3.classList.add("box-bg-color-green");
    }
}

function changeColorNavOrange() {
    const ScrollBar = document.getElementById("scroll-bar");
    const navColorIconGreen = document.getElementById("navColorIconGreen");
    const navColorIconRed = document.getElementById("navColorIconRed");
    const navColorIconBlue = document.getElementById("navColorIconBlue");
    const navColorIconOrange = document.getElementById("navColorIconOrange");
    const NavElement1 = document.getElementById("navElement1");
    const NavElement2 = document.getElementById("navElement2");
    const NavElement3 = document.getElementById("navElement3");
    const borderElement1 = document.getElementById("borderElement1");
    const borderElement2 = document.getElementById("borderElement2");
    const borderElement3 = document.getElementById("borderElement3");
    const borderElement4 = document.getElementById("borderElement4");
    const boxElement1 = document.getElementById("boxElement1");
    const boxElement2 = document.getElementById("boxElement2");
    const boxElement3 = document.getElementById("boxElement3");

    if (navColorIconOrange.src.includes("orange_dot_hole.png")) {

        navColorIconRed.src="./images/red_dot_hole.png";
        navColorIconGreen.src="./images/green_dot_hole.png";
        navColorIconBlue.src="./images/blue_dot_hole.png";
        navColorIconOrange.src="./images/orange_dot.png";

        ScrollBar.classList.remove("red-scroll", "green-scroll", "blue-scroll");
        ScrollBar.classList.add("orange-scroll");

        NavElement1.classList.remove("transparent-color-red", "transparent-color-green", "transparent-color-blue");
        NavElement1.classList.remove("text-effect-green", "text-effect-blue", "text-effect-red");
        NavElement1.classList.add("text-effect-orange");
        NavElement1.classList.add("transparent-color-orange");

        NavElement2.classList.remove("transparent-color-red", "transparent-color-green", "transparent-color-blue");
        NavElement2.classList.remove("text-effect-green", "text-effect-blue", "text-effect-red");
        NavElement2.classList.add("text-effect-orange");
        NavElement2.classList.add("transparent-color-orange");

        NavElement3.classList.remove("transparent-color-red", "transparent-color-green", "transparent-color-blue");
        NavElement3.classList.remove("text-effect-green", "text-effect-blue", "text-effect-red");
        NavElement3.classList.add("text-effect-orange");
        NavElement3.classList.add("transparent-color-orange");

        borderElement1.classList.remove("corner-border-red", "corner-border-green", "corner-border-blue");
        borderElement1.classList.add("corner-border-orange");

        borderElement2.classList.remove("corner-border-red", "corner-border-green", "corner-border-blue");
        borderElement2.classList.add("corner-border-orange");

        borderElement3.classList.remove("corner-border-red", "corner-border-green", "corner-border-blue");
        borderElement3.classList.add("corner-border-orange");

        borderElement4.classList.remove("corner-border-red", "corner-border-green", "corner-border-blue");
        borderElement4.classList.add("corner-border-orange");

        boxElement1.classList.remove("box-bg-color-red", "box-bg-color-green", "box-bg-color-blue");
        boxElement1.classList.add("box-bg-color-orange");

        boxElement2.classList.remove("box-bg-color-red", "box-bg-color-green", "box-bg-color-blue");
        boxElement2.classList.add("box-bg-color-orange");

        boxElement3.classList.remove("box-bg-color-red", "box-bg-color-green", "box-bg-color-blue");
        boxElement3.classList.add("box-bg-color-orange");
    }
}

function changeColorNavBlue() {
    const ScrollBar = document.getElementById("scroll-bar");
    const navColorIconGreen = document.getElementById("navColorIconGreen");
    const navColorIconRed = document.getElementById("navColorIconRed");
    const navColorIconBlue = document.getElementById("navColorIconBlue");
    const navColorIconOrange = document.getElementById("navColorIconOrange");
    const NavElement1 = document.getElementById("navElement1");
    const NavElement2 = document.getElementById("navElement2");
    const NavElement3 = document.getElementById("navElement3");
    const borderElement1 = document.getElementById("borderElement1");
    const borderElement2 = document.getElementById("borderElement2");
    const borderElement3 = document.getElementById("borderElement3");
    const borderElement4 = document.getElementById("borderElement4");
    const boxElement1 = document.getElementById("boxElement1");
    const boxElement2 = document.getElementById("boxElement2");
    const boxElement3 = document.getElementById("boxElement3");

    if (navColorIconBlue.src.includes("blue_dot_hole.png")) {

        navColorIconRed.src="./images/red_dot_hole.png";
        navColorIconGreen.src="./images/green_dot_hole.png";
        navColorIconOrange.src="./images/orange_dot_hole.png";
        navColorIconBlue.src="./images/blue_dot.png";

        ScrollBar.classList.remove("red-scroll", "green-scroll", "orange-scroll");
        ScrollBar.classList.add("blue-scroll");

        NavElement1.classList.remove("transparent-color-red", "transparent-color-green", "transparent-color-orange");
        NavElement1.classList.remove("text-effect-green", "text-effect-orange", "text-effect-red");
        NavElement1.classList.add("text-effect-blue");
        NavElement1.classList.add("transparent-color-blue");

        NavElement2.classList.remove("transparent-color-red", "transparent-color-green", "transparent-color-orange");
        NavElement2.classList.remove("text-effect-green", "text-effect-orange", "text-effect-red");
        NavElement2.classList.add("text-effect-blue");
        NavElement2.classList.add("transparent-color-blue");

        NavElement3.classList.remove("transparent-color-red", "transparent-color-green", "transparent-color-orange");
        NavElement3.classList.remove("text-effect-green", "text-effect-orange", "text-effect-red");
        NavElement3.classList.add("text-effect-blue");
        NavElement3.classList.add("transparent-color-blue");

        borderElement1.classList.remove("corner-border-red", "corner-border-green", "corner-border-orange");
        borderElement1.classList.add("corner-border-blue");

        borderElement2.classList.remove("corner-border-red", "corner-border-green", "corner-border-orange");
        borderElement2.classList.add("corner-border-blue");

        borderElement3.classList.remove("corner-border-red", "corner-border-green", "corner-border-orange");
        borderElement3.classList.add("corner-border-blue");

        borderElement4.classList.remove("corner-border-red", "corner-border-green", "corner-border-orane");
        borderElement4.classList.add("corner-border-blue");

        boxElement1.classList.remove("box-bg-color-red", "box-bg-color-green", "box-bg-color-orange");
        boxElement1.classList.add("box-bg-color-blue");

        boxElement2.classList.remove("box-bg-color-red", "box-bg-color-green", "box-bg-color-orange");
        boxElement2.classList.add("box-bg-color-blue");

        boxElement3.classList.remove("box-bg-color-red", "box-bg-color-green", "box-bg-color-orange");
        boxElement3.classList.add("box-bg-color-blue");
    }
}