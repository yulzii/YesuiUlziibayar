const navbar = document.getElementById("navbar");

const scrollThreshold = 60;
window.addEventListener("scroll", () => {
    if (window.scrollY > scrollThreshold) {
        navbar.classList.add("fixed");
    } else {
        navbar.classList.remove("fixed");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const scrollArrowBtn = document.getElementById("scrollArrowBtn");
    const experienceSection = document.getElementById("experience");

    if (scrollArrowBtn) {
        window.addEventListener("scroll", () => {
            const scrollTop = window.scrollY;
            const maxScroll = 200;
            let opacity = 1 - Math.min(scrollTop / maxScroll, 1);
            scrollArrowBtn.style.opacity = opacity;
        });
        window.addEventListener("click", () => {
            experienceSection.scrollIntoView({ behavior: "smooth" });
        });
    }
});
