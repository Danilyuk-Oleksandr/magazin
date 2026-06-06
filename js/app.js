/* ========================= ПЕРЕКЛАДИ ========================= */
const translations = {
    en: {
        nav_home: "Home", nav_about: "About", nav_contact: "Contact",
        nav_account: "Account", nav_login: "Login", nav_register: "Register",
        nav_logout: "Logout", nav_cart: "Cart",
        hero1_badge: "New Generation Gaming",
        hero1_title: "Build Your Dream Gaming Setup",
        hero1_text: "Premium gaming accessories and futuristic setups for every level of play.",
        hero2_badge: "Ultimate Performance",
        hero2_title: "Gaming Without Limits",
        hero2_text: "Discover high-end accessories for competitive gaming and immersive setups.",
        btn_shop_now: "Shop Now", btn_pc_builds: "PC Builds",
        search_ph: "Search products...",
        filter_all: "All", filter_keyboard: "Keyboards", filter_headset: "Headsets",
        filter_mouse: "Mice", filter_monitor: "Monitors", filter_chair: "Chairs",
        filter_laptop: "Laptops", filter_microphone: "Microphones", filter_speaker: "Speakers",
        sort_default: "Sort: Default", sort_price_asc: "Price: Low → High",
        sort_price_desc: "Price: High → Low", sort_name: "Name: A → Z",
        section_products: "Popular Products", section_pc_builds: "Gaming PC Builds",
        section_reviews: "What Customers Say",
        newsletter_title: "Stay Updated",
        newsletter_sub: "Get the latest deals and new arrivals straight to your inbox.",
        newsletter_ph: "Enter your email", btn_subscribe: "Subscribe",
        cart_title: "Your Cart", cart_subtotal: "Subtotal",
        cart_shipping: "Shipping", cart_free: "Free", cart_total: "Total",
        cart_empty_h: "Your cart is empty", cart_empty_p: "Add products to start shopping",
        btn_checkout: "Proceed To Checkout",
        btn_add: "Add", btn_load_more: "Load More",
        qv_add: "Add to Cart", qv_goto: "View Product →",
        specs_title: "Specifications", related_title: "Related Products",
        btn_add_cart: "Add To Cart", cart_label: "Cart:",
        footer_nav: "Navigation", footer_socials: "Socials",
        footer_desc: "Premium gaming ecommerce experience built for the next generation.",
        footer_copy: "Demo educational project.",
        about_badge: "Next Generation Ecommerce", about_title: "About CyberTech",
        about_text1: "CyberTech is a premium gaming ecommerce platform focused on futuristic technology, immersive setups and high-end gaming accessories.",
        about_text2: "We combine minimal design, smooth user experience and modern ecommerce architecture to create the next generation gaming store.",
        about_btn_explore: "Explore Store", about_btn_contact: "Contact Us",
        about_stats_title: "Our Numbers",
        stat_products: "Premium Products", stat_customers: "Happy Customers", stat_support: "Customer Support",
        about_why: "Why CyberTech?",
        f1_title: "Premium Design", f1_text: "Modern glassmorphism interface with immersive user experience and attention to every detail.",
        f2_title: "Gaming Focused", f2_text: "High-end accessories and setups curated specifically for gamers of every level.",
        f3_title: "Fast Experience", f3_text: "Smooth animations, modern architecture and fully responsive layout across all devices.",
        contact_badge: "24/7 Customer Support", contact_title: "Contact CyberTech",
        contact_text: "Need help with products, setup recommendations or your order? Our support team is ready to help anytime.",
        contact_form_title: "Send Message",
        contact_name_ph: "Your Name", contact_email_ph: "Your Email",
        contact_subject_ph: "Subject", contact_msg_ph: "Your Message",
        btn_send: "Send Message",
        faq_title: "Frequently Asked Questions",
        faq1_q: "How fast is delivery?", faq1_a: "Delivery usually takes 2–5 business days depending on your location.",
        faq2_q: "Do you offer refunds?", faq2_a: "Yes. We provide a full refund policy for damaged or defective products within 30 days.",
        faq3_q: "Is support available 24/7?", faq3_a: "Our support team is available 24/7 via email and live chat.",
        faq4_q: "Do you ship internationally?", faq4_a: "Yes, we ship to over 50 countries worldwide with competitive international rates.",
        auth_username_ph: "Username", auth_email_ph: "Email", auth_password_ph: "Password",
        btn_continue: "Continue", login_title: "Login", register_title: "Create Account",
        breadcrumb_home: "Home", breadcrumb_products: "Products",
        toast_added: "added to cart", toast_subscribed: "✓ Subscribed successfully!",
        toast_msg_sent: "✓ Message sent! We'll get back to you soon.",
        empty_title: "No products found", empty_text: "Try a different search or filter",
        showing: "Showing", products_word: "products",
    },
    ua: {
        nav_home: "Головна", nav_about: "Про нас", nav_contact: "Контакти",
        nav_account: "Акаунт", nav_login: "Вхід", nav_register: "Реєстрація",
        nav_logout: "Вийти", nav_cart: "Кошик",
        hero1_badge: "Нове Покоління Гемінгу",
        hero1_title: "Збери Своє Ідеальне Місце Геймера",
        hero1_text: "Преміум ігрові аксесуари та футуристичні налаштування для кожного рівня гри.",
        hero2_badge: "Максимальна Продуктивність",
        hero2_title: "Гемінг Без Обмежень",
        hero2_text: "Відкрий для себе топові аксесуари для змагального гемінгу та іммерсивних налаштувань.",
        btn_shop_now: "Купити Зараз", btn_pc_builds: "ПК Збірки",
        search_ph: "Пошук товарів...",
        filter_all: "Всі", filter_keyboard: "Клавіатури", filter_headset: "Навушники",
        filter_mouse: "Миші", filter_monitor: "Монітори", filter_chair: "Крісла",
        filter_laptop: "Ноутбуки", filter_microphone: "Мікрофони", filter_speaker: "Колонки",
        sort_default: "Сортування: за замовчуванням", sort_price_asc: "Ціна: від дешевих",
        sort_price_desc: "Ціна: від дорогих", sort_name: "Назва: А → Я",
        section_products: "Популярні Товари", section_pc_builds: "Готові ПК Збірки",
        section_reviews: "Що Кажуть Покупці",
        newsletter_title: "Будь в курсі",
        newsletter_sub: "Отримуй найкращі акції та новинки прямо на пошту.",
        newsletter_ph: "Введи свій email", btn_subscribe: "Підписатись",
        cart_title: "Твій Кошик", cart_subtotal: "Сума",
        cart_shipping: "Доставка", cart_free: "Безкоштовно", cart_total: "Разом",
        cart_empty_h: "Кошик порожній", cart_empty_p: "Додай товари щоб почати покупки",
        btn_checkout: "Оформити Замовлення",
        btn_add: "Додати", btn_load_more: "Завантажити Ще",
        qv_add: "Додати в Кошик", qv_goto: "Переглянути →",
        specs_title: "Характеристики", related_title: "Схожі Товари",
        btn_add_cart: "Додати в Кошик", cart_label: "Кошик:",
        footer_nav: "Навігація", footer_socials: "Соцмережі",
        footer_desc: "Преміум ігровий магазин для нового покоління.",
        footer_copy: "Демо навчальний проєкт.",
        about_badge: "Наступне Покоління E-commerce", about_title: "Про CyberTech",
        about_text1: "CyberTech — це преміум ігровий магазин з футуристичними технологіями, іммерсивними налаштуваннями та топовими ігровими аксесуарами.",
        about_text2: "Ми поєднуємо мінімалістичний дизайн, плавний досвід та сучасну архітектуру для створення ігрового магазину нового покоління.",
        about_btn_explore: "Переглянути Магазин", about_btn_contact: "Зв'язатись з нами",
        about_stats_title: "Наші Цифри",
        stat_products: "Преміум Товарів", stat_customers: "Щасливих Покупців", stat_support: "Підтримка Клієнтів",
        about_why: "Чому CyberTech?",
        f1_title: "Преміум Дизайн", f1_text: "Сучасний скляний інтерфейс з іммерсивним досвідом та увагою до кожної деталі.",
        f2_title: "Для Геймерів", f2_text: "Топові аксесуари та налаштування спеціально підібрані для геймерів будь-якого рівня.",
        f3_title: "Швидкий Досвід", f3_text: "Плавні анімації, сучасна архітектура та повністю адаптивний макет на всіх пристроях.",
        contact_badge: "Підтримка 24/7", contact_title: "Контакти CyberTech",
        contact_text: "Потрібна допомога з товарами або замовленням? Наша команда підтримки готова допомогти будь-коли.",
        contact_form_title: "Надіслати Повідомлення",
        contact_name_ph: "Твоє Ім'я", contact_email_ph: "Твій Email",
        contact_subject_ph: "Тема", contact_msg_ph: "Твоє Повідомлення",
        btn_send: "Надіслати",
        faq_title: "Часті Запитання",
        faq1_q: "Як швидко доставляють?", faq1_a: "Зазвичай доставка займає 2–5 робочих днів залежно від місця.",
        faq2_q: "Чи є повернення коштів?", faq2_a: "Так. Повне повернення за пошкоджені або бракові товари протягом 30 днів.",
        faq3_q: "Підтримка справді 24/7?", faq3_a: "Наша команда підтримки доступна 24/7 через email та живий чат.",
        faq4_q: "Є міжнародна доставка?", faq4_a: "Так, доставляємо в понад 50 країн з конкурентними тарифами.",
        auth_username_ph: "Нікнейм", auth_email_ph: "Email", auth_password_ph: "Пароль",
        btn_continue: "Продовжити", login_title: "Вхід", register_title: "Створити Акаунт",
        breadcrumb_home: "Головна", breadcrumb_products: "Товари",
        toast_added: "додано в кошик", toast_subscribed: "✓ Підписку оформлено!",
        toast_msg_sent: "✓ Повідомлення надіслано!",
        empty_title: "Нічого не знайдено", empty_text: "Спробуй інший пошук або фільтр",
        showing: "Показано", products_word: "товарів",
    }
};

