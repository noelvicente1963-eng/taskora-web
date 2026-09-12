const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const message = document.getElementById("message");


/*
 * Show / Hide Password
 */

togglePassword.addEventListener("click", () => {

    const isHidden = password.type === "password";

    password.type = isHidden ? "text" : "password";
});


/*
 * Login
 */

form.addEventListener("submit", (event) => {

    event.preventDefault();

    clearMessage();

    if (!email.value.trim()) {
        showMessage("Please enter your email.");
        email.focus();
        return;
    }

    if (!email.checkValidity()) {
        showMessage("Please enter a valid email.");
        email.focus();
        return;
    }

    if (!password.value.trim()) {
        showMessage("Please enter your password.");
        password.focus();
        return;
    }
    
});


/*
 * Message
 */

function showMessage(text) {
    message.textContent = text;
    message.classList.add("show");
}

function clearMessage() {
    message.textContent = "";
    message.classList.remove("show");
}
