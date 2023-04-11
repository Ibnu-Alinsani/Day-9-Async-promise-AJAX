let hamburgerIsOpen = false;

function hamburger() {
    const hamburger = document.querySelector('.hamburger-menu');

    if (!hamburgerIsOpen) {
        hamburger.style.display = 'flex';
        hamburgerIsOpen = true;
    } else {
        hamburger.style.display = 'none'
        hamburgerIsOpen = false;
    }
}