let text = "Hi, I'm Yesui";
let i = 0;
let speed = 100;
let dotInterval;

function type() {
    if (i < text.length) {
        document.getElementById("text").innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
    } else {
        dotInterval = setInterval(showDot, 1000);
    }
}

function showDot() {
    if (document.getElementById("dot").style.visibility === "hidden") {
        document.getElementById("dot").style.visibility = "visible";
    } else {
        document.getElementById("dot").style.visibility = "hidden";
    }
}

type();
