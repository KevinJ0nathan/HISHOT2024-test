var lastScrollTop = 0;

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var navbar = document.getElementById("navbar");
    var navbarHeight = navbar.offsetHeight;

    if (scrollPosition > 50) {
        navbar.style.backgroundColor = 'black';
    } else {
        navbar.style.backgroundColor = 'transparent';
    }

    var scrollDirection = scrollPosition > lastScrollTop ? 'down' : 'up';
    lastScrollTop = scrollPosition <= 0 ? 0 : scrollPosition; 

    if (scrollDirection === "down") {
        navbar.style.transition = 'transform 0.5s';
        navbar.style.transform = 'translateY(-' + navbarHeight + 'px)';
    } else {
        navbar.style.transition = 'transform 0.5s';
        navbar.style.transform = 'translateY(0)';
    }
});


document.getElementById('navbar-toggler').addEventListener('click', function() {
    document.getElementById('navbar').classList.toggle('collapsed-menu');
});