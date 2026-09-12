document.addEventListener("DOMContentLoaded", () => {

    const loginContainer = document.querySelector(".login-container");
    const brand = document.querySelector(".brand");
    const backgroundLogo = document.querySelector(".background-logo");
    const formGroups = document.querySelectorAll(".form-group");
    const signInButton = document.querySelector(".sign-in-button");

    const loginForm = document.getElementById("loginForm");
    const password = document.getElementById("password");
    const togglePassword = document.getElementById("togglePassword");
    const message = document.getElementById("message");


    /* =========================
       INITIAL ANIMATION
    ========================= */

    loginContainer.style.opacity = "0";
    loginContainer.style.transform = "translateY(25px) scale(0.97)";

    setTimeout(() => {
        loginContainer.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

        loginContainer.style.opacity = "1";
        loginContainer.style.transform =
            "translateY(0) scale(1)";
    }, 100);


    /* =========================
       BRAND ANIMATION
    ========================= */

    brand.style.opacity = "0";
    brand.style.transform = "translateY(-15px)";

    setTimeout(() => {
        brand.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

        brand.style.opacity = "1";
        brand.style.transform = "translateY(0)";
    }, 300);


    /* =========================
       FORM SLIDE ANIMATION
    ========================= */

    formGroups.forEach((group, index) => {

        group.style.opacity = "0";
        group.style.transform = "translateX(-20px)";

        setTimeout(() => {
            group.style.transition =
                "opacity 0.5s ease, transform 0.5s ease";

            group.style.opacity = "1";
            group.style.transform = "translateX(0)";
        }, 500 + (index * 150));
    });


    /* =========================
       BUTTON POP
    ========================= */

    signInButton.style.opacity = "0";
    signInButton.style.transform = "translateY(15px) scale(0.95)";

    setTimeout(() => {
        signInButton.style.transition =
            "opacity 0.5s ease, transform 0.5s ease";

        signInButton.style.opacity = "1";
        signInButton.style.transform =
            "translateY(0) scale(1)";
    }, 800);


    /* =========================
       PASSWORD TOGGLE
    ========================= */

    togglePassword.addEventListener("click", () => {

        const isPassword =
            password.type === "password";

        password.type =
            isPassword ? "text" : "password";

        togglePassword.textContent =
            isPassword ? "◉" : "◉";

        togglePassword.style.transform = "scale(1.2)";

        setTimeout(() => {
            togglePassword.style.transform = "scale(1)";
        }, 150);
    });


    /* =========================
       INPUT FOCUS
    ========================= */

    document.querySelectorAll("input").forEach(input => {

        input.addEventListener("focus", () => {

            input.closest(".input-container")
                .animate(
                    [
                        { transform: "scale(1)" },
                        { transform: "scale(1.01)" },
                        { transform: "scale(1)" }
                    ],
                    {
                        duration: 220,
                        easing: "ease-out"
                    }
                );
        });

    });


    /* =========================
       FORM SUBMIT
    ========================= */

    loginForm.addEventListener("submit", (event) => {

        event.preventDefault();

        message.textContent = "Please check your credentials.";
        message.classList.add("show");

        message.animate(
            [
                {
                    opacity: 0,
                    transform: "translateY(-8px)"
                },
                {
                    opacity: 1,
                    transform: "translateY(0)"
                }
            ],
            {
                duration: 300,
                easing: "ease-out"
            }
        );

    });


    /* =========================
       LOGO FLOAT EFFECT
    ========================= */

    if (backgroundLogo) {

        backgroundLogo.animate(
            [
                {
                    transform: "translate(0, 0) rotate(0deg)"
                },
                {
                    transform:
                        "translate(-18px, 12px) rotate(2deg)"
                },
                {
                    transform:
                        "translate(0, 0) rotate(0deg)"
                }
            ],
            {
                duration: 8000,
                iterations: Infinity,
                easing: "ease-in-out"
            }
        );

    }

});

  

