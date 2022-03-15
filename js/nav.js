const hamburgerIcon = document.getElementById("hamburgerIcon");
const closeIcon = document.getElementById("closeIcon");
const navEl = document.querySelector(".nav");

hamburgerIcon.addEventListener("click", () => {
    navEl.classList.add("active");
});

closeIcon.addEventListener("click", () => {
    navEl.classList.remove("active");
});
