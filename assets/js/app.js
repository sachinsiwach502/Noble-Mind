let menuIcon = document.querySelector(".menubar");
let menuList = document.querySelector(".menuList");
let body = document.body;

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("show");
    if (menuList.classList.contains("show")) {
        body.style.overflow = "hidden"
    } else {
        body.style.overflow = "auto";
    }
});

let navLinks = document.querySelectorAll(".nav-links");
navLinks.forEach(items => {
    items.addEventListener("click", () => {
        menuList.classList.remove("show");
        body.style.overflow = "auto";
    })
});

//---------------------- scroll to top
let scroll_top = document.querySelector(".scroll_to_top");
let scrol_pt = 200;
scroll_top.style.display = "none";
window.addEventListener("scroll", () => {
    if (window.scrollY > scrol_pt) {
        scroll_top.style.display = "block"
    } else {
        scroll_top.style.display = "none";
    }
});

scroll_top.addEventListener("click", () => {
    window.scrollTo({
        top: 0, behaviour: "smooth",
    })
});


// preloader---------------------
let preloader = document.querySelector(".preloader");
preloader.classList.add("d-flex");
setTimeout(() => {
    preloader.classList.add("d-none");
}, 3000);


