/* MOBILE MENU */
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if(menuBtn){
  menuBtn.onclick = () => {
    mobileMenu.classList.toggle("max-h-96");
    mobileMenu.classList.toggle("opacity-100");
    mobileMenu.classList.toggle("py-6");
  };
}

/* ACTIVE LINK (basado en ruta) */
const current = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-link, .mobile-link").forEach(link => {
  const href = link.getAttribute("href");

  if(href === current || (current === "" && href === "index.html")){
    link.classList.add("active-links");
  }
});
