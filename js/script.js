const btnMobile = document.getElementById('mobile-btn');

function toggleMenu() {
    const nav = document.querySelector('.navbar-nav');
    nav.classList.toggle('active');

    let header = document.querySelector('header');
    if (nav.classList.contains('active')) {
        header.style.background = 'black';
    } else {
        header.style.background = "url('../images/desktop/image-hero.jpg') no-repeat center";
    }
}

btnMobile.addEventListener('click', toggleMenu);