boot();

function boot() {
    reset();

    for (let colbutton of document.getElementsByClassName("color_buttons")) {
        colbutton.addEventListener("keyup", function () {
            changeTomachi(colbutton)
        });
        colbutton.addEventListener("change", function () {
            changeTomachi(colbutton)
        });
    }
    document.getElementById("resetButton").addEventListener("click", function () {
        reset()
    });
    document.getElementById("downloadButton").addEventListener("click", function () {
        downloadPNG()
    });
}

function changeTomachi(e) {
    document.getElementById(e.dataset.pathid).style.fill = e.value;
}

function reset() {
    for (let colbutton of document.getElementsByClassName("color_buttons")) {
        colbutton.value = colbutton.dataset.defaultval;
        changeTomachi(colbutton);
    }
}

function downloadPNG() {
    var svg = document.getElementById("img");
    var svgData = new XMLSerializer().serializeToString(svg);
    var canvas = document.createElement("canvas");
    canvas.width = svg.width.baseVal.value;
    canvas.height = svg.height.baseVal.value;

    var ctx = canvas.getContext("2d");
    var image = new Image;
    image.onload = function () {
        ctx.drawImage(image, 0, 0);
        var a = document.createElement("a");
        a.href = canvas.toDataURL("image/png");
        a.setAttribute("download", "image.png");
        a.click();
    }
    image.src = "data:image/svg+xml;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(svgData)));
}