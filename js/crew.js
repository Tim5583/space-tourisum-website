const dotElms = document.querySelectorAll(".dot");
const imageEl = document.querySelector(".crew-sub-body-img");
const roleEl = document.querySelector(".h4");
const nameEl = document.querySelector(".h3");
const bioEl = document.querySelector(".crew-dis");
let crewData;

fetch("data.json")
.then(res => res.json())
.then(data => crewData = data.crew);


dotElms.forEach(dot => {
    dot.addEventListener("click", (e) => {
        dotElms.forEach(item => {
            item.classList.remove("active");
        });
        e.target.classList.add("active");
        const dotId = e.target.id;
        changeContent(dotId);
    });
});


function changeContent(id) {
    imageEl.src = crewData[id].images.webp;
    roleEl.innerHTML = crewData[id].role;
    nameEl.innerHTML = crewData[id].name;
    bioEl.innerHTML = crewData[id].bio;
}