//fixed navbar
const navbar = document.getElementById("navbar");
const scrollThreshold = 60;
window.addEventListener("scroll", () => {
    if (window.scrollY > scrollThreshold) {
        navbar.classList.add("fixed");
    } else {
        navbar.classList.remove("fixed");
    }
});

//animated scroll button on home
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
    
        scrollArrowBtn.addEventListener("click", () => {
            experienceSection.scrollIntoView({ behavior: "smooth" });
            
        });
        
    }
    
    //change background color when row is hovered over
    document.querySelectorAll('.styled-table tr').forEach(row => {
    row.addEventListener('mouseover', () => {
        const shaded = row.querySelectorAll('.shaded').forEach(cell => {
            cell.classList.add('hovered');
        });
    });
    row.addEventListener('mouseout', () => {
        row.querySelectorAll('.shaded').forEach(cell => {
            cell.classList.remove('hovered');
        });
    });
});


});

//resume pdf display when resume button is clicked
const resumeBtn = document.getElementById("resumeBtn");
resumeBtn.addEventListener("click", () => {
    window.open("resume 2024.pdf", "_blank");
});
