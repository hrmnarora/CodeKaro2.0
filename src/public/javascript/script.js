const mobileMenu = document.getElementById("mobileMenu");
        const mobileToggle = document.getElementById("mobileToggle");
        const navbar = document.getElementById("navbar");

        mobileToggle.addEventListener("click", function () {
            mobileMenu.classList.toggle("show");
            navbar.classList.toggle(
                "mobile-menu-open",
                mobileMenu.classList.contains("show")
            );
        });