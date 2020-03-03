function changeTomachi(e) {
    document.getElementById(e.dataset.pathid).style.fill = e.value;
}

function reset() {
    for (let colbutton of document.getElementsByClassName("color_buttons")) {
        colbutton.value = colbutton.dataset.defaultval;
        changeTomachi(colbutton);
    }
}