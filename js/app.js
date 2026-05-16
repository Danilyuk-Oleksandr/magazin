/* =========================
   PRODUCTS
========================= */

const products = [

    {
        id: 1,
        title: "Mechanical Keyboard",
        category: "keyboard",
        price: 129,
        image:
            "https://images.unsplash.com/photo-1613141411244-0e4ac259d217?q=80&w=1000",
        badge: "NEW"
    },

    {
        id: 2,
        title: "Gaming Headset",
        category: "headset",
        price: 89,
        image:
            "https://images.unsplash.com/photo-1585298723682-7115561c51b7?q=80&w=1000",
        badge: "SALE"
    },

    {
        id: 3,
        title: "UltraWide Monitor",
        category: "monitor",
        price: 399,
        image:
            "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=1000"
    },

    {
        id: 4,
        title: "RGB Gaming Mouse",
        category: "mouse",
        price: 59,
        image:
            "https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=1000",
        badge: "HOT"
    },

    {
        id: 5,
        title: "Gaming Chair",
        category: "chair",
        price: 249,
        image:
            "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1000"
    },

    {
        id: 6,
        title: "Gaming Laptop",
        category: "laptop",
        price: 1499,
        image:
            "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1000",
        badge: "SALE"
    },

    {
        id: 7,
        title: "RGB Mini Keyboard",
        category: "keyboard",
        price: 99,
        image:
            "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=1000"
    },

    {
        id: 8,
        title: "Wireless Headset",
        category: "headset",
        price: 119,
        image:
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000"
    },

    {
        id: 9,
        title: "4K Gaming Monitor",
        category: "monitor",
        price: 599,
        image:
            "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=1000"
    },

    {
        id: 10,
        title: "Cyber Mouse Pro",
        category: "mouse",
        price: 79,
        image:
            "https://images.unsplash.com/photo-1563297007-0686b7003af7?q=80&w=1000",
        badge: "-20%"
    }

];

/* =========================
   ELEMENTS
========================= */

const productsContainer =
    document.getElementById(
        "productsContainer"
    );

const searchInput =
    document.getElementById(
        "searchInput"
    );

const filterButtons =
    document.querySelectorAll(
        ".filter-btn"
    );

const cartCount =
    document.getElementById(
        "cart-count"
    );

const cartItems =
    document.getElementById(
        "cartItems"
    );

const cartTotal =
    document.getElementById(
        "cartTotal"
    );

const cartSidebar =
    document.getElementById(
        "cartSidebar"
    );

const cartOverlay =
    document.getElementById(
        "cartOverlay"
    );

const closeCart =
    document.getElementById(
        "closeCart"
    );

const cartLink =
    document.querySelector(
        ".cart-link"
    );

const loader =
    document.getElementById(
        "loader"
    );

/* =========================
   STATE
========================= */

let cart = [];

let currentFilter = "all";

let searchValue = "";

/* =========================
   RENDER PRODUCTS
========================= */

function renderProducts() {

    let filteredProducts =
        products.filter(product => {

            const matchesSearch =
                product.title
                    .toLowerCase()
                    .includes(
                        searchValue
                    );

            const matchesFilter =
                currentFilter === "all"
                ||
                product.category ===
                currentFilter;

            return (
                matchesSearch &&
                matchesFilter
            );

        });

    productsContainer.innerHTML = "";

    filteredProducts.forEach(product => {

        productsContainer.innerHTML += `

            <div class="col-md-6 col-lg-4">

                <div
                    class="product-card ui-card"
                >

                    <button
                        class="wishlist-btn"
                    >
                        ♡
                    </button>

                    ${product.badge
                        ? `
                            <span
                                class="product-badge"
                            >
                                ${product.badge}
                            </span>
                          `
                        : ""
                    }

                    <img
                        src="${product.image}"
                        class="product-image"
                        alt="${product.title}"
                    >

                    <h3>
                        ${product.title}
                    </h3>

                    <p class="price">
                        $${product.price}
                    </p>

                    <button
                        class="btn product-btn"
                        data-id="${product.id}"
                    >
                        Add to Cart
                    </button>

                </div>

            </div>

        `;

    });

    initCartButtons();

}

/* =========================
   SEARCH
========================= */

if (searchInput) {

    searchInput.addEventListener(
        "input",
        event => {

            searchValue =
                event.target.value
                    .toLowerCase();

            renderProducts();

        }
    );

}

/* =========================
   FILTERS
========================= */

filterButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            filterButtons.forEach(btn => {

                btn.classList.remove(
                    "active"
                );

            });

            button.classList.add(
                "active"
            );

            currentFilter =
                button.dataset.filter;

            renderProducts();

        }
    );

});

/* =========================
   CART
========================= */

function initCartButtons() {

    const buttons =
        document.querySelectorAll(
            ".product-btn"
        );

    buttons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const id =
                    Number(
                        button.dataset.id
                    );

                const product =
                    products.find(
                        item =>
                            item.id === id
                    );

                addToCart(product);

            }
        );

    });

}

function addToCart(product) {

    cart.push(product);

    updateCart();

}

function updateCart() {

    cartCount.textContent =
        cart.length;

    cartItems.innerHTML = "";

    if (!cart.length) {

        cartItems.innerHTML = `

            <p class="empty-cart">

                Your cart is empty

            </p>

        `;

        cartTotal.textContent =
            "$0";

        return;

    }

    let total = 0;

    cart.forEach((product, index) => {

        total += product.price;

        cartItems.innerHTML += `

            <div class="cart-item ui-card">

                <img
                    src="${product.image}"
                    alt="${product.title}"
                >

                <div>

                    <h4>
                        ${product.title}
                    </h4>

                    <p>
                        $${product.price}
                    </p>

                    <button
                        class="cart-remove"
                        data-index="${index}"
                    >
                        Remove
                    </button>

                </div>

            </div>

        `;

    });

    cartTotal.textContent =
        "$" + total;

    initRemoveButtons();

}

function initRemoveButtons() {

    const removeButtons =
        document.querySelectorAll(
            ".cart-remove"
        );

    removeButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const index =
                    Number(
                        button.dataset.index
                    );

                cart.splice(index, 1);

                updateCart();

            }
        );

    });

}

/* =========================
   CART SIDEBAR
========================= */

if (cartLink) {

    cartLink.addEventListener(
        "click",
        () => {

            cartSidebar.classList.add(
                "show"
            );

            cartOverlay.classList.add(
                "show"
            );

        }
    );

}

function closeCartSidebar() {

    cartSidebar.classList.remove(
        "show"
    );

    cartOverlay.classList.remove(
        "show"
    );

}

if (closeCart) {

    closeCart.addEventListener(
        "click",
        closeCartSidebar
    );

}

if (cartOverlay) {

    cartOverlay.addEventListener(
        "click",
        closeCartSidebar
    );

}

/* =========================
   REVIEWS SWIPER
========================= */

new Swiper(".reviewsSwiper", {

    loop: true,

    spaceBetween: 30,

    autoplay: {
        delay: 3000,
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

/* =========================
   LOADER
========================= */

window.addEventListener(
    "load",
    () => {

        setTimeout(() => {

            loader.classList.add(
                "hide"
            );

        }, 600);

    }
);

/* =========================
   INIT
========================= */

renderProducts();

console.log(
    "CyberTech Loaded"
);