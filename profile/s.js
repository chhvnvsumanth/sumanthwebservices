// menu icon bar
let menubar = document.querySelector('#menu-icon');
let nav = document.querySelector('.navbar');
menubar.onclick = () =>{
    menubar.classList.toggle('bx-x');
    nav.classList.toggle('active');

};

let  sections = document.querySelectorAll('section');
let  navLinks = document.querySelectorAll('header nav a');

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


// sticky navbar
window.onscroll = () => {
    // scroll section active link
let  sections = document.querySelectorAll('section');
let  navLinks = document.querySelectorAll('header nav a');

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
let header = document.querySelector(".header");
header.classList.toggle("sticky", window.scrollY > 100);

menubar.classList.remove('bx-x');
nav.classList.remove('active')
};


let darkmode = document.querySelector('#darkmode-icon');
darkmode.onclick = () =>{
    darkmode.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200 
});
ScrollReveal().reveal('.home-contant, .heading', { delay: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, content form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contant h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-contant h3, .home-contant p, .about-contant', { origin: 'right' });
