let menuOpen = false;

$(".nav-toggle").click(() => {
    $(".nav-items").toggleClass("nav-toggle-show");
    menuOpen = !menuOpen;
    if(menuOpen) {
        $(".nav-toggle img").prop("src", "images/icon-close.svg");
    }
    else {
        $(".nav-toggle img").prop("src", "images/icon-hamburger.svg");
    }
})