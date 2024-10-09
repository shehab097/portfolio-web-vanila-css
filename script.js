let count = 0;
function menuToggle() {
    document.querySelector(".nav-menu").classList.toggle("show-hide");
    count++;
    if (count % 2 != 0) {
        document.querySelector(".icon img").src = "/svg/close menu.svg";
    }
    else {
        document.querySelector(".icon img").src = "/svg/menu icon.svg";
    }
}

//jump to top
let mybutton = document.getElementById("jump-to-top-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}