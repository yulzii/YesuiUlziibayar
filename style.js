//   setup
  

/**
   * Easy selector helper function
   */
const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

/**
   * Scrolls to an element with header offset
   */
const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })




// Home page text animation

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
        // document.getElementById("text").innerHTML += body;
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


var navLinks = document.querySelectorAll('.nav-tab');

navLinks.forEach(function(navLink) {
 navLink.addEventListener('click', function(e) {
    e.preventDefault();
    var targetId=this.getAttribute('href');
   navLinks.forEach(function(link) {
     link.classList.remove('active');
   });
   this.classList.add('active');
   var targetSection=document.querySelector(targetId);
   targetSection.scrollIntoView({behavior: 'smooth'});
 });
});