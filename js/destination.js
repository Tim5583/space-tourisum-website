const planetLinks = document.querySelectorAll(".planets-links");
const descriptionEl = document.querySelector(".destination-des");
const imgEl = document.querySelector(".planet-img");
const distanceEl = document.querySelector("#distance");
const travelTimeEl = document.querySelector("#travel-time");
const nameEl = document.querySelector("#name");
let pageData;

// fetch data form the file 
fetch("data.json")
.then(res => res.json())
.then(data => {
    pageData = data.destinations;
});


planetLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        // remove all active classes from planets links 
        planetLinks.forEach(item => {
            item.classList.remove("active");
        });
        e.target.classList.add("active");
        
        // get the id of clicked item 
        const idEl = e.target.id;

        // insert data into the page 
        imgEl.src = pageData[idEl].images.webp;
        nameEl.innerHTML = pageData[idEl].name;
        descriptionEl.innerHTML = pageData[idEl].description;
        distanceEl.innerHTML = pageData[idEl].distance;
        travelTimeEl.innerHTML = pageData[idEl].travel;
    });
});