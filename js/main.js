
"use strict";

//Hämta menyknapparna.
let openBtn = document.getElementById("open-menu");
let closeBtn = document.getElementById("close-menu");

//Addera händelselyssnare till båda knapparna.
openBtn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);

//Funktion för klick på menyknapparna. 
function toggleMenu() {

    let navMenuEl = document.getElementById("nav-menu"); //Hämtar in menyn när den är utfälld.
    let style = window.getComputedStyle(navMenuEl); //Hämtar css för menyn. 


    //Kollar om navigering är synlig eller inte med display och ändrar därefter. 
    if (style.display === "none") {
        navMenuEl.style.display = "block";
    } else {
        navMenuEl.style.display = "none";
    }
}