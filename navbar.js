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
    const aboutSection = document.getElementById("about");

    if (scrollArrowBtn) {
        window.addEventListener("scroll", () => {
            const scrollTop = window.scrollY;
            const maxScroll = 200;
            let opacity = 1 - Math.min(scrollTop / maxScroll, 1);
            scrollArrowBtn.style.opacity = opacity;
            if(scrollTop<=maxScroll){
                scrollArrowBtn.hidden = false;
            }
            else {
                scrollArrowBtn.hidden = true;
            }
        });
    
        scrollArrowBtn.addEventListener("click", () => {
            aboutSection.scrollIntoView({ behavior: "smooth" });
        });
        
    }
    
    //change background color when row is hovered over
    document.querySelectorAll('.styled-table tr').forEach(row => {
        row.addEventListener('mouseover', () => {
            row.querySelectorAll('.shaded, .timeline-marker').forEach(cell => {
                cell.classList.add('hovered');
            });
        });
        row.addEventListener('mouseout', () => {
            row.querySelectorAll('.shaded, .timeline-marker').forEach(cell => {
                cell.classList.remove('hovered');
            });
        });
    });

    const abtSection = document.getElementById("about");
    
    const wave1 = document.getElementById("wave1");
    const wave2 = document.getElementById("wave2");
    const wave3 = document.getElementById("wave3");
    abtSection.addEventListener('mouseover', () => {
        wave1.classList.add("wave1hover");
        wave2.classList.add("wave2hover");
        wave3.classList.add("wave3hover");
    });
    abtSection.addEventListener('mouseout', () => {
        wave1.classList.remove("wave1hover");
        wave2.classList.remove("wave2hover");
        wave3.classList.remove("wave3hover");
    });

});

