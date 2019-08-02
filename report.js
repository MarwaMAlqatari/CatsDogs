document.getElementById("comment").onkeyup(adjust_textarea(this));

//auto expand textarea
function adjust_textarea(h) {
    h.style.height = "20px";
    h.style.height = (h.scrollHeight)+"px";
}