/* ========================= ПОТОЧНА МОВА ========================= */
window.currentLang = localStorage.getItem("cybertech-lang") || "en";

/* ========================= ЗАСТОСУВАТИ ПЕРЕКЛАД ========================= */
function applyLang(lang) {
    const t = translations[lang];
    if (!t) return;
    window.currentLang = lang;
    localStorage.setItem("cybertech-lang", lang);

    // Текст елементів
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (t[key] !== undefined) el.textContent = t[key];
    });

    // Placeholder інпутів
    document.querySelectorAll("[data-i18n-ph]").forEach(el => {
        const key = el.getAttribute("data-i18n-ph");
        if (t[key] !== undefined) el.placeholder = t[key];
    });

    // Кнопка мови
    const langBtn = document.getElementById("langToggle");
    if (langBtn) langBtn.textContent = lang === "ua" ? "🇬🇧 EN" : "🇺🇦 UA";

    // Оновлюємо кошик і товари якщо вони є
    if (typeof updateCart === "function") updateCart();
    if (typeof renderProducts === "function") renderProducts();
}

/* ========================= КНОПКА ПЕРЕМИКАННЯ МОВИ ========================= */
document.getElementById("langToggle")?.addEventListener("click", () => {
    const newLang = window.currentLang === "en" ? "ua" : "en";
    applyLang(newLang);
});

