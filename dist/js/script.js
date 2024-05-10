// Window On Scroll Effect
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");
  const sections = document.querySelectorAll("section");
  const navLi = document.querySelectorAll("header nav ul li a");

  var current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.add("hidden");
  }
};

// Scroll Reveal Effect
const sr = ScrollReveal({
  origin: 'bottom',
  distance: '35px',
  duration: 1500,
})
sr.reveal(`.reveal-effect`);

// Navbar Hamburger Menu Toggle
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

window.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target)) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// Light Mode (in default is dark mode)
const lightmodeToggle = document.querySelector("#lightmode-toggle");
const icon = document.querySelector("#icon");

lightmodeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  if (document.body.classList.contains("light-mode")) {
    icon.src = "./dist/images/moon.png";
    localStorage.setItem("preferredTheme", "light-mode");
  } else {
    icon.src = "./dist/images/sun.svg";
    localStorage.removeItem("preferredTheme");
  }
});

if (localStorage.getItem("preferredTheme") == "light-mode") {
  document.body.classList.toggle("light-mode");
  icon.src = "./dist/images/moon.png";
}

// Swiper JS Configuration
var swiper = new Swiper(".testimonialSwiper", {
  loop: true,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

var swiper = new Swiper(".logoSwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  breakpoints: {
    480: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
  grabCursor: true,
  autoplay: {
    delay: 2000,
  },
});

// Magnific Popup Configuration
$(document).ready(function () {
  $(".zoom-gallery").magnificPopup({
    delegate: "a",
    type: "image",
    closeOnContentClick: true,
    closeBtnInside: true,
    fixedContentPos: true,
    mainClass: "mfp-img-mobile",
    image: {
      verticalFit: true,
    },
    gallery: {
      enabled: true,
      navigateByImgClick: true,
    },
  });
});
