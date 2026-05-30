/* ========================= ЗВУКИ ДЛЯ АВТОРИЗАЦІЇ ========================= */
// Окремі звуки для авторизації щоб не мішати з основними
const authSounds = {
    modalOpen: new Audio("sounds/modal-open.wav"),
    success: new Audio("sounds/success.wav"),
    close: new Audio("sounds/close.wav"),
    error: new Audio("sounds/error.wav")
};

function playAuthSound(name) {
    const s = authSounds[name];
    if (!s) return;
    s.currentTime = 0;
    s.volume = 0.35;
    s.play().catch(() => { });
}

document.addEventListener("click", () => {
    Object.values(authSounds).forEach(s => s.load());
}, { once: true });

/* ========================= ЕЛЕМЕНТИ АВТОРИЗАЦІЇ ========================= */
// Беремо всі елементи потрібні для входу/реєстрації
const accountBtn = document.getElementById("accountBtn");
const accountDropdown = document.getElementById("accountDropdown");
const authModal = document.getElementById("authModal");
const closeAuth = document.getElementById("closeAuth");
const openLogin = document.getElementById("openLogin");
const openRegister = document.getElementById("openRegister");
const logoutBtn = document.getElementById("logoutBtn");
const authTitle = document.getElementById("authTitle");
const authForm = document.getElementById("authForm");
const authName = document.getElementById("authName");
const authEmail = document.getElementById("authEmail");
const authPassword = document.getElementById("authPassword");

// Режим: "login" або "register"
let authMode = "login";

/* ========================= ДРОПДАУН АКАУНТУ ========================= */
// Відкриваємо/закриваємо дропдаун при кліку на кнопку
accountBtn?.addEventListener("click", e => {
    e.stopPropagation();
    accountDropdown?.classList.toggle("show-dropdown");
});

// Закриваємо дропдаун якщо клікнули десь в іншому місці
document.addEventListener("click", e => {
    if (!e.target.closest(".account-wrapper")) {
        accountDropdown?.classList.remove("show-dropdown");
    }
});

/* ========================= ВІДКРИТИ ВХІД ========================= */
openLogin?.addEventListener("click", () => {
    authMode = "login";
    if (authTitle) authTitle.textContent = window.currentLang === "ua" ? "Вхід" : "Login";
    if (authName) authName.style.display = "none"; // поле імені не потрібне при вході
    playAuthSound("modalOpen");
    authModal?.classList.add("show-auth");
    accountDropdown?.classList.remove("show-dropdown");
});

/* ========================= ВІДКРИТИ РЕЄСТРАЦІЮ ========================= */
openRegister?.addEventListener("click", () => {
    authMode = "register";
    if (authTitle) authTitle.textContent = window.currentLang === "ua" ? "Реєстрація" : "Create Account";
    if (authName) authName.style.display = "block"; // показуємо поле імені
    playAuthSound("modalOpen");
    authModal?.classList.add("show-auth");
    accountDropdown?.classList.remove("show-dropdown");
});

/* ========================= ЗАКРИТИ МОДАЛКУ ========================= */
closeAuth?.addEventListener("click", () => {
    playAuthSound("close");
    authModal?.classList.remove("show-auth");
});

// Закрити по кліку на фон
authModal?.addEventListener("click", e => {
    if (e.target === authModal) authModal.classList.remove("show-auth");
});

// Закрити по Escape
document.addEventListener("keydown", e => {
    if (e.key === "Escape") authModal?.classList.remove("show-auth");
});

/* ========================= ОБРОБКА ФОРМИ ========================= */
authForm?.addEventListener("submit", e => {
    e.preventDefault();

    const email = authEmail?.value.trim();
    const password = authPassword?.value.trim();
    const username = authName?.value.trim();

    // Перевіряємо чи заповнені поля
    if (!email || !password) {
        playAuthSound("error");
        return;
    }

    if (authMode === "register") {
        // При реєстрації - потрібне ім'я
        if (!username) { playAuthSound("error"); return; }
        // Зберігаємо користувача в localStorage
        localStorage.setItem("cybertechUser", JSON.stringify({ username, email }));
    } else {
        // При вході - перевіряємо чи є акаунт
        const saved = JSON.parse(localStorage.getItem("cybertechUser"));
        if (!saved) {
            playAuthSound("error");
            const msg = window.currentLang === "ua" ? "Акаунт не знайдено. Спочатку зареєструйся!" : "Account not found. Please register first.";
            alert(msg);
            return;
        }
    }

    // Успіх!
    playAuthSound("success");
    updateNavbarUser();
    authModal?.classList.remove("show-auth");
    authForm.reset();
});

/* ========================= ОНОВИТИ ІМ'Я В НАВБАРІ ========================= */
// Показуємо ім'я або "Account" в кнопці
function updateNavbarUser() {
    const user = JSON.parse(localStorage.getItem("cybertechUser"));
    if (accountBtn) accountBtn.textContent = user ? user.username : (window.currentLang === "ua" ? "Акаунт" : "Account");
}

/* ========================= ВИЙТИ ========================= */
logoutBtn?.addEventListener("click", () => {
    localStorage.removeItem("cybertechUser");
    updateNavbarUser();
    accountDropdown?.classList.remove("show-dropdown");
});

/* ========================= ЗАПУСК ========================= */
// При завантаженні сторінки - оновлюємо кнопку акаунта
updateNavbarUser();
if (authName) authName.style.display = "none"; // ховаємо поле імені за замовчуванням