const burger = document.querySelector('.burger-menu');
const openIcon = document.getElementById('openIcon');
const closeIcon = document.getElementById('closeIcon');
const navBar = document.querySelector('.nav-bar');

burger.addEventListener('click', () => {
    navBar.classList.toggle('active');
    openIcon.style.display = navBar.classList.contains('active') ? 'none' : 'inline-block';
    closeIcon.style.display = navBar.classList.contains('active') ? 'inline-block' : 'none';
});