/* ========================= ТЕМА ========================= */
const _savedTheme = localStorage.getItem("cybertech-theme");
if (_savedTheme === "light") {
    document.body.classList.add("light-mode");
    const _themeBtn = document.getElementById("themeToggle");
    if (_themeBtn) _themeBtn.textContent = "☀️";
}
document.getElementById("themeToggle")?.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    const isLight = document.body.classList.contains("light-mode");
    localStorage.setItem("cybertech-theme", isLight ? "light" : "dark");
    const b = document.getElementById("themeToggle");
    if (b) b.textContent = isLight ? "☀️" : "🌙";
});

/* ========================= ЗВУКИ ========================= */
const sounds = {
    addToCart: new Audio("sounds/add-to-cart.wav"),
    success: new Audio("sounds/success.wav"),
    cartOpen: new Audio("sounds/cart-open.wav"),
    quantity: new Audio("sounds/quantity.wav"),
    wishlist: new Audio("sounds/wishlist.wav"),
    remove: new Audio("sounds/remove.wav")
};
function playSound(name) {
    const s = sounds[name];
    if (!s) return;
    s.currentTime = 0;
    s.volume = 0.35;
    s.play().catch(() => { });
}
document.addEventListener("click", () => {
    Object.values(sounds).forEach(s => s.load());
}, { once: true });

