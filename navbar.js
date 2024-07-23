// fixed navbar
const navbar=document.getElementById("navbar");
const content=document.getElementById("home");

const scrollThreshold=60;
window.addEventListener("scroll", () =>{
    if(window.scrollY > scrollThreshold) {
        navbar.classList.add("fixed");
    } else{
        navbar.classList.remove("fixed");
    }
});
