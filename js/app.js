/* =========================
   SOUNDS
========================= */

const sounds = {

    addToCart:
        new Audio("sounds/add-to-cart.wav"),

    modalOpen:
        new Audio("sounds/modal-open.wav"),

    success:
        new Audio("sounds/success.wav"),

    cartOpen:
        new Audio("sounds/cart-open.wav"),

    hover:
        new Audio("sounds/hover.wav"),

    close:
        new Audio("sounds/close.wav"),

    quantity:
        new Audio("sounds/quantity.wav"),

    wishlist:
        new Audio("sounds/wishlist.wav"),

    remove:
        new Audio("sounds/remove.wav")
};

/* =========================
   PLAY SOUND
========================= */

function playSound(sound) {

    if (!sounds[sound]) return;

    sounds[sound].currentTime = 0;

    sounds[sound].volume = 0.35;

    sounds[sound].play();

}

/* =========================
   PC BUILDS
========================= */

const pcBuilds = [

    {

        id: 101,

        title:
            "Gaming PC 20K",

        category:
            "pc",

        price:
            500,

        image:
            "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1200",

        specs: [

            "Ryzen 5 3600",
            "RX 6600",
            "16GB DDR4",
            "512GB NVMe"

        ]
    },

    {

        id: 102,

        title:
            "Gaming PC 30K",

        category:
            "pc",

        price:
            750,

        image:
            "https://images.unsplash.com/photo-1593640495253-23196b27a87f?q=80&w=1200",

        specs: [

            "Ryzen 5 5600",
            "RTX 4060",
            "32GB RAM",
            "1TB SSD"

        ]
    },

    {

        id: 103,

        title:
            "Gaming PC 40K",

        category:
            "pc",

        price:
            1000,

        image:
            "https://images.unsplash.com/photo-1587831990711-23ca6441447b?q=80&w=1200",

        specs: [

            "Ryzen 7 7700",
            "RTX 4070",
            "32GB DDR5",
            "1TB Gen4"

        ]
    },

    {

        id: 104,

        title:
            "Gaming PC 60K",

        category:
            "pc",

        price:
            1500,

        image:
            "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=1200",

        specs: [

            "7800X3D",
            "4070 Ti Super",
            "32GB DDR5",
            "2TB SSD"

        ]
    },

    {

        id: 105,

        title:
            "Gaming PC 80K",

        category:
            "pc",

        price:
            2000,

        image:
            "https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?q=80&w=1200",

        specs: [

            "Ryzen 9 9950X",
            "RTX 4080 Super",
            "64GB DDR5",
            "4TB SSD"

        ]
    }

];

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
    },

    {
        id: 11,
        title: "Wireless Gaming Mouse",
        category: "mouse",
        price: 99,
        image:
            "https://resource.logitechg.com/w_544,h_466,ar_7:6,c_pad,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/g502x-corded/gallery/g502x-corded-gallery-1-white.png",
        badge: "NEW"
    },

    {
        id: 12,
        title: "White Gaming Keyboard",
        category: "keyboard",
        price: 149,
        image:
            "https://assets3.razerzone.com/dskwa_GYE7zZbDyP1FLFOZepovk=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fh37%2Fhda%2F9257514041374%2F211102-pro-type-ultra-500x500.png"
    },

    {
        id: 13,
        title: "Streaming Microphone",
        category: "microphone",
        price: 139,
        image:
            "https://resource.logitechg.com/w_416,h_312,ar_4:3,c_pad,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/streaming-gear/yeti-nano-usb-microphone/gallery/2025/yeti-nano-3qtr-front-left-angle-black-gallery-3.png",
        badge: "HOT"
    },

    {
        id: 14,
        title: "RGB Gaming Chair",
        category: "chair",
        price: 329,
        image:
            "https://dlcdnwebimgs.asus.com/gain/9B43A0DE-4AA1-4C94-B707-1987B28DEE3E/w382/fwebp"
    },

    {
        id: 15,
        title: "240Hz Gaming Monitor",
        category: "monitor",
        price: 699,
        image:
            "https://dlcdnwebimgs.asus.com/gain/EEE5E88C-D4DD-4563-A826-3C4E03531795/w717/h525/fwebp/w273",
        badge: "PRO"
    },

    {
        id: 16,
        title: "Studio Gaming Headset",
        category: "headset",
        price: 179,
        image:
            "https://resource.logitechg.com/w_416,h_312,ar_4:3,c_pad,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/g733/gallery/g733-lilac-gallery-2.png"
    },

    {
        id: 17,
        title: "Cyber Laptop RTX",
        category: "laptop",
        price: 1899,
        image: "https://dlcdnwebimgs.asus.com/gain/F0F8BC19-F9EA-4D71-9EE8-4BE054D99E14/w300/fwebp",
        badge: "RTX"
    },

    {
        id: 18,
        title: "Minimal White Mouse",
        category: "mouse",
        price: 69,
        image:
            "https://dlcdnwebimgs.asus.com/gain/FA05331B-7D49-466E-B208-8BAE5B90C64D/w300/fwebp"
    },

    {
        id: 19,
        title: "RGB Speaker Set",
        category: "speaker",
        price: 159,
        image:
            "https://assets3.razerzone.com/N4QBkmMn9tHXWNROzLj8F2gNAS4=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fhd9%2Fhf6%2F9522060492830%2Fleviathan-v2-pro-2-500x500.png"
    },

    {
        id: 20,
        title: "Compact Gaming Keyboard",
        category: "keyboard",
        price: 119,
        image:
            "https://dlcdnwebimgs.asus.com/gain/0634830A-5D8F-4A86-93C9-873D959E03AD/w300/fwebp"
    },

    {
        id: 21,
        title: "Cyber Monitor Pro",
        category: "monitor",
        price: 849,
        image:
            "https://dlcdnwebimgs.asus.com/gain/EBAC0720-7C2A-4CBE-8E6D-624127867D77/w717/h525/fwebp/w273",
        badge: "BEST"
    },

    {
        id: 22,
        title: "Pro Wireless Headset",
        category: "headset",
        price: 149,
        image:
            "https://assets3.razerzone.com/HXhTxOzsNH11j_gikX4lANpISko=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fh3b%2Fh1e%2F9821452435486%2Fkraken-v4-2-500x500.png"
    },

    {
        id: 23,
        title: "Premium RGB Chair",
        category: "chair",
        price: 379,
        image:
            "https://dlcdnwebimgs.asus.com/gain/B24413D5-6F1C-4832-9CCC-275DC5CB73AE/w717/h525/fwebp/w273"
    },

    {
        id: 24,
        title: "Streaming Mic White",
        category: "microphone",
        price: 129,
        image:
            "https://resource.logitechg.com/w_416,h_312,ar_4:3,c_pad,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/plp-microphones/pdp-yeti-gx-gaming-microphone/2025/gallery/yeti-gx-3qtr-front-angle-white-gallery-4.png"
    },

    {
        id: 25,
        title: "Gaming Setup Monitor",
        category: "monitor",
        price: 499,
        image:
            "https://dlcdnwebimgs.asus.com/gain/EA5F4487-87F4-47AC-B06F-EC1C95C0E59E/w717/h525/fwebp"
    },

    {
        id: 26,
        title: "Wireless Compact Keyboard",
        category: "keyboard",
        price: 139,
        image:
            "https://dlcdnwebimgs.asus.com/gain/0B522307-78BF-4F10-AA9B-9D9D6BC00C76/w717/h525/fwebp/w273"
    },

    {
        id: 27,
        title: "Gaming Sound Speakers",
        category: "speaker",
        price: 189,
        image:
            "https://assets3.razerzone.com/WuUGqs2eQg9N9Zy_mY_fDk8EsO0=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fh40%2Fh81%2F9522168987678%2Fnommo-v2-500x500.png",
        badge: "NEW"
    },

    {
        id: 28,
        title: "Cyber Gaming Laptop",
        category: "laptop",
        price: 2099,
        image:
            "https://assets3.razerzone.com/705Z1YGWMxhT83ggz1IpMDI3pJw=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fhbe%2Fh38%2F9917794451486%2Fblade-14-p11-black-2-500x500.png"
    },

    {
        id: 29,
        title: "Esports Gaming Mouse",
        category: "mouse",
        price: 109,
        image:
            "https://resource.logitechg.com/w_544,h_466,ar_7:6,c_pad,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/pro-x-superlight-2-dex/gallery/new-gallery-assets-2025/pro-x-superlight-2-dex-mouse-3qtr-high-back-angle-black-gallery-3-new.png"
    },

    {
        id: 30,
        title: "Cyber RGB Headset",
        category: "headset",
        price: 199,
        image:
            "https://dlcdnwebimgs.asus.com/gain/378A90DA-2DFF-414F-B8A2-57B7C411665F/w717/h525/fwebp/w273",
        badge: "LIMITED"
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

const loadMoreBtn =
    document.getElementById(
        "loadMoreBtn"
    );

/* =========================
   STATE
========================= */

let cart =
    JSON.parse(
        localStorage.getItem("cart")
    ) || [];

let currentFilter = "all";

let visibleProducts = 6;

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

    productsContainer.innerHTML = `

    <div class="col-md-6 col-xl-4">
        <div class="skeleton-card"></div>
    </div>

    <div class="col-md-6 col-xl-4">
        <div class="skeleton-card"></div>
    </div>

    <div class="col-md-6 col-xl-4">
        <div class="skeleton-card"></div>
    </div>

`;

    setTimeout(() => {

        productsContainer.innerHTML = "";

        filteredProducts
            .slice(0, visibleProducts)
            .forEach(product => {

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

    }, 500);
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
   REAL CART EXPERIENCE
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

                button.textContent =
                    "✓ Added";

                button.classList.add(
                    "added"
                );

                setTimeout(() => {

                    button.textContent =
                        "Add";

                    button.classList.remove(
                        "added"
                    );

                }, 1800);

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

    const existingProduct =
        cart.find(
            item =>
                item.id === product.id
        );

    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cart.push({

            ...product,

            quantity: 1

        });

    }

    playSound("addToCart");

    showToast(
        `${product.title} added`
    );

    cartCount.classList.add(
        "cart-bounce"
    );

    floatingCartCount.classList.add(
        "cart-bounce"
    );

    setTimeout(() => {

        cartCount.classList.remove(
            "cart-bounce"
        );

        floatingCartCount.classList.remove(
            "cart-bounce"
        );

    }, 450);

    updateCart();

}

function updateCart() {

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    const totalItems =
        cart.reduce(
            (sum, item) =>
                sum + item.quantity,
            0
        );

    cartCount.textContent =
        totalItems;

    floatingCartCount.textContent =
        totalItems;

    cartItems.innerHTML = "";

    if (!cart.length) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <h3>

                    Your cart is empty

                </h3>

                <p>

                    Add products to start shopping

                </p>

            </div>

        `;

        cartTotal.textContent =
            "$0";

        return;

    }

    let total = 0;

    cart.forEach(product => {

        total +=
            product.price *
            product.quantity;

        cartItems.innerHTML += `

            <div class="cart-item">

                <img
                    src="${product.image}"
                    alt="${product.title}"
                >

                <div class="cart-item-content">

                    <h4>

                        ${product.title}

                    </h4>

                    <div class="cart-item-price">

                        $${product.price}

                    </div>

                    <div class="cart-item-actions">

                        <button
                            class="cart-qty-btn"
                            onclick="
                                changeCartQty(
                                    ${product.id},
                                    -1
                                )
                            "
                        >

                            -

                        </button>

                        <span>

                            ${product.quantity}

                        </span>

                        <button
                            class="cart-qty-btn"
                            onclick="
                                changeCartQty(
                                    ${product.id},
                                    1
                                )
                            "
                        >

                            +

                        </button>

                        <button
                            class="remove-cart-item"
                            onclick="
                                removeCartItem(
                                    ${product.id}
                                )
                            "
                        >

                            Remove

                        </button>

                    </div>

                </div>

            </div>

        `;

    });

    cartTotal.textContent =
        "$" + total;

}

function changeCartQty(id, change) {

    const product =
        cart.find(
            item => item.id === id
        );

    if (!product) return;

    playSound("quantity");

    product.quantity += change;

    if (product.quantity <= 0) {

        removeCartItem(id);

        return;

    }

    updateCart();

}

function removeCartItem(id) {

    playSound("remove");

    cart =
        cart.filter(
            item => item.id !== id
        );

    updateCart();

}

/* =========================
   CART SIDEBAR
========================= */

if (cartLink) {

    cartLink.addEventListener(
        "click",
        () => {

            cartSidebar.classList.add(
                "show-cart"
            );

            cartOverlay.classList.add(
                "show-overlay"
            );

            playSound("cartOpen");

        }
    );

}

floatingCart?.addEventListener(
    "click",
    () => {

        cartSidebar.classList.add(
            "show-cart"
        );

        cartOverlay.classList.add(
            "show-overlay"
        );

        playSound("cartOpen");

    }
);

function closeCartSidebar() {

    cartSidebar.classList.remove(
        "show-cart"
    );

    cartOverlay.classList.remove(
        "show-overlay"
    );

}

closeCart?.addEventListener(
    "click",
    closeCartSidebar
);

cartOverlay?.addEventListener(
    "click",
    closeCartSidebar
);

function initWishlistButtons() {

    const wishlistButtons =
        document.querySelectorAll(
            ".wishlist-btn"
        );

    wishlistButtons.forEach(button => {

        button.addEventListener(
            "click",
            event => {

                playSound("wishlist");

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

                    playSound("success");

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

/* =========================
   PRELOAD SOUNDS
========================= */

document.addEventListener(
    "click",
    () => {

        Object.values(sounds).forEach(sound => {

            sound.load();

        });

    },
    { once: true }
);

/* =========================
   RENDER PC BUILDS
========================= */

const pcBuildsContainer =
    document.getElementById(
        "pcBuildsContainer"
    );

function renderPcBuilds() {

    if (!pcBuildsContainer) return;

    pcBuilds.forEach(build => {

        pcBuildsContainer.innerHTML += `

            <div class="col-lg-4">

                <div class="product-card">

                    <div class="product-image-wrapper">

                        <img
                            src="${build.image}"
                            class="product-image"
                        >

                    </div>

                    <div class="product-content">

                        <span class="product-category">

                            Gaming PC

                        </span>

                        <h3>

                            ${build.title}

                        </h3>

                        <ul class="pc-build-mini-specs">

                            ${build.specs.map(spec => `

                                <li>

                                    ${spec}

                                </li>

                            `).join("")}

                        </ul>

                        <div class="product-bottom">

                            <p class="price">

                                ₴${build.price}

                            </p>

                            <a href="product.html?id=${build.id}">

                                <button class="product-btn">

                                    View Build

                                </button>

                            </a>

                        </div>

                    </div>

                </div>

            </div>

        `;
    });

}

renderPcBuilds();

/* =========================
   HOVER SOUND
========================= */

document.addEventListener(
    "mouseover",
    event => {

        const button =
            event.target.closest(

                ".hero-btn, .product-btn, .nav-action-btn, .filter-btn"

            );

        if (!button) return;

        playSound("hover");

    }
);

/* =========================
   LOAD MORE
========================= */

loadMoreBtn?.addEventListener(
    "click",
    () => {

        visibleProducts += 6;

        renderProducts();

        if (
            visibleProducts >=
            products.length
        ) {

            loadMoreBtn.style.display =
                "none";
        }

    }
);