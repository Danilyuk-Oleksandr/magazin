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
            "https://assets3.razerzone.com/LfJACJA3KA3Qsxuo_tWznTE_OkQ=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fh25%2Fhdf%2F10045163929630%2F240510-BW-V4-Pro-White-500x500.png",
        badge: "NEW"
    },

    {
        id: 2,
        title: "Gaming Headset",
        category: "headset",
        price: 89,
        image:
            "https://resource.logitechg.com/w_416,h_312,ar_4:3,c_pad,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/astro/en/products/a10-gen-2/pdp-gallery-a10-lilac-02.png",
        badge: "SALE"
    },

    {
        id: 3,
        title: "UltraWide Monitor",
        category: "monitor",
        price: 399,
        image:
            "https://dlcdnwebimgs.asus.com/gain/2CE57476-66B2-4154-8970-F7F201683F19/w717/h525/fwebp/w273"
    },

    {
        id: 4,
        title: "RGB Gaming Mouse",
        category: "mouse",
        price: 59,
        image:
            "https://assets3.razerzone.com/IGLejpy9uJjP2M8FsPZTU6rZ-Jg=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fh5a%2Fh1c%2F9821720576030%2Fbasilisk-v3-pro-35k-500x500.png",
        badge: "HOT"
    },

    {
        id: 5,
        title: "Gaming Chair",
        category: "chair",
        price: 249,
        image:
            "https://assets3.razerzone.com/Gvby_QeZpl2GWaHhqlKcxCUvoE4=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fh23%2Fh46%2F10003777290270%2Fiskur-v2-x-newgen-blackgreen-500x500.png"
    },

    {
        id: 6,
        title: "Gaming Laptop",
        category: "laptop",
        price: 1499,
        image:
            "https://assets3.razerzone.com/buDySUbJpzLXprNWkAEoV5N8U3Y=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fhc0%2Fh35%2F9917794517022%2Fblade-18-k11-black-2-500x500.png",
        badge: "SALE"
    },

    {
        id: 7,
        title: "RGB Mini Keyboard",
        category: "keyboard",
        price: 99,
        image:
            "https://assets3.razerzone.com/UiecZnWkVhT-O7pRtym22hoXFzg=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fh96%2Fh06%2F10061741654046%2Fhuntsman-v3-tkl-8khz-500x500.png"
    },

    {
        id: 8,
        title: "Wireless Headset",
        category: "headset",
        price: 119,
        image:
            "https://resource.logitechg.com/w_416,h_312,ar_4:3,c_pad,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/audio/g735-wireless-headset/gallery/2025/g735-front-angle-gallery-4.png"
    },

    {
        id: 9,
        title: "4K Gaming Monitor",
        category: "monitor",
        price: 599,
        image:
            "https://dlcdnwebimgs.asus.com/gain/755DDBA5-BD42-4E9F-8969-B5319AA6813C/w717/h525/fwebp"
    },

    {
        id: 10,
        title: "Cyber Mouse Pro",
        category: "mouse",
        price: 79,
        image:
            "https://resource.logitechg.com/w_416,h_312,ar_4:3,c_pad,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/pro-x2-superstrike-pdp/2026/pro-x2-superstrike-profile-angle-gallery-4.png",
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

const toast =
    document.getElementById(
        "toast"
    );

const floatingCart =
    document.getElementById(
        "floatingCart"
    );

const floatingCartCount =
    document.getElementById(
        "floatingCartCount"
    );

/* =========================
   STATE
========================= */

let cart =
    JSON.parse(
        localStorage.getItem("cart")
    ) || [];

let currentFilter = "all";

let searchValue = "";

let wishlist =
    JSON.parse(
        localStorage.getItem(
            "wishlist"
        )
    ) || [];

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

    <div class="col-md-6 col-xl-4">

        <div
            class="product-card"
            onclick="
                window.location.href=
                'product.html?id=${product.id}'
            "
        >

            <div class="product-image-wrapper">

                <button
                    class="wishlist-btn
                    ${wishlist.includes(product.id)
                ? "active"
                : ""
            }"
                    data-id="${product.id}"
                >
                    ♡
                </button>

                ${product.badge
                ? `
                        <span class="product-badge">
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

            </div>

            <div class="product-content">

                <span class="product-category">

                    ${product.category}

                </span>

                <h3>

                    ${product.title}

                </h3>

                <div class="product-bottom">

                    <p class="price">

                        $${product.price}

                    </p>

                    <button
                        class="product-btn"
                        data-id="${product.id}"
                    >

                        Add

                    </button>

                </div>

            </div>

        </div>

    </div>

`;
    });

    initCartButtons();

    initWishlistButtons();
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
            event => {

                event.stopPropagation();

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

function initWishlistButtons() {

    const wishlistButtons =
        document.querySelectorAll(
            ".wishlist-btn"
        );

    wishlistButtons.forEach(button => {

        button.addEventListener(
            "click",
            event => {

                event.stopPropagation();

                const id =
                    Number(
                        button.dataset.id
                    );

                if (
                    wishlist.includes(id)
                ) {

                    wishlist =
                        wishlist.filter(
                            item =>
                                item !== id
                        );

                    button.classList.remove(
                        "active"
                    );

                } else {

                    wishlist.push(id);

                    button.classList.add(
                        "active"
                    );

                }

                localStorage.setItem(
                    "wishlist",
                    JSON.stringify(
                        wishlist
                    )
                );

            }
        );

    });

}

function showToast(message) {

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove(
            "show"
        );

    }, 2200);

}

function addToCart(product) {

    cart.push(product);

    showToast(
        `${product.title} added`
    );

    updateCart();

}

function updateCart() {

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    cartCount.textContent =
        cart.length;

    floatingCartCount.textContent =
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

floatingCart.addEventListener(
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
   HERO SWIPER
========================= */

new Swiper(".heroSwiper", {

    loop: true,

    speed: 1000,

    autoplay: {

        delay: 4500,

    },

    pagination: {

        el: ".hero-pagination",

        clickable: true,

    },

    navigation: {

        nextEl: ".hero-next",

        prevEl: ".hero-prev",

    },

});

/* =========================
   REVIEWS SWIPER
========================= */

new Swiper(".reviewsSwiper", {

    loop: true,

    spaceBetween: 30,

    autoplay: {
        delay: 3000,
    },

    pagination: {

        el: ".reviews-pagination",

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

updateCart();