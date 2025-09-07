const burger = document.querySelector('.burger-menu');
const openIcon = document.getElementById('openIcon');
const closeIcon = document.getElementById('closeIcon');
const navBar = document.querySelector('.nav-bar');

burger.addEventListener('click', () => {
    navBar.classList.toggle('active');
    openIcon.style.display = navBar.classList.contains('active') ? 'none' : 'inline-block';
    closeIcon.style.display = navBar.classList.contains('active') ? 'inline-block' : 'none';
});
const animateBlocks = (selector, animationClass) => {
    const blocks = document.querySelectorAll(selector);

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(animationClass);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    blocks.forEach(block => {
        observer.observe(block);
    });
};

animateBlocks('.product-card', 'fade-in-up');
animateBlocks('.testimonial-card', 'scale-in');
animateBlocks('.blog-card', 'fade-in-left');


