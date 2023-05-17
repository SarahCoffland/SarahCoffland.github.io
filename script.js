const navBarEl = document.querySelector('.navBar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        navBarEl.classList.add('navBar-scrolled');
    } else if (window.scrollY <= 10) {
        navBarEl.classList.remove('navBar-scrolled');
    }
});