//resume pdf display when resume button is clicked
const resumeBtn = document.getElementById("resumeBtn");
resumeBtn.addEventListener("click", () => {
    window.open("resume 2024.pdf", "_blank");
});
document.addEventListener('DOMContentLoaded', () => {
    // Get canvas elements and contexts
    const canvas1 = document.getElementById("languages-canvas");
    const context1 = canvas1.getContext("2d");

    const canvas2 = document.getElementById("technologies-canvas");
    const context2 = canvas2.getContext("2d");

    const canvas3 = document.getElementById("softskills-canvas");
    const context3 = canvas3.getContext("2d");

    // Set canvas dimensions
    canvas1.width = 500;
    canvas1.height = 500;

    canvas2.width = 500;
    canvas2.height = 500;

    canvas3.width = 500;
    canvas3.height = 500;

    // Generate random values
    function generateRandLargeX() {
        return Math.random() * 500;
    }

    function generateRandLargeY() {
        return Math.random() * 500;
    }

    function generateRadius() {
        return Math.random() * 50 + 20; // Radius between 20 and 70
    }

    function generateRandVelocity() {
        return (Math.random() - 0.5); // Velocity between -1 and 1
    }

    // Define bubbles for each canvas
    const language_bubbles = [
        { x: generateRandLargeX(), y: generateRandLargeY(), radius: generateRadius(), content: 'Java', velocityX: generateRandVelocity(), velocityY: generateRandVelocity() },
        { x: generateRandLargeX(), y: generateRandLargeY(), radius: generateRadius(), content: 'CSS', velocityX: generateRandVelocity(), velocityY: generateRandVelocity() },
        { x: generateRandLargeX(), y: generateRandLargeY(), radius: generateRadius(), content: 'HTML', velocityX: generateRandVelocity(), velocityY: generateRandVelocity()},
        { x: generateRandLargeX(), y: generateRandLargeY(), radius: generateRadius(), content: 'C', velocityX: generateRandVelocity(), velocityY: generateRandVelocity()},
        { x: generateRandLargeX(), y: generateRandLargeY(), radius: generateRadius(), content: 'JavaScript', velocityX: generateRandVelocity(), velocityY: generateRandVelocity()},
        { x: generateRandLargeX(), y: generateRandLargeY(), radius: generateRadius(), content: 'Python', velocityX: generateRandVelocity(), velocityY: generateRandVelocity() },
        { x: generateRandLargeX(), y: generateRandLargeY(), radius: generateRadius(), content: 'R', velocityX: generateRandVelocity(), velocityY: generateRandVelocity() }
    ];

    const technologies_bubbles = [
        { x: generateRandLargeX(), y: generateRandLargeY(), radius: generateRadius(), content: 'RStudio', velocityX: generateRandVelocity(), velocityY: generateRandVelocity()},
        { x: generateRandLargeX(), y: generateRandLargeY(), radius: generateRadius(), content: 'React JS', velocityX: generateRandVelocity(), velocityY: generateRandVelocity()},
        { x: generateRandLargeX(), y: generateRandLargeY(), radius: generateRadius(), content: 'React Native', velocityX: generateRandVelocity(), velocityY: generateRandVelocity()},
        { x: generateRandLargeX(), y: generateRandLargeY(), radius: generateRadius(), content: 'bash', velocityX: generateRandVelocity(), velocityY: generateRandVelocity() },
        { x: generateRandLargeX(), y: generateRandLargeY(), radius: generateRadius(), content: 'linux', velocityX: generateRandVelocity(), velocityY: generateRandVelocity() },
        { x: generateRandLargeX(), y: generateRandLargeY(), radius: generateRadius(), content: 'git', velocityX: generateRandVelocity(), velocityY: generateRandVelocity()},
        { x: generateRandLargeX(), y: generateRandLargeY(), radius: generateRadius(), content: 'Asana', velocityX: generateRandVelocity(), velocityY: generateRandVelocity()},
        { x: generateRandLargeX(), y: generateRandLargeY(), radius: generateRadius(), content: 'Postman', velocityX: generateRandVelocity(), velocityY: generateRandVelocity()},
        { x: generateRandLargeX(), y: generateRandLargeY(), radius: generateRadius(), content: 'JUnit', velocityX: generateRandVelocity(), velocityY: generateRandVelocity()},
        { x: generateRandLargeX(), y: generateRandLargeY(), radius: generateRadius(), content: 'Yoast SEO', velocityX: generateRandVelocity(), velocityY: generateRandVelocity()},
        { x: generateRandLargeX(), y: generateRandLargeY(), radius: generateRadius(), content: 'WordPress', velocityX: generateRandVelocity(), velocityY: generateRandVelocity()},
        { x: generateRandLargeX(), y: generateRandLargeY(), radius: generateRadius(), content: 'Unity', velocityX: generateRandVelocity(), velocityY: generateRandVelocity()}
    ];

    const softskills_bubbles = [
        { x: generateRandLargeX(), y: generateRandLargeY(), radius: generateRadius(), content: 'cold calling', velocityX: generateRandVelocity(), velocityY: generateRandVelocity()},
        { x: generateRandLargeX(), y: generateRandLargeY(), radius: generateRadius(), content: 'organized', velocityX: generateRandVelocity(), velocityY: generateRandVelocity()},
        { x: generateRandLargeX(), y: generateRandLargeY(), radius: generateRadius(), content: 'adaptable', velocityX: generateRandVelocity(), velocityY: generateRandVelocity()},
        { x: generateRandLargeX(), y: generateRandLargeY(), radius: generateRadius(), content: 'communicative', velocityX: generateRandVelocity(), velocityY: generateRandVelocity()},
        { x: generateRandLargeX(), y: generateRandLargeY(), radius: generateRadius(), content: 'tutoring', velocityX: generateRandVelocity(), velocityY: generateRandVelocity()}
    ];

    // Draw bubbles on canvas
    function drawBubble(bubble, context) {
        context.beginPath();
        context.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
        context.fillStyle = 'rgba(240, 197, 238, .7)';
        context.strokeStyle = 'rgb(9, 67, 75)';
        context.stroke();
        context.fill();
        context.closePath();
        
        context.font = '20px Arial';
        context.fillStyle = 'rgb(9, 67, 75)';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(bubble.content, bubble.x, bubble.y);
    }

    // Animate bubbles
    function animate() {
        context1.clearRect(0, 0, 500, 500);
        context2.clearRect(0, 0, 500, 500);
        context3.clearRect(0, 0, 500, 500);

        language_bubbles.forEach(bubble => {
            drawBubble(bubble, context1);
            updateBubblePosition(bubble, 500, 500);
        });
        
        technologies_bubbles.forEach(bubble => {
            drawBubble(bubble, context2);
            updateBubblePosition(bubble, 500, 500);
        });
        
        softskills_bubbles.forEach(bubble => {
            drawBubble(bubble, context3);
            updateBubblePosition(bubble, 500, 500);
        });

        requestAnimationFrame(animate);
    }

    // Update bubble position and check boundaries
    function updateBubblePosition(bubble, canvasWidth, canvasHeight) {
        bubble.x += bubble.velocityX;
        bubble.y += bubble.velocityY;

        if (bubble.x - bubble.radius < 0) {
            bubble.x = bubble.radius;
            bubble.velocityX *= -1;
        } else if (bubble.x + bubble.radius > canvasWidth) {
            bubble.x = canvasWidth - bubble.radius;
            bubble.velocityX *= -1;
        }

        if (bubble.y - bubble.radius < 0) {
            bubble.y = bubble.radius;
            bubble.velocityY *= -1;
        } else if (bubble.y + bubble.radius > canvasHeight) {
            bubble.y = canvasHeight - bubble.radius;
            bubble.velocityY *= -1;
        }
    }

    animate();
});
