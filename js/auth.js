const accountBtn =
    document.getElementById("accountBtn");

const accountDropdown =
    document.getElementById("accountDropdown");

const authModal =
    document.getElementById("authModal");

const closeAuth =
    document.getElementById("closeAuth");

const openLogin =
    document.getElementById("openLogin");

const openRegister =
    document.getElementById("openRegister");

const logoutBtn =
    document.getElementById("logoutBtn");

const authTitle =
    document.getElementById("authTitle");

const authForm =
    document.getElementById("authForm");

const authName =
    document.getElementById("authName");

const authEmail =
    document.getElementById("authEmail");

const authPassword =
    document.getElementById("authPassword");

let authMode = "login";

/* =========================
   SOUNDS
========================= */

const authSounds = {

    modalOpen:
        new Audio("sounds/modal-open.wav"),

    success:
        new Audio("sounds/success.wav"),

    hover:
        new Audio("sounds/hover.wav"),

    close:
        new Audio("sounds/close.wav"),

    error:
        new Audio("sounds/error.wav")
};

function playAuthSound(sound) {

    if (!authSounds[sound]) return;

    authSounds[sound].currentTime = 0;

    authSounds[sound].volume = 0.35;

    authSounds[sound].play();

}

/* =========================
   DROPDOWN
========================= */

accountBtn?.addEventListener("click", () => {

    playAuthSound("hover");

    accountDropdown.classList.toggle("show-dropdown");

});

/* =========================
   OPEN LOGIN
========================= */

openLogin?.addEventListener("click", () => {

    authMode = "login";

    authTitle.textContent = "Login";

    authName.style.display = "none";

    playAuthSound("modalOpen");

    authModal.classList.add("show-auth");

});

/* =========================
   OPEN REGISTER
========================= */

openRegister?.addEventListener("click", () => {

    authMode = "register";

    authTitle.textContent = "Create Account";

    authName.style.display = "block";

    playAuthSound("modalOpen");

    authModal.classList.add("show-auth");

});

/* =========================
   CLOSE MODAL
========================= */

closeAuth?.addEventListener("click", () => {

    playAuthSound("close");

    authModal.classList.remove("show-auth");

});

/* =========================
   CLOSE ON BACKGROUND
========================= */

authModal?.addEventListener("click", event => {

    if (
        event.target === authModal
    ) {

        authModal.classList.remove(
            "show-auth"
        );

    }

});

/* =========================
   REGISTER / LOGIN
========================= */

authForm?.addEventListener("submit", event => {

    event.preventDefault();

    const email =
        authEmail.value.trim();

    const password =
        authPassword.value.trim();

    const username =
        authName.value.trim();

    if (!email || !password) {

        playAuthSound("error");

        alert("Fill all fields");

        return;
    }

    if (authMode === "register") {

        if (!username) {

            playAuthSound("error");

            alert("Enter username");

            return;
        }

        const user = {

            username,
            email

        };

        localStorage.setItem(
            "cybertechUser",
            JSON.stringify(user)
        );

    }

    if (authMode === "login") {

        const savedUser =
            JSON.parse(
                localStorage.getItem(
                    "cybertechUser"
                )
            );

        if (!savedUser) {

            playAuthSound("error");

            alert("Account not found");

            return;
        }

    }

    playAuthSound("success");

    updateNavbarUser();

    authModal.classList.remove("show-auth");

});

/* =========================
   UPDATE NAVBAR
========================= */

function updateNavbarUser() {

    const user =
        JSON.parse(
            localStorage.getItem(
                "cybertechUser"
            )
        );

    if (user) {

        accountBtn.textContent =
            user.username;

    } else {

        accountBtn.textContent =
            "Account";
    }

}

/* =========================
   LOGOUT
========================= */

logoutBtn?.addEventListener("click", () => {

    localStorage.removeItem(
        "cybertechUser"
    );

    updateNavbarUser();

});

/* =========================
   INIT
========================= */

updateNavbarUser();

/* =========================
   PRELOAD AUTH SOUNDS
========================= */

document.addEventListener(
    "click",
    () => {

        Object.values(authSounds).forEach(sound => {

            sound.load();

        });

    },
    { once: true }
);