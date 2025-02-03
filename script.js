const mainu = document.querySelector(".icon")
const sideBar = document.querySelector(".side-bar")
const body = document.querySelector("body")
const header = document.querySelector(".top")



mainu.addEventListener("click", () => {
    sideBar.style.display = "flex"
    body.style.overflow = "hidden"
})