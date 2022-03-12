const nameEl = document.querySelector(".h3");
const descriptionEl = document.querySelector(".technology-dis");
const mainImg = document.querySelector(".img");
const sourceImg = document.querySelector(".sourceImg");
const buttonsEl = document.querySelectorAll(".number-round");
let technologyData;

fetch("data.json")
.then(res => res.json())
.then(data => technologyData = data.technology);

buttonsEl.forEach(button => {
    button.addEventListener("click", (e) => {
        buttonsEl.forEach(item => {
            item.classList.remove("active");
        });
        e.target.classList.add("active");
        const buttonId = e.target.id;
        descriptionEl.innerHTML = technologyData[buttonId].description;
        nameEl.innerHTML = technologyData[buttonId].name;
        mainImg.src = technologyData[buttonId].images.landscape;
        sourceImg.srcset = technologyData[buttonId].images.portrait;
    });
});
