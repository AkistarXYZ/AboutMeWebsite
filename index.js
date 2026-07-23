const panels = document.querySelectorAll(".panel");

panels.forEach(panel => {
    panel.addEventListener("click", () => {

        const left = document.querySelector(".left")
        const center =  document.querySelector(".center")
        const right = document.querySelector(".right")

        if (panel.classList.contains("left")) {
            left.classList.replace("left", "center");
            center.classList.replace("center", "right");
            right.classList.replace("right", "left");
        }
        if (panel.classList.contains("right")) {
            left.classList.replace("left", "right");
            center.classList.replace("center", "left");
            right.classList.replace("right", "center");
        }
    });
});

const YTButton = document.getElementById("YTBtn");
const GamesButton = document.getElementById("GamesBtn");

YTButton.addEventListener("click", (event) => {
    event.stopPropagation();

    if (!YTButton.closest(".panel").classList.contains("center")) {
        return;
    }

    window.open("https://www.youtube.com/@AkistarXDev", "_blank");
});

GamesButton.addEventListener("click", (event) => {
    event.stopPropagation();

    if (!GamesButton.closest(".panel").classList.contains("center")) {
        return;
    }

    window.open("index2.html", "_self");
});

