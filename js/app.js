AOS.init();

/* Hero Swiper */

const heroSwiper = new Swiper(".heroSwiper", {

    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    autoplay: {
        delay: 4000,
    },

});

/* Reviews Swiper */

const reviewsSwiper = new Swiper(".reviewsSwiper", {

    loop: true,

    spaceBetween: 30,

    autoplay: {
        delay: 3000,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {

        0: {
            slidesPerView: 1,
        },

        768: {
            slidesPerView: 2,
        },

        1200: {
            slidesPerView: 3,
        },

    },

});

/* Cart Counter */

const cartButtons = document.querySelectorAll(".product-btn");

const cartCount = document.getElementById("cart-count");

const toast = document.getElementById("toast");

let count = 0;

cartButtons.forEach(button => {

    button.addEventListener("click", () => {

        count++;

        cartCount.textContent = count;

        showToast();

    });

});

/* Toast Function */

function showToast() {

    toast.classList.add("toast-show");

    setTimeout(() => {

        toast.classList.remove("toast-show");

    }, 2000);

}

console.log("CyberTech Store Loaded");