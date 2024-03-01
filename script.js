const btn = document.getElementById("nav-btn");
const nav = document.getElementById("ul");
btn.addEventListener("click", (e) => {
  nav.classList.toggle("display-flex");
});
