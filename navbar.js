// fixed navbar
const navbar=document.getElementById("navbar");
const content=document.getElementById("home");

const scrollArrowBtn = document.getElementById('scrollArrowDiv');
const projectsSection = document.getElementById('experience');

const scrollThreshold=60;
window.addEventListener("scroll", () =>{
    if(window.scrollY > scrollThreshold) {
        navbar.classList.add("fixed");
    } else{
        navbar.classList.remove("fixed");
    }
});


scrollArrowBtn.addEventListener('click', function() {
    projectsSection.scrollIntoView({ behavior: 'smooth' });
});

window.addEventListener("scroll", () =>{
    if(window.scrollY > 100) {
        scrollArrowBtn.classList.add("hidden");
    }else{
        scrollArrowBtn.classList.remove("hidden");

    }
});