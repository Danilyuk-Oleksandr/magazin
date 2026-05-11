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

function showToast() {

    toast.classList.add("toast-show");

    setTimeout(() => {

        toast.classList.remove("toast-show");

    }, 2000);

}

console.log("CyberTech Store Loaded");