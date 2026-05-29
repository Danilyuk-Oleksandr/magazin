/* ========================= SOUNDS ========================= */
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
    s.play().catch(() => {});
}

document.addEventListener("click", () => {
    Object.values(authSounds).forEach(s => s.load());
}, { once: true });

/* ========================= ELEMENTS ========================= */
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

let authMode = "login";

/* ========================= DROPDOWN ========================= */
accountBtn?.addEventListener("click", e => {
    e.stopPropagation();
    accountDropdown?.classList.toggle("show-dropdown");
});

document.addEventListener("click", e => {
    if (!e.target.closest(".account-wrapper")) {
        accountDropdown?.classList.remove("show-dropdown");
    }
});

/* ========================= OPEN LOGIN ========================= */
openLogin?.addEventListener("click", () => {
    authMode = "login";
    if (authTitle) authTitle.textContent = "Login";
    if (authName) authName.style.display = "none";
    playAuthSound("modalOpen");
    authModal?.classList.add("show-auth");
    accountDropdown?.classList.remove("show-dropdown");
});

/* ========================= OPEN REGISTER ========================= */
openRegister?.addEventListener("click", () => {
    authMode = "register";
    if (authTitle) authTitle.textContent = "Create Account";
    if (authName) authName.style.display = "block";
    playAuthSound("modalOpen");
    authModal?.classList.add("show-auth");
    accountDropdown?.classList.remove("show-dropdown");
});

/* ========================= CLOSE MODAL ========================= */
closeAuth?.addEventListener("click", () => {
    playAuthSound("close");
    authModal?.classList.remove("show-auth");
});

authModal?.addEventListener("click", e => {
    if (e.target === authModal) authModal.classList.remove("show-auth");
});

document.addEventListener("keydown", e => {
    if (e.key === "Escape") authModal?.classList.remove("show-auth");
});

/* ========================= AUTH SUBMIT ========================= */
authForm?.addEventListener("submit", e => {
    e.preventDefault();

    const email = authEmail?.value.trim();
    const password = authPassword?.value.trim();
    const username = authName?.value.trim();

    if (!email || !password) {
        playAuthSound("error");
        return;
    }

    if (authMode === "register") {
        if (!username) { playAuthSound("error"); return; }
        localStorage.setItem("cybertechUser", JSON.stringify({ username, email }));
    } else {
        const saved = JSON.parse(localStorage.getItem("cybertechUser"));
        if (!saved) { playAuthSound("error"); alert("Account not found. Please register first."); return; }
    }

    playAuthSound("success");
    updateNavbarUser();
    authModal?.classList.remove("show-auth");
    authForm.reset();
});

/* ========================= UPDATE NAVBAR ========================= */
function updateNavbarUser() {
    const user = JSON.parse(localStorage.getItem("cybertechUser"));
    if (accountBtn) accountBtn.textContent = user ? user.username : "Account";
}

/* ========================= LOGOUT ========================= */
logoutBtn?.addEventListener("click", () => {
    localStorage.removeItem("cybertechUser");
    updateNavbarUser();
    accountDropdown?.classList.remove("show-dropdown");
});

/* ========================= INIT ========================= */
updateNavbarUser();
if (authName) authName.style.display = "none";