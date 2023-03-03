/* SHOW MENU */
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* MENU SHOW */
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* MENU HIDDEN */
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/* REMOVE MENU MOBILE */
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/* HOME SWIPER */
let homeSwiper = new Swiper(".home-swiper", {
  spaceBetween: 30,
  loop: "true",

  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});

/* change body's background color */

let root = document.documentElement;


homeSwiper.on("transitionEnd", function (e) {
  if (this.activeIndex == 1) {
    root.style.setProperty(
      "--body-color",
      "linear-gradient(to right, #d868ff, #7a03ab)"
    );
    root.style.setProperty("--sub", "#fff");
    root.style.setProperty("--title-color", "#ffffff");
    root.style.setProperty(
      "--container-color",
      "linear-gradient(136deg, #d868ff, #7a03ab)"
    );
  }
  if (this.activeIndex == 2) {
    root.style.setProperty(
      "--body-color",
      "linear-gradient(to right, #E8CAFB, #6A4FB6)"
    );
    root.style.setProperty("--sub", "#303056");
    root.style.setProperty("--title-color", "#303056");
    root.style.setProperty(
      "--container-color",
      "linear-gradient(136deg, #E8CAFB, #6A4FB6)"
    );
  }
  if (this.activeIndex == 3) {
    root.style.setProperty(
      "--body-color",
      "linear-gradient(to right, #5B874B, #0C3720)"
    );
    root.style.setProperty("--sub", "#ffffff");
    root.style.setProperty("--title-color", "#ffffff");
    root.style.setProperty(
      "--container-color",
      "linear-gradient(136deg, #5B874B, #0C3720)"
    );
  }
});
/* CHANGE BACKGROUND HEADER */
function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/* NEW SWIPER */
let newSwiper = new Swiper(".new-swiper", {
  centeredSlides: true,
  slidesPerView: "auto",
  loop: "true",
  spaceBetween: 16
});

/* SCROLL SECTIONS ACTIVE LINK */
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/* SHOW SCROLL UP */
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 460 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 460) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/* SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400
  // reset: true
});

sr.reveal(`.home-swiper, .new-swiper, .newsletter__container`);
sr.reveal(`.category__data, .trick__content, .footer__content, .new-year-block, .trick-block`, {
  interval: 100
});
sr.reveal(`.about__data, .discount__img`, { origin: "left" });
sr.reveal(`.about__img, .discount__data`, { origin: "right" });