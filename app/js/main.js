window.addEventListener("DOMContentLoaded",() => {
    setTimeout(initAnimate,3000);
});

function initAnimate () {
    const countryFlags = document.querySelectorAll(".ellipse-country");
    countryFlags.forEach(elem => {
        elem.classList.add("start")
    })
}


