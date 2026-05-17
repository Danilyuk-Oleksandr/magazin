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

        description:
            "Premium mechanical keyboard with RGB lighting and ultra-fast response time.",

        specifications: [

            "RGB Backlight",

            "USB-C Connection",

            "Mechanical Switches",

            "Hot Swappable",

            "Aluminum Frame"

        ],

        gallery: [

            "https://assets3.razerzone.com/LfJACJA3KA3Qsxuo_tWznTE_OkQ=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fh25%2Fhdf%2F10045163929630%2F240510-BW-V4-Pro-White-500x500.png",

            "https://assets3.razerzone.com/UiecZnWkVhT-O7pRtym22hoXFzg=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fh96%2Fh06%2F10061741654046%2Fhuntsman-v3-tkl-8khz-500x500.png"

        ]

    },

    {
        id: 2,
        title: "Gaming Headset",
        category: "headset",
        price: 89,

        image:
            "https://resource.logitechg.com/w_416,h_312,ar_4:3,c_pad,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/astro/en/products/a10-gen-2/pdp-gallery-a10-lilac-02.png",

        description:
            "Immersive surround sound gaming headset with premium microphone.",

        specifications: [

            "7.1 Surround",

            "Noise Cancellation",

            "Wireless Mode",

            "50mm Drivers",

            "RGB Lighting"

        ],

        gallery: [

            "https://resource.logitechg.com/w_416,h_312,ar_4:3,c_pad,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/astro/en/products/a10-gen-2/pdp-gallery-a10-lilac-02.png",

            "https://resource.logitechg.com/w_416,h_312,ar_4:3,c_pad,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/audio/g735-wireless-headset/gallery/2025/g735-front-angle-gallery-4.png"

        ]

    },

    {
        id: 3,
        title: "UltraWide Monitor",
        category: "monitor",
        price: 399,

        image:
            "https://dlcdnwebimgs.asus.com/gain/2CE57476-66B2-4154-8970-F7F201683F19/w717/h525/fwebp/w273",

        description:
            "UltraWide gaming monitor with immersive colors and high refresh rate.",

        specifications: [

            "165Hz Refresh Rate",

            "1ms Response Time",

            "HDR Support",

            "UltraWide Display",

            "Curved Panel"

        ],

        gallery: [

            "https://dlcdnwebimgs.asus.com/gain/2CE57476-66B2-4154-8970-F7F201683F19/w717/h525/fwebp/w273",

            "https://dlcdnwebimgs.asus.com/gain/755DDBA5-BD42-4E9F-8969-B5319AA6813C/w717/h525/fwebp"

        ]

    }

];

/* =========================
   GET PRODUCT ID
========================= */

const params =
    new URLSearchParams(
        window.location.search
    );

const productId =
    Number(params.get("id"));

/* =========================
   FIND PRODUCT
========================= */

const product =
    products.find(
        item =>
            item.id === productId
    );

/* =========================
   ELEMENTS
========================= */

const breadcrumbTitle =
    document.getElementById(
        "breadcrumbTitle"
    );

const mainProductImage =
    document.getElementById(
        "mainProductImage"
    );

const thumbnailList =
    document.getElementById(
        "thumbnailList"
    );

const productCategory =
    document.getElementById(
        "productCategory"
    );

const productTitle =
    document.getElementById(
        "productTitle"
    );

const productPrice =
    document.getElementById(
        "productPrice"
    );

const productDescription =
    document.getElementById(
        "productDescription"
    );

const specificationsList =
    document.getElementById(
        "specificationsList"
    );

/* =========================
   RENDER PRODUCT
========================= */

function renderProduct() {

    if (!product) {

        window.location.href =
            "index.html";

        return;

    }

    breadcrumbTitle.textContent =
        product.title;

    mainProductImage.src =
        product.image;

    productCategory.textContent =
        product.category;

    productTitle.textContent =
        product.title;

    productPrice.textContent =
        "$" + product.price;

    productDescription.textContent =
        product.description;

    /* Specifications */

    specificationsList.innerHTML = "";

    product.specifications.forEach(spec => {

        specificationsList.innerHTML += `

            <li>

                ${spec}

            </li>

        `;

    });

    /* Gallery */

    thumbnailList.innerHTML = "";

    product.gallery.forEach(
        (image, index) => {

            thumbnailList.innerHTML += `

                <img
                    src="${image}"
                    class="
                        thumbnail-image
                        ${index === 0
                    ? "active"
                    : ""
                }
                    "
                    alt="Thumbnail"
                >

            `;

        }
    );

    initGallery();

}

/* =========================
   GALLERY
========================= */

function initGallery() {

    const thumbnails =
        document.querySelectorAll(
            ".thumbnail-image"
        );

    thumbnails.forEach(thumbnail => {

        thumbnail.addEventListener(
            "click",
            () => {

                thumbnails.forEach(item => {

                    item.classList.remove(
                        "active"
                    );

                });

                thumbnail.classList.add(
                    "active"
                );

                mainProductImage.src =
                    thumbnail.src;

            }
        );

    });

}

/* =========================
   INIT
========================= */

renderProduct();

console.log(
    "Product Page Loaded"
);