// toggle icon navbar
let menu = document.querySelector("#menu-icon");
let nav = document.querySelector("nav");
menu.onclick = () => {
  menu.classList.toggle("fa-x");
  nav.classList.toggle("active");
};
// scroll sec active link
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // for sticky navbar
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  // remove toggle icon and navbar when click navbar link(scroll)
  menu.classList.remove("fa-x");
  nav.classList.remove("active");
};

// scroll reveal
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".home-content,.heading", { origin: "top" });
ScrollReveal().reveal(".home-img,.services-cont,.portfolio-box,.contact form", {
  origin: "bottom",
});
ScrollReveal().reveal(".home-content h1,.about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p,.about-content", { origin: "right" });

// typed.js
const typed = new Typed(".typing", {
  Strings: ["Frontend Developer","Youtuber","Backend Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 100,
  loop: true,
});
function openpopup() {
  alert("Your data has been submitted successfully!");
}
