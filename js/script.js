//  JavaScript for Auto-Close with Animation 

    document.addEventListener("DOMContentLoaded", function () {
        var navLinks = document.querySelectorAll(".navbar-nav .nav-link");
        var navbarCollapse = document.querySelector(".navbar-collapse");

        navLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                if (window.innerWidth < 992) { // Only for small screens
                    navbarCollapse.classList.add("closing"); // Start animation
                    setTimeout(function () {
                        navbarCollapse.classList.remove("show", "closing"); // Hide after animation
                    }, 400); // Match CSS duration
                }
            });
        });
    });



const roles = ["Cybersecurity Enthusiast", "Web Developer","Tech Explorer"];
let i = 0;
const animatedText = document.querySelector(".animated-text");

function typeEffect() {
    let role = roles[i % roles.length];
    animatedText.innerHTML = role;
    i++;
    setTimeout(typeEffect, 2000);
}

typeEffect();