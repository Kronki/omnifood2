// console.log("Pershendetje nga PBCA");

let firstName = "Behar";
let lastName = "Vershevci";

let fullName = firstName + " " + lastName;

console.log(fullName);

let header = document.querySelector(".hero-description .primary-header");

console.log(header);

let navButton = document.querySelector(".mobile-nav");
let navHeader = document.querySelector("#header");

console.log(navButton);
console.log(navHeader);

navButton.addEventListener("click", function(){
    navHeader.classList.toggle("open-nav");
});

let textToggle = document.querySelector(".hero-description .primary-header");

textToggle.addEventListener("click", function() {
    textToggle.classList.toggle("js-toggle1");
});


let buttonToggle = document.querySelector(".hero-section .btn-primary");

buttonToggle.addEventListener("click", function() {
    buttonToggle.classList.toggle("button-toggle");
})


console.log(buttonToggle);

let date = document.querySelector(".viti");

date.textContent = new Date().getFullYear();

console.log(date);

