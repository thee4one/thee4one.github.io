function h(e) {
    e.preventDefault(), window.removeEventListener("touchstart", h, null), window.removeEventListener("click", h, null);
    const t = new Audio("song.mp3");
    document.querySelector(".before").remove(), document.querySelector(".after").style.display = "block", t.play()
}
window.addEventListener("touchstart", h), window.addEventListener("click", h);