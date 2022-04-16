// console.log("Pershendetje nga PBCA");

let firstName = "Behar";
let lastName = "Vershevci";

let fullName = firstName + " " + lastName;

console.log(fullName);

let header = document.querySelector(".hero-description .primary-header");

console.log(header);

header.addEventListener("click", function() {
    header.style.backgroundColor = "#f1f23a";
    header.style.color = "#1f4fa2";
    header.style.transition = "all 4s";
    header.style.transform = "rotate(360deg)";
    header.style.textTransform = "uppercase";
    console.log(header.textContent);
});

let navButton = document.querySelector(".mobile-nav");
let navHeader = document.querySelector("#header");

console.log(navButton);
console.log(navHeader);

navButton.addEventListener("click", function(){
    navHeader.classList.toggle("open-nav");
});