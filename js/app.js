AOS.init();

/* Hero Swiper */

const heroSwiper = new Swiper(".heroSwiper", {

    loop: true,

    navigation: {
        nextEl: ".hero-next",
        prevEl: ".hero-prev",
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

/* Search System */

const searchInput = document.getElementById("searchInput");

const productCards = document.querySelectorAll(".product-card");

searchInput.addEventListener("input", () => {

    const value = searchInput.value.toLowerCase();

    productCards.forEach(card => {

        const productName =
            card.querySelector("h3")
                .textContent
                .toLowerCase();

        if (productName.includes(value)) {

            card.parentElement.style.display = "block";

        } else {

            card.parentElement.style.display = "none";

        }

    });

});

/* Product Filters */

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        const filter = button.dataset.filter;

        productCards.forEach(card => {

            if (
                filter === "all" ||
                card.dataset.category === filter
            ) {

                card.parentElement.style.display = "block";

            } else {

                card.parentElement.style.display = "none";

            }

        });

    });

});

/* Product Modal */

const modal = new bootstrap.Modal(
    document.getElementById("productModal")
);

const modalImage =
    document.getElementById("modalImage");

const modalTitle =
    document.getElementById("modalTitle");

const modalPrice =
    document.getElementById("modalPrice");

productCards.forEach(card => {

    card.addEventListener("click", event => {

        if (
            event.target.classList.contains("product-btn")
        ) return;

        modalImage.src = card.dataset.image;

        modalTitle.textContent =
            card.dataset.title;

        modalPrice.textContent =
            card.dataset.price;

        modal.show();

    });

});

/* Wishlist System */

const wishlistButtons =
    document.querySelectorAll(".wishlist-btn");

const wishlistCount =
    document.getElementById("wishlist-count");

let wishlist = 0;

wishlistButtons.forEach(button => {

    button.addEventListener("click", event => {

        event.stopPropagation();

        button.classList.toggle("active");

        if (button.classList.contains("active")) {

            button.textContent = "♥";

            wishlist++;

        } else {

            button.textContent = "♡";

            wishlist--;

        }

        wishlistCount.textContent = wishlist;

        localStorage.setItem(
            "wishlistCount",
            wishlist
        );

    });

});

/* Load Wishlist */

const savedWishlist =
    localStorage.getItem("wishlistCount");

if (savedWishlist) {

    wishlist = savedWishlist;

    wishlistCount.textContent = wishlist;

}

/* Cart Sidebar */

const cartSidebar =
    document.getElementById("cartSidebar");

const cartOverlay =
    document.getElementById("cartOverlay");

const closeCart =
    document.getElementById("closeCart");

const cartLink =
    document.querySelector(".cart-link");

const cartItems =
    document.getElementById("cartItems");

const cartTotal =
    document.getElementById("cartTotal");

let total = 0;

/* Open Cart */

cartLink.addEventListener("click", event => {

    event.preventDefault();

    cartSidebar.classList.add("show");

    cartOverlay.classList.add("show");

});

/* Close Cart */

function closeCartSidebar() {

    cartSidebar.classList.remove("show");

    cartOverlay.classList.remove("show");

}

closeCart.addEventListener(
    "click",
    closeCartSidebar
);

cartOverlay.addEventListener(
    "click",
    closeCartSidebar
);

/* Add Products */

cartButtons.forEach(button => {

    button.addEventListener("click", event => {

        const card =
            event.target.closest(".product-card");

        const title =
            card.dataset.title;

        const price =
            card.dataset.price;

        const image =
            card.dataset.image;

        const numericPrice =
            Number(card.dataset.priceNumber);

        addToCart(
            title,
            price,
            image,
            numericPrice
        );

    });

});

function addToCart(
    title,
    price,
    image,
    numericPrice
) {

    const emptyCart =
        document.querySelector(".empty-cart");

    if (emptyCart) {

        emptyCart.remove();

    }

    const cartItem =
        document.createElement("div");

    cartItem.classList.add("cart-item");

    cartItem.innerHTML = `

        <img src="${image}" alt="${title}">

        <div class="cart-item-info">

            <h4>${title}</h4>

            <p>${price}</p>

            <button class="cart-remove">

                Remove

            </button>

        </div>

    `;

    cartItems.appendChild(cartItem);

    total += numericPrice;

    cartTotal.textContent =
        "$" + total;

    const removeButton =
        cartItem.querySelector(".cart-remove");

    removeButton.addEventListener(
        "click",
        () => {

            cartItem.remove();

            total -= numericPrice;

            cartTotal.textContent =
                "$" + total;

            if (!cartItems.children.length) {

                cartItems.innerHTML = `

                    <p class="empty-cart">

                        Your cart is empty

                    </p>

                `;
            }

        }
    );

}

console.log("CyberTech Store Loaded");

/* Theme Toggle */

const themeToggle =
    document.getElementById("themeToggle");

const body =
    document.body;

/* Load Theme */

if (localStorage.getItem("theme") === "light") {

    body.classList.add("light-theme");

    themeToggle.textContent = "☀️";

}

/* Toggle Theme */

themeToggle.addEventListener("click", () => {

    body.classList.toggle("light-theme");

    if (body.classList.contains("light-theme")) {

        localStorage.setItem("theme", "light");

        themeToggle.textContent = "☀️";

    } else {

        localStorage.setItem("theme", "dark");

        themeToggle.textContent = "🌙";

    }

});

/* Loader */

const loader =
    document.getElementById("loader");

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.classList.add("hide");

    }, 1200);

});

/* Scroll Progress */

const scrollProgress =
    document.getElementById("scrollProgress");

window.addEventListener("scroll", () => {

    const scrollTop =
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / scrollHeight) * 100;

    scrollProgress.style.width =
        progress + "%";

});

/* Back To Top */

const backToTop =
    document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});