const menu = document.querySelector(".icon");
const sideBar = document.querySelector(".side-bar");
const body = document.body;


// Function to open the sidebar
menu.addEventListener("click", (event) => {
    sideBar.style.display = "flex";
    body.style.overflow = "hidden";
    event.stopPropagation(); // Prevent immediate closing
});

const arrow = document.querySelector(".arrow");
const paragraph = document.querySelector(".paragrph");
let isDisplay = true;

arrow.addEventListener("click", () => {
    if (isDisplay) {
        paragraph.style.display = "none";
    } else {
        paragraph.style.display = "block";
    }
    isDisplay = !isDisplay; // Toggle the state correctly
});

// Function to close the sidebar when clicking outside
document.addEventListener("click", (event) => {
    if (!sideBar.contains(event.target) && !menu.contains(event.target)) {
        sideBar.style.display = "none";
        body.style.overflow = "auto"; // Restore scrolling
    }
});

// Hide sidebar when screen width is greater than 750px
const handleResize = () => {
    if (window.innerWidth > 750) {
        sideBar.style.display = "none";
        body.style.overflow = "auto";
    }
};

// Run once on page load
handleResize();

// Listen for window resize
window.addEventListener("resize", handleResize);