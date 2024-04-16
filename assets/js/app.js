let menuIcon = document.querySelector(".menubar");
let menuList = document.querySelector(".menuList");

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("show")
})