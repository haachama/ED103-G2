(function () {

    var canvas = document.getElementById('water-canvas');
    var ctx = canvas.getContext('2d');

    w = window.innerWidth;
    // h = $('body').height();
 h = window.innerHeight
    hi = window.innerHeight;

    canvas.width = w;
    canvas.height = $('body').height();

    var mousex = -10000;
    var mousey = -10000;

    cntr = 0;

    currentColor = Math.random();

    var CircleArr = new Array();

    var reset = function () {
        CircleArr = new Array();
        CircleArr[0] = {
            x: w / 2,
            y: h,
            s: h / 100,
            color: hslToRgb(currentColor, 1, .5)
        };
    }

    var update = function (modifier) {
        // MOVEMENT CODE
        var movConst = 100;

        if (cntr++ % 1 == 0) {
            createCircle();
        }

        for (var circle in CircleArr) {
            circle = CircleArr[circle];
            circle.x += Math.random() * 10 - 5;
            circle.y -= Math.random() * 10;
        }

        while (CircleArr.length > 2 && (CircleArr[0].x + CircleArr[0].s > w || CircleArr[0].x + CircleArr[0].s < 0 || CircleArr[0].y + CircleArr[0].s > h || CircleArr[0].y + CircleArr[0].s < 0)) {
            CircleArr.shift();

        }
    };

    function createCircle() {
        currentColor += Math.random();

        tmp = CircleArr[CircleArr.length - 1];

        CircleArr[CircleArr.length] = {
            x: mousex,
            y: mousey,
            s: Math.random() * h / 100,
            color: hslToRgb(currentColor % 1.00, 1, .5)
        };
    }

    var render = function () {
        // wipe the canvas
        ctx.fillStyle = "#4BF";
        ctx.fillRect(0, 0, 10000, 100000);

        // clear
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // draw the data
        for (var circle in CircleArr) {
            current = CircleArr[circle];
            drawCircle(ctx, current.color, current.x, current.y, current.s, 0, "#ffffff", 3);
        }

    };

    function drawCircle(ctx, fillColor, x, y, radius, strokeWidth, strokeColor, hi) {
        /*ctx.fillStyle = colorToHex("rgb("+fillColor[0].toFixed(0)+","+fillColor[1].toFixed(0)+","+fillColor[2].toFixed(0)+")");*/
        // ctx.fillStyle = colorToHex("#EEE");
        ctx.fillStyle = "rgba(255,255,255,0.5)";

        ctx.beginPath();
        ctx.arc(x, y, radius / hi, 0, Math.PI * 2, false);
        ctx.closePath();
        if (strokeWidth != 0) {
            ctx.lineWidth = strokeWidth;
            ctx.strokeStyle = strokeColor;
            ctx.stroke();
        }
        ctx.fill();
    }

    var main = function () {
        var now = Date.now();
        var delta = now - then;

        update(delta / 1000);
        render();

        then = now;
    };

    reset();
    var then = Date.now();
    setInterval(main, 20);

    // onresize
    $(window).resize(function () {
        w = document.body.clientWidth;
        h = $('body').height();
        canvas.height = h;
        canvas.width = w;
    });


    /* UTILITY FUNCTIONS */

    function hslToRgb(h, s, l) {
        var r, g, b;

        if (s == 0) {
            r = g = b = l; // achromatic
        } else {
            function hue2rgb(p, q, t) {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1 / 6) return p + (q - p) * 6 * t;
                if (t < 1 / 2) return q;
                if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                return p;
            }

            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
        }

        return [r * 255, g * 255, b * 255];
    }

    function colorToHex(color) {
        if (color.substr(0, 1) === '#') {
            return color;
        }
        var digits = /(.*?)rgb\((\d+),(\d+),(\d+)\)/.exec(color);

        var red = parseInt(digits[2]);
        var green = parseInt(digits[3]);
        var blue = parseInt(digits[4]);

        var rgb = blue | (green << 8) | (red << 16);
        return digits[1] + '#' + rgb.toString(16);
    };

    document.onmousemove = getMouseCoordinates;
    document.onclick = reset;

    function getMouseCoordinates(event) {
        ev = event || window.event;
        mousex = ev.pageX;
        mousey = ev.pageY;
        createCircle();
    }
}).call(this);