/* ========================= ТОВАРИ ========================= */
const products = [
    { id: 1, title: "Mechanical Keyboard", category: "keyboard", price: 129, image: "https://assets3.razerzone.com/LfJACJA3KA3Qsxuo_tWznTE_OkQ=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fh25%2Fhdf%2F10045163929630%2F240510-BW-V4-Pro-White-500x500.png", badge: "NEW", description: "Premium mechanical keyboard designed for competitive gaming." },
    { id: 2, title: "Gaming Headset", category: "headset", price: 89, image: "https://resource.logitechg.com/w_416,h_312,ar_4:3,c_pad,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/astro/en/products/a10-gen-2/pdp-gallery-a10-lilac-02.png", badge: "SALE", description: "Immersive surround sound gaming headset with premium microphone." },
    { id: 3, title: "UltraWide Monitor", category: "monitor", price: 399, image: "https://dlcdnwebimgs.asus.com/gain/2CE57476-66B2-4154-8970-F7F201683F19/w717/h525/fwebp/w273", description: "UltraWide gaming monitor with immersive colors and smooth refresh rate." },
    { id: 4, title: "RGB Gaming Mouse", category: "mouse", price: 59, image: "https://assets3.razerzone.com/IGLejpy9uJjP2M8FsPZTU6rZ-Jg=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fh5a%2Fh1c%2F9821720576030%2Fbasilisk-v3-pro-35k-500x500.png", badge: "HOT", description: "Professional esports gaming mouse with ultra lightweight build." },
    { id: 5, title: "Gaming Chair", category: "chair", price: 249, image: "https://assets3.razerzone.com/Gvby_QeZpl2GWaHhqlKcxCUvoE4=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fh23%2Fh46%2F10003777290270%2Fiskur-v2-x-newgen-blackgreen-500x500.png", description: "Premium ergonomic gaming chair for maximum comfort." },
    { id: 6, title: "Gaming Laptop", category: "laptop", price: 1499, image: "https://assets3.razerzone.com/buDySUbJpzLXprNWkAEoV5N8U3Y=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fhc0%2Fh35%2F9917794517022%2Fblade-18-k11-black-2-500x500.png", badge: "SALE", description: "Powerful gaming laptop built for ultra performance." },
    { id: 7, title: "RGB Mini Keyboard", category: "keyboard", price: 99, image: "https://assets3.razerzone.com/UiecZnWkVhT-O7pRtym22hoXFzg=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fh96%2Fh06%2F10061741654046%2Fhuntsman-v3-tkl-8khz-500x500.png", description: "Compact gaming keyboard for speed and minimalistic setups." },
    { id: 8, title: "Wireless Headset", category: "headset", price: 119, image: "https://resource.logitechg.com/w_416,h_312,ar_4:3,c_pad,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/audio/g735-wireless-headset/gallery/2025/g735-front-angle-gallery-4.png", description: "Wireless gaming headset with premium sound quality." },
    { id: 9, title: "4K Gaming Monitor", category: "monitor", price: 599, image: "https://dlcdnwebimgs.asus.com/gain/755DDBA5-BD42-4E9F-8969-B5319AA6813C/w717/h525/fwebp", description: "Premium 4K gaming monitor with ultra sharp visuals." },
    { id: 10, title: "Cyber Mouse Pro", category: "mouse", price: 79, image: "https://resource.logitechg.com/w_416,h_312,ar_4:3,c_pad,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/pro-x2-superstrike-pdp/2026/pro-x2-superstrike-profile-angle-gallery-4.png", badge: "-20%", description: "Professional gaming mouse with ultra fast response." },
    { id: 11, title: "Wireless Gaming Mouse", category: "mouse", price: 99, image: "https://resource.logitechg.com/w_544,h_466,ar_7:6,c_pad,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/g502x-corded/gallery/g502x-corded-gallery-1-white.png", badge: "NEW", description: "Wireless gaming mouse for speed and esports performance." },
    { id: 12, title: "White Gaming Keyboard", category: "keyboard", price: 149, image: "https://assets3.razerzone.com/dskwa_GYE7zZbDyP1FLFOZepovk=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fh37%2Fhda%2F9257514041374%2F211102-pro-type-ultra-500x500.png", description: "Premium white mechanical keyboard with RGB lighting." },
    { id: 13, title: "Streaming Microphone", category: "microphone", price: 139, image: "https://resource.logitechg.com/w_416,h_312,ar_4:3,c_pad,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/streaming-gear/yeti-nano-usb-microphone/gallery/2025/yeti-nano-3qtr-front-left-angle-black-gallery-3.png", badge: "HOT", description: "Professional streaming microphone with crystal clear voice." },
    { id: 14, title: "RGB Gaming Chair", category: "chair", price: 329, image: "https://dlcdnwebimgs.asus.com/gain/9B43A0DE-4AA1-4C94-B707-1987B28DEE3E/w382/fwebp", description: "Luxury RGB gaming chair with ergonomic support." },
    { id: 15, title: "240Hz Gaming Monitor", category: "monitor", price: 699, image: "https://dlcdnwebimgs.asus.com/gain/EEE5E88C-D4DD-4563-A826-3C4E03531795/w717/h525/fwebp/w273", badge: "PRO", description: "Ultra fast 240Hz gaming monitor for esports." },
    { id: 16, title: "Studio Gaming Headset", category: "headset", price: 179, image: "https://resource.logitechg.com/w_416,h_312,ar_4:3,c_pad,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/g733/gallery/g733-lilac-gallery-2.png", description: "Premium wireless headset for immersive gaming." },
    { id: 17, title: "Cyber Laptop RTX", category: "laptop", price: 1899, image: "https://dlcdnwebimgs.asus.com/gain/F0F8BC19-F9EA-4D71-9EE8-4BE054D99E14/w300/fwebp", badge: "RTX", description: "Ultra powerful RTX gaming laptop." },
    { id: 18, title: "Minimal White Mouse", category: "mouse", price: 69, image: "https://dlcdnwebimgs.asus.com/gain/FA05331B-7D49-466E-B208-8BAE5B90C64D/w300/fwebp", description: "Minimalistic white gaming mouse with premium sensor." },
    { id: 19, title: "RGB Speaker Set", category: "speaker", price: 159, image: "https://assets3.razerzone.com/N4QBkmMn9tHXWNROzLj8F2gNAS4=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fhd9%2Fhf6%2F9522060492830%2Fleviathan-v2-pro-2-500x500.png", description: "Powerful RGB speaker system with immersive surround sound." },
    { id: 20, title: "Compact Gaming Keyboard", category: "keyboard", price: 119, image: "https://dlcdnwebimgs.asus.com/gain/0634830A-5D8F-4A86-93C9-873D959E03AD/w300/fwebp", description: "Compact esports keyboard with ultra responsive switches." },
    { id: 21, title: "Cyber Monitor Pro", category: "monitor", price: 849, image: "https://dlcdnwebimgs.asus.com/gain/EBAC0720-7C2A-4CBE-8E6D-624127867D77/w717/h525/fwebp/w273", badge: "BEST", description: "Professional gaming monitor with ultra smooth visuals." },
    { id: 22, title: "Pro Wireless Headset", category: "headset", price: 149, image: "https://assets3.razerzone.com/HXhTxOzsNH11j_gikX4lANpISko=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fh3b%2Fh1e%2F9821452435486%2Fkraken-v4-2-500x500.png", description: "Wireless esports headset with immersive sound." },
    { id: 23, title: "Premium RGB Chair", category: "chair", price: 379, image: "https://dlcdnwebimgs.asus.com/gain/B24413D5-6F1C-4832-9CCC-275DC5CB73AE/w717/h525/fwebp/w273", description: "Luxury RGB gaming chair with premium ergonomic support." },
    { id: 24, title: "Streaming Mic White", category: "microphone", price: 129, image: "https://resource.logitechg.com/w_416,h_312,ar_4:3,c_pad,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/plp-microphones/pdp-yeti-gx-gaming-microphone/2025/gallery/yeti-gx-3qtr-front-angle-white-gallery-4.png", description: "Minimal white streaming microphone with studio audio." },
    { id: 25, title: "Gaming Setup Monitor", category: "monitor", price: 499, image: "https://dlcdnwebimgs.asus.com/gain/EA5F4487-87F4-47AC-B06F-EC1C95C0E59E/w717/h525/fwebp", description: "Modern gaming monitor with ultra smooth performance." },
    { id: 26, title: "Wireless Compact Keyboard", category: "keyboard", price: 139, image: "https://dlcdnwebimgs.asus.com/gain/0B522307-78BF-4F10-AA9B-9D9D6BC00C76/w717/h525/fwebp/w273", description: "Compact wireless gaming keyboard with RGB lighting." },
    { id: 27, title: "Gaming Sound Speakers", category: "speaker", price: 189, image: "https://assets3.razerzone.com/WuUGqs2eQg9N9Zy_mY_fDk8EsO0=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fh40%2Fh81%2F9522168987678%2Fnommo-v2-500x500.png", badge: "NEW", description: "Premium gaming speaker system with deep bass." },
    { id: 28, title: "Cyber Gaming Laptop", category: "laptop", price: 2099, image: "https://assets3.razerzone.com/705Z1YGWMxhT83ggz1IpMDI3pJw=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fhbe%2Fh38%2F9917794451486%2Fblade-14-p11-black-2-500x500.png", description: "Next generation gaming laptop for ultra performance." },
    { id: 29, title: "Esports Gaming Mouse", category: "mouse", price: 109, image: "https://resource.logitechg.com/w_544,h_466,ar_7:6,c_pad,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/pro-x-superlight-2-dex/gallery/new-gallery-assets-2025/pro-x-superlight-2-dex-mouse-3qtr-high-back-angle-black-gallery-3-new.png", description: "Professional esports gaming mouse with ultra fast sensor." },
    { id: 30, title: "Cyber RGB Headset", category: "headset", price: 199, image: "https://dlcdnwebimgs.asus.com/gain/378A90DA-2DFF-414F-B8A2-57B7C411665F/w717/h525/fwebp/w273", badge: "LIMITED", description: "Premium RGB gaming headset with immersive surround audio." }
];
const pcBuilds = [
    { id: 101, title: "Gaming PC 500$", category: "pc", price: 500, image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1200", specs: ["Ryzen 5 3600", "RX 6600", "16GB DDR4", "512GB NVMe"] },
    { id: 102, title: "Gaming PC 750$", category: "pc", price: 750, image: "https://images.unsplash.com/photo-1593640495253-23196b27a87f?q=80&w=1200", specs: ["Ryzen 5 5600", "RTX 4060", "32GB RAM", "1TB SSD"] },
    { id: 103, title: "Gaming PC 1000$", category: "pc", price: 1000, image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?q=80&w=1200", specs: ["Ryzen 7 7700", "RTX 4070", "32GB DDR5", "1TB Gen4"] },
    { id: 104, title: "Gaming PC 1500$", category: "pc", price: 1500, image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=1200", specs: ["7800X3D", "4070 Ti Super", "32GB DDR5", "2TB SSD"] },
    { id: 105, title: "Gaming PC 2000$", category: "pc", price: 2000, image: "https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?q=80&w=1200", specs: ["Ryzen 9 9950X", "RTX 4080 Super", "64GB DDR5", "4TB SSD"] }
];

/* ========================= СТАН ========================= */
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
let currentFilter = "all";
let visibleProducts = 6;
let searchValue = "";
let currentSort = "default";

/* ========================= ЕЛЕМЕНТИ ========================= */
const productsContainer = document.getElementById("productsContainer");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");
const sortSelect = document.getElementById("sortSelect");
const productCountEl = document.getElementById("productCount");
const cartCount = document.getElementById("cart-count");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartSubtotal = document.getElementById("cartSubtotal");
const cartSidebar = document.getElementById("cartSidebar");
const cartOverlay = document.getElementById("cartOverlay");
const closeCart = document.getElementById("closeCart");
const cartNavBtn = document.getElementById("cartNavBtn");
const loader = document.getElementById("loader");
const toast = document.getElementById("toast");
const floatingCart = document.getElementById("floatingCart");
const floatingCartCount = document.getElementById("floatingCartCount");
const loadMoreBtn = document.getElementById("loadMoreBtn");
const pcBuildsContainer = document.getElementById("pcBuildsContainer");

/* ========================= РЕНДЕР ТОВАРІВ ========================= */
function renderProducts() {
    const t = translations[window.currentLang];
    let filtered = products.filter(p => {
        return p.title.toLowerCase().includes(searchValue) &&
            (currentFilter === "all" || p.category === currentFilter);
    });
    if (currentSort === "price-asc") filtered.sort((a, b) => a.price - b.price);
    if (currentSort === "price-desc") filtered.sort((a, b) => b.price - a.price);
    if (currentSort === "name-asc") filtered.sort((a, b) => a.title.localeCompare(b.title));

    if (productCountEl) productCountEl.textContent = Math.min(visibleProducts, filtered.length);

    productsContainer.innerHTML = `
        <div class="col-md-6 col-xl-4"><div class="skeleton-card"></div></div>
        <div class="col-md-6 col-xl-4"><div class="skeleton-card"></div></div>
        <div class="col-md-6 col-xl-4"><div class="skeleton-card"></div></div>`;

    setTimeout(() => {
        productsContainer.innerHTML = "";
        const slice = filtered.slice(0, visibleProducts);
        if (!slice.length) {
            productsContainer.innerHTML = `
                <div class="col-12"><div class="empty-state">
                    <div class="empty-state-title">${t.empty_title}</div>
                    <div class="empty-state-text">${t.empty_text}</div>
                </div></div>`;
            if (loadMoreBtn) loadMoreBtn.style.display = "none";
            return;
        }
        slice.forEach(p => {
            productsContainer.innerHTML += `
                <div class="col-md-6 col-xl-4">
                    <div class="product-card" onclick="window.location.href='product.html?id=${p.id}'">
                        <div class="product-image-wrapper">
                            <button class="wishlist-btn ${wishlist.includes(p.id) ? "active" : ""}" data-id="${p.id}">♡</button>
                            ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ""}
                            <img src="${p.image}" class="product-image" alt="${p.title}" loading="lazy">
                        </div>
                        <div class="product-content">
                            <span class="product-category">${p.category}</span>
                            <h3>${p.title}</h3>
                            <div class="product-bottom">
                                <p class="price">$${p.price}</p>
                                <div style="display:flex;gap:8px;">
                                    <button class="product-btn quick-view-btn" data-id="${p.id}" onclick="event.stopPropagation()">👁</button>
                                    <button class="product-btn" data-id="${p.id}" onclick="event.stopPropagation()">${t.btn_add}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
        });
        if (loadMoreBtn) loadMoreBtn.style.display = visibleProducts >= filtered.length ? "none" : "flex";
        initCartButtons();
        initWishlistButtons();
        initQuickViewButtons();
    }, 480);
}

/* ========================= ПОШУК / ФІЛЬТРИ / СОРТ ========================= */
searchInput?.addEventListener("input", e => { searchValue = e.target.value.toLowerCase(); visibleProducts = 6; renderProducts(); });
filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active", "active-filter"));
        btn.classList.add("active");
        currentFilter = btn.dataset.filter;
        visibleProducts = 6;
        renderProducts();
    });
});
sortSelect?.addEventListener("change", e => { currentSort = e.target.value; renderProducts(); });
loadMoreBtn?.addEventListener("click", () => { visibleProducts += 6; renderProducts(); });

/* ========================= КНОПКИ КОШИКА / ВІШЛІСТ / QUICK VIEW ========================= */
function initCartButtons() {
    document.querySelectorAll(".product-btn[data-id]").forEach(btn => {
        if (btn.classList.contains("quick-view-btn")) return;
        btn.addEventListener("click", e => {
            e.stopPropagation();
            const id = Number(btn.dataset.id);
            const product = products.find(p => p.id === id);
            if (!product) return;
            addToCart(product);
            btn.textContent = "✓";
            btn.classList.add("added");
            setTimeout(() => { btn.textContent = translations[window.currentLang].btn_add; btn.classList.remove("added"); }, 1800);
        });
    });
}

function initWishlistButtons() {
    document.querySelectorAll(".wishlist-btn").forEach(btn => {
        btn.addEventListener("click", e => {
            e.stopPropagation();
            const id = Number(btn.dataset.id);
            if (wishlist.includes(id)) { wishlist = wishlist.filter(i => i !== id); btn.classList.remove("active"); }
            else { wishlist.push(id); btn.classList.add("active"); playSound("success"); }
            playSound("wishlist");
            localStorage.setItem("wishlist", JSON.stringify(wishlist));
        });
    });
}

function initQuickViewButtons() {
    document.querySelectorAll(".quick-view-btn").forEach(btn => {
        btn.addEventListener("click", e => { e.stopPropagation(); openQuickView(Number(btn.dataset.id)); });
    });
}

function openQuickView(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;
    const t = translations[window.currentLang];
    document.getElementById("quickViewImg").src = product.image;
    document.getElementById("quickViewCategory").textContent = product.category;
    document.getElementById("quickViewTitle").textContent = product.title;
    document.getElementById("quickViewPrice").textContent = "$" + product.price;
    document.getElementById("quickViewDesc").textContent = product.description || "";
    const addBtn = document.getElementById("quickViewAdd");
    if (addBtn) { addBtn.textContent = t.qv_add; addBtn.onclick = () => { addToCart(product); addBtn.textContent = "✓"; setTimeout(() => addBtn.textContent = t.qv_add, 1500); }; }
    const gotoBtn = document.getElementById("quickViewGoto");
    if (gotoBtn) { gotoBtn.textContent = t.qv_goto; gotoBtn.onclick = () => window.location.href = `product.html?id=${id}`; }
    document.getElementById("quickViewModal")?.classList.add("show");
}

document.getElementById("closeQuickView")?.addEventListener("click", () => document.getElementById("quickViewModal")?.classList.remove("show"));
document.getElementById("quickViewModal")?.addEventListener("click", e => { if (e.target === document.getElementById("quickViewModal")) document.getElementById("quickViewModal").classList.remove("show"); });

/* ========================= ТОСТ ========================= */
function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2200);
}

/* ========================= КОШИК ========================= */
function addToCart(product) {
    const existing = cart.find(i => i.id === product.id);
    if (existing) existing.quantity++;
    else cart.push({ ...product, quantity: 1 });
    playSound("addToCart");
    showToast(`${product.title} ${translations[window.currentLang].toast_added}`);
    [cartCount, floatingCartCount].forEach(el => { if (!el) return; el.classList.add("cart-bounce"); setTimeout(() => el.classList.remove("cart-bounce"), 450); });
    updateCart();
}

function updateCart() {
    const t = translations[window.currentLang];
    localStorage.setItem("cart", JSON.stringify(cart));
    const totalItems = cart.reduce((s, i) => s + i.quantity, 0);
    if (cartCount) cartCount.textContent = totalItems;
    if (floatingCartCount) floatingCartCount.textContent = totalItems;
    if (!cartItems) return;
    cartItems.innerHTML = "";
    if (!cart.length) {
        cartItems.innerHTML = `<div class="empty-cart"><h3>${t.cart_empty_h}</h3><p>${t.cart_empty_p}</p></div>`;
        if (cartTotal) cartTotal.textContent = "$0";
        if (cartSubtotal) cartSubtotal.textContent = "$0";
        return;
    }
    let total = 0;
    cart.forEach(p => {
        total += p.price * p.quantity;
        cartItems.innerHTML += `
            <div class="cart-item">
                <img src="${p.image}" alt="${p.title}">
                <div class="cart-item-content">
                    <h4>${p.title}</h4>
                    <div class="cart-item-price">$${p.price}</div>
                    <div class="cart-item-actions">
                        <button class="cart-qty-btn" onclick="changeCartQty(${p.id},-1)">−</button>
                        <span>${p.quantity}</span>
                        <button class="cart-qty-btn" onclick="changeCartQty(${p.id},1)">+</button>
                        <button class="remove-cart-item" onclick="removeCartItem(${p.id})">Remove</button>
                    </div>
                </div>
            </div>`;
    });
    if (cartTotal) cartTotal.textContent = "$" + total;
    if (cartSubtotal) cartSubtotal.textContent = "$" + total;
}

function changeCartQty(id, change) {
    const p = cart.find(i => i.id === id);
    if (!p) return;
    playSound("quantity");
    p.quantity += change;
    if (p.quantity <= 0) { removeCartItem(id); return; }
    updateCart();
}
function removeCartItem(id) { playSound("remove"); cart = cart.filter(i => i.id !== id); updateCart(); }

function openCartSidebar() { cartSidebar?.classList.add("show-cart"); cartOverlay?.classList.add("show-overlay"); playSound("cartOpen"); }
function closeCartSidebar() { cartSidebar?.classList.remove("show-cart"); cartOverlay?.classList.remove("show-overlay"); }
cartNavBtn?.addEventListener("click", openCartSidebar);
floatingCart?.addEventListener("click", openCartSidebar);
closeCart?.addEventListener("click", closeCartSidebar);
cartOverlay?.addEventListener("click", closeCartSidebar);

/* ========================= ПК ЗБІРКИ ========================= */
function renderPcBuilds() {
    if (!pcBuildsContainer) return;
    pcBuilds.forEach(b => {
        pcBuildsContainer.innerHTML += `
            <div class="col-lg-4 col-md-6">
                <div class="product-card" onclick="window.location.href='product.html?id=${b.id}'">
                    <div class="product-image-wrapper">
                        <img src="${b.image}" class="product-image" alt="${b.title}" loading="lazy">
                    </div>
                    <div class="product-content">
                        <span class="product-category">Gaming PC</span>
                        <h3>${b.title}</h3>
                        <ul class="pc-build-mini-specs">${b.specs.map(s => `<li>${s}</li>`).join("")}</ul>
                        <div class="product-bottom">
                            <p class="price">$${b.price}</p>
                            <button class="product-btn" onclick="event.stopPropagation();window.location.href='product.html?id=${b.id}'">View</button>
                        </div>
                    </div>
                </div>
            </div>`;
    });
}

/* ========================= SWIPER ========================= */
new Swiper(".heroSwiper", { loop: true, speed: 900, autoplay: { delay: 4500 }, pagination: { el: ".hero-pagination", clickable: true }, navigation: { nextEl: ".hero-next", prevEl: ".hero-prev" } });
new Swiper(".reviewsSwiper", { loop: true, spaceBetween: 24, autoplay: { delay: 3200 }, pagination: { el: ".reviews-pagination", clickable: true }, breakpoints: { 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1200: { slidesPerView: 3 } } });

/* ========================= LOADER ========================= */
window.addEventListener("load", () => setTimeout(() => loader?.classList.add("hide"), 500));

/* ========================= КУРСОР ========================= */
const cursorGlow = document.querySelector(".cursor-glow");
document.addEventListener("mousemove", e => { if (!cursorGlow) return; cursorGlow.style.left = e.clientX + "px"; cursorGlow.style.top = e.clientY + "px"; });

/* ========================= REVEAL ========================= */
const revealEls = document.querySelectorAll(".section-shell, .ui-card");
function revealOnScroll() { revealEls.forEach(el => { if (el.getBoundingClientRect().top < window.innerHeight - 60) el.classList.add("active-reveal"); }); }
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* ========================= SCROLL TOP ========================= */
const scrollTopBtn = document.getElementById("scrollTop");
window.addEventListener("scroll", () => scrollTopBtn?.classList.toggle("show-scroll-top", window.scrollY > 400));
scrollTopBtn?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

/* ========================= NEWSLETTER ========================= */
function handleNewsletter(e) {
    e.preventDefault();
    showToast(translations[window.currentLang].toast_subscribed);
    e.target.reset();
}

/* ========================= ЗАПУСК ========================= */
applyLang(window.currentLang);
renderProducts();
renderPcBuilds();
updateCart();