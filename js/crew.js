const dotElms = document.querySelectorAll(".dot");
const imageEl = document.querySelector(".crew-sub-body-img");
const roleEl = document.querySelector(".h4");
const nameEl = document.querySelector(".h3");
const bioEl = document.querySelector(".crew-dis");
const crewBody = document.querySelector(".crew-sub-body");
let crewData;

fetch("data.json")
.then(res => res.json())
.then(data => crewData = data.crew);


dotElms.forEach(dot => {
    dot.addEventListener("click", (e) => {
        dotElms.forEach(item => {
            item.classList.remove("active");
        });
        crewBody.style.opacity = "0";
        crewBody.style.transform = "translateX(1000px)";
        e.target.classList.add("active");
        const dotId = e.target.id;
        changeContent(dotId);
        crewBody.style.transform = "translateX(0px)";
        crewBody.style.opacity = "1";
    });
});


function changeContent(id) {
    imageEl.src = crewData[id].images.webp;
    roleEl.innerHTML = crewData[id].role;
    nameEl.innerHTML = crewData[id].name;
    bioEl.innerHTML = crewData[id].bio;
}