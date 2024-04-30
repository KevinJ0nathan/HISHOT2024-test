var lastScrollTop = 0;

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;

    var navbar = document.getElementById("navbar")


    if (scrollPosition > 100) {
        navbar.style.backgroundColor = 'black';
    } else {
        navbar.style.backgroundColor = 'transparent';
    }


     var scrollDirection = scrollPosition > lastScrollTop ? 'down' : 'up';
     lastScrollTop = scrollPosition <= 0 ? 0 : scrollPosition; 

     if (scrollDirection === "down") {
        navbar.style.transition = 'opacity 0.5s';
        navbar.style.opacity = '0';
        navbar.style.pointerEvents = 'none';
    } else {
        navbar.style.transition = 'opacity 0.5s';
        navbar.style.opacity = '1';
        navbar.style.pointerEvents = 'auto';
    }
});

document.getElementById('navbar-toggler').addEventListener('click', function() {
    document.getElementById('navbar').classList.toggle('collapsed-menu');
});