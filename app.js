const nav = document.querySelector(".nav-links");
const burguer = document.querySelector(".burger");
const links = nav.querySelectorAll("a");

burguer.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  burguer.classList.toggle("toggle");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    if (nav.classList.contains("nav-open")) nav.classList.remove("nav-open");
    if (burguer.classList.contains("toggle"))
      burguer.classList.remove("toggle");
  });
});
