// // SearchForm Section code
// let searchForm = document.querySelector('.search-form');
// const bgAnimation = document.getElementById('bgAnimation');

// const numberOfColorBoxes = 400;

// for (let i = 0; i < numberOfColorBoxes; i++) {
//     const colorBox = document.createElement('div');
//     colorBox.classList.add('colorbox');
//     bgAnimation.append(colorBox);
// }

const toggleSearchForm = () => searchForm.classList.toggle('active');
const removeActiveClass = () => searchForm.classList.remove('active');

document.getElementById('search-btn').onclick = toggleSearchForm;
window.onscroll = removeActiveClass;

document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        const navbarBottom = document.querySelector('.navbar-bottom');
        const scrollUpBtn = document.querySelector('.scroll-up-btn');

        // Navbar-bottom scrolling
        navbarBottom.classList.toggle('sticky', this.scrollY > 5);

        // Scrolling Button Btn
        scrollUpBtn.classList.toggle('show', this.scrollY > 500);
    });

    // Scroll up script
    document.querySelector('.scroll-up-btn').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Owl Carousel
    const owlCarousel = document.querySelector('.owl-carousel');
    if (owlCarousel) {
        new OwlCarousel(owlCarousel, {
            margin: 5,
            navigation: true,
            loop: true,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,

            responsive: {
                0: { items: 1, nav: false },
                600: { items: 2, nav: false },
                1000: { items: 3, nav: false },
            },
        });
    }
});
