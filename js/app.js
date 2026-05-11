const swiper = new Swiper(".heroSwiper", {
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    autoplay: {
        delay: 4000,
    },
});

console.log("CyberTech Store Loaded");