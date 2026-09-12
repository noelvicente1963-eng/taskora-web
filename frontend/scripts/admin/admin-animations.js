document.addEventListener("DOMContentLoaded", () => {

    const loginContainer =
        document.querySelector(".login-container");

    const brand =
        document.querySelector(".brand");

    const backgroundLogo =
        document.querySelector(".background-logo");

    const formGroups =
        document.querySelectorAll(".form-group");

    const signInButton =
        document.querySelector(".sign-in-button");


    /* =========================
       LOGIN CARD
    ========================= */

    loginContainer.style.opacity = "0";
    loginContainer.style.transform =
        "translateY(25px) scale(0.97)";

    setTimeout(() => {

        loginContainer.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

        loginContainer.style.opacity = "1";
        loginContainer.style.transform =
            "translateY(0) scale(1)";

    }, 100);


    /* =========================
       BRAND
    ========================= */

    brand.style.opacity = "0";
    brand.style.transform =
        "translateY(-15px)";

    setTimeout(() => {

        brand.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

        brand.style.opacity = "1";
        brand.style.transform =
            "translateY(0)";

    }, 300);


    /* =========================
       FORM GROUPS
    ========================= */

    formGroups.forEach((group, index) => {

        group.style.opacity = "0";
        group.style.transform =
            "translateX(-20px)";

        setTimeout(() => {

            group.style.transition =
                "opacity 0.5s ease, transform 0.5s ease";

            group.style.opacity = "1";
            group.style.transform =
                "translateX(0)";

        }, 500 + (index * 150));

    });


    /* =========================
       SIGN IN BUTTON
    ========================= */

    signInButton.style.opacity = "0";
    signInButton.style.transform =
        "translateY(15px) scale(0.95)";

    setTimeout(() => {

        signInButton.style.transition =
            "opacity 0.5s ease, transform 0.5s ease";

        signInButton.style.opacity = "1";
        signInButton.style.transform =
            "translateY(0) scale(1)";

    }, 800);


    /* =========================
       INPUT FOCUS
    ========================= */

    document.querySelectorAll("input").forEach(input => {

        input.addEventListener("focus", () => {

            input.closest(".input-container").animate(
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
       BACKGROUND LOGO
    ========================= */

    if (backgroundLogo) {

        backgroundLogo.animate(
            [
                {
                    transform:
                        "translate(0, 0) rotate(0deg)"
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

