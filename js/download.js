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
        a = document.createElement("a");
        a.href = canvas.toDataURL("image/png");
        a.setAttribute("download", "image.png");
        a.click();
    }
    image.src = "data:image/svg+xml;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(svgData)));
}

function downloadSVG() {
    var svg = document.getElementById("img");
    var svgData = new XMLSerializer().serializeToString(svg);
    a = document.createElement("a");
    a.href = "data:image/svg+xml;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(svgData)));
    a.setAttribute("download", "image.svg");
    a.click();
}