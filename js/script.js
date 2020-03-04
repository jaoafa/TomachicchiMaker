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
    document.getElementById("downloadPNGButton").addEventListener("click", function () {
        downloadPNG()
    });
    document.getElementById("downloadSVGButton").addEventListener("click", function () {
        downloadSVG()
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