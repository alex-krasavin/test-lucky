"use strict"

window.addEventListener("DOMContentLoaded",() => {
    setTimeout(initAnimate,3000);
    initMenu();
    validateSearch();
});

function initAnimate () {
    const countryFlags = document.querySelectorAll(".ellipse-country");
    countryFlags.forEach(elem => {
        elem.classList.add("start")
    })
}

function initMenu () {
    const btnMenu = document.querySelector(".mob-menu__button");
    const mobMenu = document.querySelector(".mob-menu");

    const toggleActiveClassMenu = () => {
        btnMenu.classList.toggle("active-menu");
        mobMenu.classList.toggle("active");
    }

    btnMenu.addEventListener("click",() => {
        toggleActiveClassMenu();
    })

    mobMenu.addEventListener("click",(e) => {
        if(e.target.classList.contains("nav__link")) {
            toggleActiveClassMenu();
        }
    })
}

function validateSearch () {
    const inputSearch = document.querySelector("#search");
    const search = document.querySelector(".hero__search");
    
    inputSearch.addEventListener("input",() => {
        const value = inputSearch.value.replace(/[!,@,#,$,%,^,&,*,()]/g,"");
        inputSearch.value = value;

        if(inputSearch.value.length > 12) {
            inputSearch.value = inputSearch.value.substring(0,12);
        }

        if(inputSearch.value.length < 4 && inputSearch.value.length !== 0) {
            search.classList.add("no-validate")
        }else {
            search.classList.remove("no-validate")
        }
    })
}

